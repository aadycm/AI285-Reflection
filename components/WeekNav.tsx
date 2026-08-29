import Link from "next/link";
import type { Reflection } from "@/content/types";
import { slugFor } from "@/content";
import styles from "./WeekNav.module.css";

function Side({
  reflection,
  direction,
}: {
  reflection: Reflection | null;
  direction: "previous" | "next";
}) {
  const label = direction === "previous" ? "Previous week" : "Next week";

  if (!reflection) {
    return <span className={styles.side} data-empty="true" data-dir={direction} />;
  }

  const readable = reflection.status === "published";
  const title = reflection.title || (readable ? "Untitled" : "Not written yet");

  const inner = (
    <>
      <span className={styles.label}>
        {direction === "previous" && (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 12H6M11.5 5.5 5 12l6.5 6.5" />
          </svg>
        )}
        {label}
        {direction === "next" && (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h13M12.5 5.5 19 12l-6.5 6.5" />
          </svg>
        )}
      </span>
      <span className={styles.week}>Week {reflection.week}</span>
      <span className={styles.title}>{title}</span>
    </>
  );

  if (!readable) {
    return (
      <span className={styles.side} data-dir={direction} data-published="false">
        {inner}
      </span>
    );
  }

  return (
    <Link
      href={`/reflections/${slugFor(reflection.week)}`}
      className={styles.side}
      data-dir={direction}
      data-published="true"
    >
      {inner}
    </Link>
  );
}

export default function WeekNav({
  previous,
  next,
}: {
  previous: Reflection | null;
  next: Reflection | null;
}) {
  return (
    <nav className={styles.nav} aria-label="Weekly navigation">
      <Side reflection={previous} direction="previous" />
      <Side reflection={next} direction="next" />
    </nav>
  );
}
