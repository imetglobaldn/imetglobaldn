import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ============================================
// RATE LIMITER CONFIG — yahan se adjust karo
// ============================================
const RATE_LIMIT_CONFIG = {
  api: { max: 30, windowMs: 60 * 1000 },        // API: 30 req/min
  contact: { max: 3, windowMs: 60 * 60 * 1000 }, // Contact form: 3 req/hour
};

// In-memory store (Vercel serverless pe per-instance hota hai)
// Production mein zyada traffic ho toh Upstash Redis use karo
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

function getRateLimitKey(ip: string, path: string): string {
  // Contact/form routes ke liye alag key
  if (path.includes("/contact") || path.includes("/email") || path.includes("/submit")) {
    return `contact:${ip}`;
  }
  return `api:${ip}`;
}

function checkRateLimit(ip: string, path: string): {
  allowed: boolean;
  remaining: number;
  resetTime: number;
} {
  const key = getRateLimitKey(ip, path);
  const isContact = key.startsWith("contact:");
  const config = isContact ? RATE_LIMIT_CONFIG.contact : RATE_LIMIT_CONFIG.api;

  const now = Date.now();
  const record = rateLimitStore.get(key);

  // New window ya expired window
  if (!record || now > record.resetTime) {
    const newRecord = { count: 1, resetTime: now + config.windowMs };
    rateLimitStore.set(key, newRecord);
    return {
      allowed: true,
      remaining: config.max - 1,
      resetTime: newRecord.resetTime,
    };
  }

  // Limit exceed ho gayi
  if (record.count >= config.max) {
    return {
      allowed: false,
      remaining: 0,
      resetTime: record.resetTime,
    };
  }

  // Count increment karo
  record.count++;
  return {
    allowed: true,
    remaining: config.max - record.count,
    resetTime: record.resetTime,
  };
}

// ============================================
// ALLOWED ORIGINS — apne domains yahan rakho
// ============================================
const allowedOrigins = [
  "https://www.imetglobal.com",
  "https://imetglobal.com",
  "http://localhost:3000",
  "http://localhost:3001",
];

export function middleware(request: NextRequest) {
  const origin = request.headers.get("origin") || "";
  const path = request.nextUrl.pathname;

  // ─── STEP 1: IP Extract karo ───────────────
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  // ─── STEP 2: Rate Limit Check ──────────────
  const { allowed, remaining, resetTime } = checkRateLimit(ip, path);

  if (!allowed) {
    const retryAfterSecs = Math.ceil((resetTime - Date.now()) / 1000);
    return new NextResponse(
      JSON.stringify({
        message: "Too many requests. Please try again later.",
        retryAfter: retryAfterSecs,
      }),
      {
        status: 429,
        headers: {
          "Content-Type": "application/json",
          "Retry-After": String(retryAfterSecs),
          "X-RateLimit-Remaining": "0",
          "X-RateLimit-Reset": String(Math.ceil(resetTime / 1000)),
        },
      }
    );
  }

  // ─── STEP 3: CORS Check ────────────────────
  const isAllowedOrigin = allowedOrigins.includes(origin) || origin === "";

  // Preflight OPTIONS request handle karo
  if (request.method === "OPTIONS") {
    return new NextResponse(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Origin": isAllowedOrigin
          ? origin
          : allowedOrigins[0],
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Max-Age": "86400", // 24 hours preflight cache
      },
    });
  }

  // ─── STEP 4: Response banao + headers lagao ──
  const response = NextResponse.next();

  // CORS headers
  response.headers.set("Access-Control-Allow-Credentials", "true");
  response.headers.set(
    "Access-Control-Allow-Origin",
    isAllowedOrigin ? origin : allowedOrigins[0]
  );
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  // Rate limit info headers (frontend ko pata chale)
  response.headers.set("X-RateLimit-Remaining", String(remaining));
  response.headers.set(
    "X-RateLimit-Reset",
    String(Math.ceil(resetTime / 1000))
  );

  return response;
}

// Sirf API routes pe run karo — same as before
export const config = {
  matcher: "/api/:path*",
};
