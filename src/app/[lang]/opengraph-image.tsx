import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { hasLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "GROW";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(hasLocale(lang) ? lang : "es");
  const logo = await readFile(join(process.cwd(), "public/brand/logo-white.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#46074F",
          padding: "72px 80px",
          color: "#FFFFFF",
        }}
      >
        <img src={logoSrc} alt="" width={244} height={100} />
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1, letterSpacing: "-0.04em", maxWidth: 900 }}>
            {dict.org.slogan}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 30, color: "#01E1C8" }}>
            <div style={{ width: 18, height: 18, borderRadius: 999, background: "#FF7A5C" }} />
            {dict.hero.eyebrow}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
