import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

import { ogImageSize } from "@/lib/og-metadata";
import { site } from "@/lib/site-data";
export {
  ogImageAlt,
  ogImageContentType,
  ogImageSize,
} from "@/lib/og-metadata";

type OgImageOptions = {
  title: string;
  eyebrow?: string;
  description?: string;
  badge?: string;
};

async function readFont(fileName: string) {
  const buffer = await readFile(
    path.join(
      process.cwd(),
      "node_modules",
      "@fontsource",
      "vazirmatn",
      "files",
      fileName,
    ),
  );

  return buffer.buffer.slice(
    buffer.byteOffset,
    buffer.byteOffset + buffer.byteLength,
  );
}

const vazirmatnRegular = readFont("vazirmatn-arabic-500-normal.woff");
const vazirmatnBold = readFont("vazirmatn-arabic-800-normal.woff");
const vazirmatnBlack = readFont("vazirmatn-arabic-900-normal.woff");

export async function createOgImage({
  badge = "فروش پروژه‌محور",
  description = "نقشه پروژه‌ها، فیلتر مرحله ساخت و پیگیری فروش برای تأمین‌کنندگان محصولات و خدمات ساختمانی.",
  eyebrow = "پرشین‌سازه",
  title,
}: OgImageOptions) {
  const fonts = await Promise.all([
    vazirmatnRegular,
    vazirmatnBold,
    vazirmatnBlack,
  ]);

  return new ImageResponse(
    (
      <div
        dir="rtl"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fbf6ed",
          color: "#2a241d",
          padding: "58px 66px",
          fontFamily: "Vazirmatn",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(193,107,78,0.18), rgba(255,250,241,0) 52%), radial-gradient(circle at 16% 14%, rgba(47,111,103,0.16), transparent 30%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 74,
            bottom: 64,
            width: 300,
            height: 210,
            border: "1px solid rgba(122,74,34,0.24)",
            borderRadius: 34,
            background: "rgba(255,250,241,0.7)",
            display: "flex",
            flexDirection: "column",
            padding: 20,
            gap: 12,
          }}
        >
          {[68, 44, 92, 56].map((width, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <div
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: 999,
                  background: index === 1 ? "#C16B4E" : "#2f6f67",
                }}
              />
              <div
                style={{
                  height: 12,
                  width: `${width}%`,
                  borderRadius: 999,
                  background: "rgba(42,36,29,0.16)",
                }}
              />
            </div>
          ))}
          <div
            style={{
              marginTop: "auto",
              height: 72,
              borderRadius: 24,
              background:
                "linear-gradient(120deg, rgba(47,111,103,0.2), rgba(193,107,78,0.22))",
              border: "1px solid rgba(122,74,34,0.18)",
            }}
          />
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                width: 68,
                height: 68,
                borderRadius: 22,
                background: "#2a241d",
                color: "#fffaf1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 26,
                fontWeight: 900,
              }}
            >
              PS
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <div style={{ fontSize: 34, fontWeight: 900 }}>{site.name}</div>
              <div style={{ fontSize: 20, color: "#6f6254" }}>
                زیرساخت فروش پروژه‌محور
              </div>
            </div>
          </div>
          <div
            style={{
              border: "1px solid #d2bca2",
              borderRadius: 999,
              padding: "12px 20px",
              color: "#5f5348",
              fontSize: 19,
              background: "#fffaf1",
              fontWeight: 700,
            }}
          >
            {badge}
          </div>
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 24,
            maxWidth: 820,
          }}
        >
          <div
            style={{
              color: "#A8573D",
              fontSize: 25,
              fontWeight: 800,
            }}
          >
            {eyebrow}
          </div>
          <h1
            style={{
              margin: 0,
              fontSize: title.length > 58 ? 50 : 60,
              lineHeight: 1.28,
              letterSpacing: 0,
              fontWeight: 900,
            }}
          >
            {title}
          </h1>
          <p
            style={{
              margin: 0,
              maxWidth: 780,
              fontSize: 25,
              lineHeight: 1.75,
              color: "#4b4036",
              fontWeight: 500,
            }}
          >
            {description}
          </p>
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            gap: 14,
            color: "#2a241d",
            fontSize: 20,
            fontWeight: 800,
          }}
        >
          {["نقشه پروژه‌ها", "مرحله ساخت", "پیگیری فروش"].map((item) => (
            <div
              key={item}
              style={{
                border: "1px solid #e4d8c8",
                borderRadius: 18,
                background: "#fffaf1",
                padding: "14px 18px",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...ogImageSize,
      fonts: [
        {
          data: fonts[0],
          name: "Vazirmatn",
          style: "normal",
          weight: 500,
        },
        {
          data: fonts[1],
          name: "Vazirmatn",
          style: "normal",
          weight: 800,
        },
        {
          data: fonts[2],
          name: "Vazirmatn",
          style: "normal",
          weight: 900,
        },
      ],
    },
  );
}
