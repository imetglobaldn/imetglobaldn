import { z } from "zod";
import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

// ─── Schema ───────────────────────────────────────────────────────────────────

const formSchema = z.object({
  name: z.string().min(2).max(100).trim(),
  email: z.string().email().max(200).trim(),
  phone: z
    .string()
    .regex(/^[+\d\s\-()]{7,20}$/, "Invalid phone number")
    .trim(),
  role: z.string().min(1).max(100).trim(),
  city: z.string().min(1).max(100).trim(),
  state: z.string().min(1).max(100).trim(),
  country: z.string().min(1).max(100).trim(),
  organization: z.string().min(1).max(200).trim(),
  yearsOfExperience: z.string().max(50).optional(),
  linkedInProfile: z
    .string()
    .url("Invalid LinkedIn URL")
    .includes("linkedin.com", { message: "Must be a LinkedIn URL" })
    .optional()
    .or(z.literal("")),
});

// ─── Rate Limiter ─────────────────────────────────────────────────────────────

const rateLimit = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour

function checkRateLimit(ip: string): boolean {
  const now = Date.now();

  // Cleanup expired entries to prevent unbounded memory growth
  for (const [key, val] of rateLimit.entries()) {
    if (now > val.resetTime) rateLimit.delete(key);
  }

  const record = rateLimit.get(ip);

  if (!record || now > record.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) return false;

  record.count++;
  return true;
}

// ─── Sanitizer ────────────────────────────────────────────────────────────────

function sanitize(str: string): string {
  return str
    .replace(/&/g, "&amp;")   // must be first to avoid double-escaping
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .trim();
}

// ─── Nodemailer Singleton ─────────────────────────────────────────────────────

const transporter =
  process.env.GMAIL_USER && process.env.GMAIL_PASS
    ? nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    })
    : null;

// ─── POST Handler ─────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    // 1. Extract IP
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0] ||
      request.headers.get("x-real-ip") ||
      "unknown";

    // 2. Rate limit check
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { message: "Too many submissions. Please try again after 1 hour." },
        { status: 429 }
      );
    }

    // 3. Parse body
    let rawData: unknown;
    try {
      rawData = await request.json();
    } catch {
      return NextResponse.json(
        { message: "Invalid request format." },
        { status: 400 }
      );
    }

    // 4. Validate with Zod
    const result = formSchema.safeParse(rawData);
    if (!result.success) {
      const errors = result.error.errors.map(
        (e) => `${e.path.join(".")}: ${e.message}`
      );
      return NextResponse.json(
        { message: `Validation failed: ${errors.join(", ")}` },
        { status: 400 }
      );
    }

    const {
      name,
      email,
      phone,
      role,
      city,
      state,
      country,
      organization,
      yearsOfExperience,
      linkedInProfile,
    } = result.data;

    // 5. Sanitize all fields
    const safe = {
      name: sanitize(name),
      email: sanitize(email),
      phone: sanitize(phone),
      role: sanitize(role),
      city: sanitize(city),
      state: sanitize(state),
      country: sanitize(country),
      organization: sanitize(organization),
      yearsOfExperience: yearsOfExperience ? sanitize(yearsOfExperience) : "N/A",
      linkedInProfile: linkedInProfile ? sanitize(linkedInProfile) : "N/A",
    };

    // 6. Guard: transporter must be initialized
    if (!transporter) {
      console.error("Missing GMAIL_USER or GMAIL_PASS env variables");
      return NextResponse.json(
        { message: "Server configuration error." },
        { status: 500 }
      );
    }

    // 7. Build and send email
    const mailOptions = {
      from: `"imetglobal Forms" <${process.env.GMAIL_USER}>`,
      to: process.env.NOTIFY_EMAIL || process.env.GMAIL_USER,
      cc: process.env.NOTIFY_EMAIL ? process.env.GMAIL_USER : undefined,
      replyTo: safe.email,
      subject: `New Form Submission — ${safe.name}`,
      text: `
New Form Submission
===================
Name:                ${safe.name}
Email:               ${safe.email}
Phone:               ${safe.phone}
Role:                ${safe.role}
Organization:        ${safe.organization}
City:                ${safe.city}
State:               ${safe.state}
Country:             ${safe.country}
Years of Experience: ${safe.yearsOfExperience}
LinkedIn Profile:    ${safe.linkedInProfile}
      `.trim(),
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      message: "Your details have been submitted successfully",
    });

  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
