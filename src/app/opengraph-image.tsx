import { ImageResponse } from "next/og";

export const alt = "Franchir - Real-time franchise operations cockpit";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0a 0%, #171717 100%)",
          fontFamily: "Inter, sans-serif",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
          <svg
            width="80"
            height="56"
            viewBox="0 0 36 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 2h6v16h16v6H2V2z" fill="#22c55e" />
            <path d="M12 2h16v6h6v16h-6V8H12V2z" fill="#16a34a" />
          </svg>
          <span
            style={{
              fontSize: "64px",
              fontWeight: 700,
              color: "#fafafa",
              letterSpacing: "-0.02em",
            }}
          >
            Franchir
          </span>
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: "32px",
            color: "#a1a1aa",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.4,
          }}
        >
          Real-time franchise operations cockpit for multi-location restaurant owners
        </p>

        {/* Bottom accent */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#22c55e",
            }}
          />
          <span style={{ fontSize: "18px", color: "#71717a" }}>
            franchir.com
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
