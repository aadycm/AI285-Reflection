import type { AIDocumentation } from "@/content/types";
import styles from "./VerificationNudge.module.css";

/**
 * The Verification Nudge — the one element on every entry that states, plainly,
 * what the AI got wrong or what was changed. Deliberately given its own colour,
 * border and label so it can never be mistaken for ordinary body text.
 */
export default function VerificationNudge({
  verification,
  tool,
}: {
  verification: AIDocumentation["verification"];
  tool: string;
}) {
  const { aiOriginallySaid, iChangedItTo, howIChecked } = verification;
  const recorded = Boolean(aiOriginallySaid.trim() || iChangedItTo.trim());

  return (
    <aside
      className={styles.nudge}
      data-empty={!recorded}
      aria-labelledby="verification-heading"
    >
      <p className={styles.label}>
        <span className={styles.dot} aria-hidden="true" />
        <span id="verification-heading">Verification Nudge</span>
        {tool && <span className={styles.tool}>{tool}</span>}
      </p>

      {recorded ? (
        <>
          <p className={styles.statement}>
            <span className={styles.chipStruck}>The AI originally</span>
            {aiOriginallySaid}
          </p>

          <p className={styles.statement}>
            <span className={styles.chipKept}>I changed it to</span>
            {iChangedItTo}
          </p>

          {howIChecked.trim() && (
            <p className={styles.checked}>
              <span className="eyebrow">How I checked</span>
              {howIChecked}
            </p>
          )}
        </>
      ) : (
        <p className={styles.pending}>
          Not recorded yet. Every entry in this journal must name one thing the
          AI got wrong, or one thing that was changed after checking it.
        </p>
      )}
    </aside>
  );
}
