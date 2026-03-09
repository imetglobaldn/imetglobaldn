import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: [
          "GPTBot",           // OpenAI
          "ChatGPT-User",     // OpenAI
          "OAI-SearchBot",    // OpenAI
          "anthropic-ai",     // Anthropic Claude
          "Claude-Web",       // Anthropic
          "CCBot",            // Common Crawl (AI training data)
          "FacebookBot",      // Meta AI
          "Bytespider",       // ByteDance/TikTok
          "Google-Extended",  // Google Bard/Gemini training
          "Applebot-Extended",// Apple AI training
          "Diffbot",          // AI scraper
          "ImagesiftBot",     // AI image scraper
          "cohere-ai",        // Cohere AI
        ],
        disallow: "/",
      },

      // ─── Aggressive SEO Bots — API routes block ───────
      {
        userAgent: [
          "AhrefsBot",
          "SemrushBot",
          "MJ12bot",
          "DotBot",
          "BLEXBot",
          "PetalBot",
        ],
        disallow: ["/api/", "/admin/"],
        crawlDelay: 10, // 10 second delay between requests
      },

      // ─── Good Bots — Google, Bing, etc ────────────────
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/_next/",
        ],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/_next/",
        ],
      },

      // ─── Default ─────────────────────────
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",           
          "/admin/",
        ],
      },
    ],
    sitemap: "https://www.imetglobal.com/sitemap.xml",
    host: "https://www.imetglobal.com",
  };
}
