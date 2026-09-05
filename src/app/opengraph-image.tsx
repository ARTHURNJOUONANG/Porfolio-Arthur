import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0A0A0A",
          color: "#FFFFFF",
          padding: 80,
        }}
      >
        <div style={{ color: "#E4B429", fontSize: 22, letterSpacing: 4 }}>FULLSTACK JAVA · WEB · IA</div>
        <div style={{ fontSize: 72, marginTop: 24, fontWeight: 700 }}>Arthur Njouonang</div>
        <div style={{ fontSize: 28, marginTop: 24, color: "#A1A1AA", maxWidth: 800 }}>
          Applications, API et IA générative.
        </div>
      </div>
    ),
    size,
  );
}
