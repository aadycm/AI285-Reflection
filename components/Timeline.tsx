import Link from "next/link";
import { timeline, semesterProgress } from "@/content";
import { site } from "@/content/site";
import Reveal from "./Reveal";
import styles from "./Timeline.module.css";

/**
 * "strip"    — the compact Weeks 1–15 rail used on the home page.
 * "detailed" — the full vertical semester journey.
 */
export default function Timeline({
  variant = "strip",
}: {
  variant?: "strip" | "detailed";
}) {
  const fillRatio =
    semesterProgress.published / (site.totalWeeks + 1);

  if (variant === "strip") {
    return (
      <div className={styles.strip}>
        <div className={styles.stripRail} aria-hidden="true">
          <span
            className={styles.stripFill}
            style={{ "--p": fillRatio } as React.CSSProperties}
          />
        </div>

        <ol className={styles.stripList}>
          {timeline.map((entry) => {
            const published = entry.status === "published";
            const node = (
              <>
                <span className={styles.stripDot} aria-hidden="true" />
                <span className={styles.stripLabel}>
                  {entry.week > site.totalWeeks ? "F" : entry.week}
                </span>
                <span className={styles.tooltip} role="tooltip">
                  <strong>{entry.label}</strong>
                  <span>{published ? entry.title : "Upcoming"}</span>
                  <span className={styles.tooltipDate}>{entry.dateRange}</span>
                </span>
              </>
            );

            return (
              <li
                key={entry.week}
                className={styles.stripItem}
                data-published={published}
              >
                {published ? (
                  <Link
                    href={entry.href}
                    className={styles.stripLink}
                    aria-label={`${entry.label}: ${entry.title}`}
                  >
                    {node}
                  </Link>
                ) : (
                  <span
                    className={styles.stripLink}
                    aria-label={`${entry.label}: upcoming`}
                  >
                    {node}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    );
  }

  return (
    <ol className={styles.detailed}>
      {timeline.map((entry, i) => {
        const published = entry.status === "published";
        const isFinal = entry.week > site.totalWeeks;

        const inner = (
          <>
            <span className={styles.marker} aria-hidden="true">
              <span className={styles.markerDot} />
            </span>

            <span className={styles.rowIndex}>
              {isFinal ? "Final" : `Week ${String(entry.week).padStart(2, "0")}`}
            </span>

            <span className={styles.rowMain}>
              <span className={styles.rowTitle}>
                {published ? entry.title : isFinal ? "Semester meta-reflection" : "Not written yet"}
              </span>
              <span className={styles.rowDate}>{entry.dateRange}</span>
            </span>

            <span className={styles.rowStatus}>
              {published ? "Published" : "Upcoming"}
              {published && (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h13M12.5 5.5 19 12l-6.5 6.5" />
                </svg>
              )}
            </span>
          </>
        );

        return (
          <Reveal
            as="li"
            key={entry.week}
            delay={Math.min(i * 40, 320)}
            className={styles.row}
          >
            <span className={styles.rowInnerWrap} data-published={published} data-final={isFinal}>
              {published ? (
                <Link href={entry.href} className={styles.rowLink}>
                  {inner}
                </Link>
              ) : (
                <span className={styles.rowLink}>{inner}</span>
              )}
            </span>
          </Reveal>
        );
      })}
    </ol>
  );
}
