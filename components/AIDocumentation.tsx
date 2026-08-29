"use client";

import { useState } from "react";
import type { AIDocumentation as AIDoc } from "@/content/types";
import VerificationNudge from "./VerificationNudge";
import styles from "./AIDocumentation.module.css";

/**
 * The reusable AI documentation block that appears on every entry.
 * The three descriptive fields collapse; the Verification Nudge never does,
 * because the assignment requires it to be visible.
 */
export default function AIDocumentation({ ai }: { ai: AIDoc }) {
  const [open, setOpen] = useState(false);
  const tool = ai.tool.trim();

  const fields = [
    { label: "AI tool used", value: tool },
    { label: "Purpose", value: ai.purpose.trim() },
    { label: "How AI helped", value: ai.howItHelped.trim() },
  ];

  const documented = fields.some((f) => f.value.length > 0);

  return (
    <section className={styles.wrap} aria-labelledby="ai-doc-heading">
      <header className={styles.head}>
        <div>
          <p className="eyebrow">AI tool documentation</p>
          <h2 id="ai-doc-heading" className={styles.title}>
            {tool || "Not documented yet"}
          </h2>
        </div>

        <button
          type="button"
          className={styles.toggle}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="ai-doc-details"
        >
          {open ? "Hide details" : "Show details"}
          <svg viewBox="0 0 24 24" aria-hidden="true" data-open={open}>
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </header>

      <div id="ai-doc-details" className={styles.details} data-open={open}>
        <div className={styles.detailsInner} inert={!open}>
          {documented ? (
            <dl className={styles.fields}>
              {fields.map((field) => (
                <div key={field.label} className={styles.field}>
                  <dt className="eyebrow">{field.label}</dt>
                  <dd>{field.value || "—"}</dd>
                </div>
              ))}
            </dl>
          ) : (
            <p className={styles.empty}>
              The AI tool, purpose and contribution for this entry have not been
              recorded yet.
            </p>
          )}
        </div>
      </div>

      <VerificationNudge verification={ai.verification} tool={tool} />
    </section>
  );
}
