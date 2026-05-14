import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          borderRadius: "40px",
        }}
      >
        <svg
          width="120"
          height="80"
          viewBox="0 0 36 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 2h6v16h16v6H2V2z" fill="#22c55e" />
          <path d="M12 2h16v6h6v16h-6V8H12V2z" fill="#16a34a" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
