import type { ReactNode } from "react";
import styles from "./PlaceholderNotice.module.css";

/**
 * Shown wherever something is still scaffolding. This exists so sample text is
 * never silently presented as the author's real experience.
 * It disappears the moment the matching `isPlaceholder` flag is set to false.
 */
export default function PlaceholderNotice({
  compact = false,
  title = "Placeholder.",
  children,
}: {
  compact?: boolean;
  title?: string;
  children?: ReactNode;
}) {
  return (
    <p className={styles.notice} data-compact={compact} role="note">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7.6v5.2M12 16.2v.2" strokeLinecap="round" />
      </svg>
      <span>
        <strong>{title}</strong>{" "}
        {children ?? (
          <>
            The writing below is scaffolding, not a real account of this week.
            It will be replaced with the author&rsquo;s own reflection.
          </>
        )}
      </span>
    </p>
  );
}
