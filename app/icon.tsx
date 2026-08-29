import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/**
 * Browser-tab icon: the same AI285 mark used in the site header, stacked onto
 * two lines so it stays legible at 16px. Ink background with cream type, so it
 * reads against both light and dark browser chrome.
 */
export default function Icon() {
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
          borderRadius: 14,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: -0.5,
        }}
      >
        <div style={{ display: "flex", fontSize: 25, lineHeight: 1 }}>AI</div>
        <div style={{ display: "flex", fontSize: 21, lineHeight: 1.15 }}>285</div>
      </div>
    ),
    size,
  );
}
