import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/**
 * Home-screen icon for iOS. Full-bleed background because iOS applies its own
 * rounded mask.
 */
export default function AppleIcon() {
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
          background: "#17150f",
          color: "#f7f3ec",
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: -1,
        }}
      >
        <div style={{ display: "flex", fontSize: 68, lineHeight: 1 }}>AI</div>
        <div style={{ display: "flex", fontSize: 58, lineHeight: 1.15 }}>285</div>
      </div>
    ),
    size,
  );
}
