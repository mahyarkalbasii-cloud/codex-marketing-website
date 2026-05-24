import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "پرشین‌سازه | فروش پروژه‌محور برای بازار ساختمان";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
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
          padding: "64px 72px",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(201,121,43,0.18), rgba(255,250,241,0) 52%), radial-gradient(circle at 18% 18%, rgba(42,36,29,0.09), transparent 28%)",
          }}
        />
        <div style={{ position: "relative", display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 22,
                background: "#2a241d",
                color: "#fffaf1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 26,
                fontWeight: 800,
              }}
            >
              PS
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <div style={{ fontSize: 34, fontWeight: 800 }}>PersianSaze</div>
              <div style={{ fontSize: 20, color: "#6f6254" }}>
                Project-based sales intelligence
              </div>
            </div>
          </div>
          <div
            style={{
              border: "1px solid #d2bca2",
              borderRadius: 999,
              padding: "12px 20px",
              color: "#5f5348",
              fontSize: 18,
              background: "#fffaf1",
            }}
          >
            Map + Filters + Follow-up
          </div>
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 28,
            maxWidth: 900,
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: 70,
              lineHeight: 1.18,
              letterSpacing: 0,
              fontWeight: 900,
            }}
          >
            Find active construction projects sooner
          </h1>
          <p
            style={{
              margin: 0,
              maxWidth: 820,
              fontSize: 28,
              lineHeight: 1.7,
              color: "#4b4036",
            }}
          >
            Fresh project signals, construction stages, map-based discovery,
            and structured sales follow-up for construction suppliers.
          </p>
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            gap: 14,
            color: "#2a241d",
            fontSize: 20,
            fontWeight: 700,
          }}
        >
          {["Active projects", "Project map", "Sales follow-up"].map((item) => (
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
    size,
  );
}
