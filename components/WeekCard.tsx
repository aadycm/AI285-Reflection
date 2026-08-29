import Link from "next/link";
import type { Reflection } from "@/content/types";
import { readingTime, slugFor } from "@/content";
import styles from "./WeekCard.module.css";

export default function WeekCard({
  reflection,
  featured = false,
}: {
  reflection: Reflection;
  featured?: boolean;
}) {
  const published = reflection.status === "published";
  const href = `/reflections/${slugFor(reflection.week)}`;
  const title = reflection.title || (published ? "Untitled" : "Not written yet");

  const body = (
    <>
      <div className={styles.top}>
        <span className={styles.week}>
          Week {String(reflection.week).padStart(2, "0")}
        </span>
        <span className={styles.status} data-published={published}>
          <span className={styles.statusDot} aria-hidden="true" />
          {published ? "Published" : "Upcoming"}
        </span>
      </div>

      <h3 className={styles.title}>{title}</h3>

      {reflection.excerpt ? (
        <p className={styles.excerpt}>{reflection.excerpt}</p>
      ) : (
        <p className={styles.excerpt} data-muted="true">
          {published
            ? "No excerpt written for this week yet."
            : "This week has not happened yet."}
        </p>
      )}

      <div className={styles.meta}>
        <span>{reflection.dateRange}</span>
        {published && (
          <>
            <span className={styles.sep} aria-hidden="true">
              ·
            </span>
            <span>{readingTime(reflection)} min read</span>
          </>
        )}
        {reflection.isPlaceholder && published && (
          <>
            <span className={styles.sep} aria-hidden="true">
              ·
            </span>
            <span className={styles.placeholderFlag}>Placeholder</span>
          </>
        )}
      </div>

      {published && (
        <span className={styles.cta}>
          Read reflection
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h13M12.5 5.5 19 12l-6.5 6.5" />
          </svg>
        </span>
      )}
    </>
  );

  if (!published) {
    return (
      <article className={styles.card} data-published="false" data-featured={featured}>
        {body}
      </article>
    );
  }

  return (
    <Link href={href} className={styles.card} data-published="true" data-featured={featured}>
      <article>{body}</article>
    </Link>
  );
}
