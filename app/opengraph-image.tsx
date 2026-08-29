import { ImageResponse } from "next/og";
import { site } from "@/content/site";
import { semesterProgress } from "@/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.journalTitle} — ${site.course.code}`;

/** Social preview card, generated at build time. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fbf9f4",
          color: "#1c1a17",
          padding: "72px 80px",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: 4,
            color: "#8a3324",
            textTransform: "uppercase",
          }}
        >
          <span>{site.course.code}</span>
          <span>{site.course.term}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 92, lineHeight: 1.02, letterSpacing: -3 }}>
            {site.journalTitle}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 30,
              color: "#6e665a",
              maxWidth: 820,
              lineHeight: 1.4,
            }}
          >
            {`A semester-long reflection journal \u2014 Weeks 1\u2013${site.totalWeeks}, plus a final meta-reflection.`}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", width: "100%", height: 6, background: "#e6e0d3" }}>
            <div
              style={{
                width: `${semesterProgress.percent}%`,
                height: "100%",
                background: "#8a3324",
              }}
            />
          </div>
          <div style={{ display: "flex", fontSize: 22, color: "#9a9184", letterSpacing: 2 }}>
            {`${semesterProgress.published} of ${semesterProgress.totalWeeks} weeks published`}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
