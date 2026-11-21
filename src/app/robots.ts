import type { MetadataRoute } from "next";
import { SITE_URL } from "@/i18n/config";

// Rastreadores de IA permitidos explícitamente (GEO): queremos que GROW
// aparezca citada en respuestas de ChatGPT, Claude, Perplexity y Gemini.
const aiCrawlers = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: aiCrawlers, allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
