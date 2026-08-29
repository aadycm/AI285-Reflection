import type { Metadata } from "next";
import Link from "next/link";
import { finalReflection, hasContent, semesterProgress } from "@/content";
import { site } from "@/content/site";
import ReflectionBody from "@/components/ReflectionBody";
import AIDocumentation from "@/components/AIDocumentation";
import PlaceholderNotice from "@/components/PlaceholderNotice";
import ReadingProgress from "@/components/ReadingProgress";
import Reveal from "@/components/Reveal";
import styles from "./final.module.css";

export const metadata: Metadata = {
  title: "Final Meta-Reflection",
  description: `Looking back across all ${site.totalWeeks} weeks of the semester: how thinking changed, how learning evolved, and how the use of AI shifted.`,
};

export default function FinalReflectionPage() {
  const published = finalReflection.status === "published";

  return (
    <>
      <ReadingProgress />

      <article className={`container ${styles.article}`}>
        <header className={styles.head}>
          <Reveal>
            <p className={styles.mark}>
              <span className={styles.markLabel}>Final entry</span>
              <span className={styles.divider} aria-hidden="true" />
              <span className={styles.dateRange}>{finalReflection.dateRange}</span>
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className={styles.title}>
              {finalReflection.title || "Semester Meta-Reflection"}
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <p className={styles.lede}>
              {finalReflection.excerpt ||
                `The closing entry of the journal — a look back across all ${site.totalWeeks} weeks rather than at any single one.`}
            </p>
          </Reveal>

          <Reveal delay={210}>
            <div className={styles.meta}>
              <span className={styles.status} data-published={published}>
                <span className={styles.statusDot} aria-hidden="true" />
                {published ? "Published" : "Written at the end of the semester"}
              </span>
              <span>
                {semesterProgress.published} of {semesterProgress.totalWeeks}{" "}
                weeks published
              </span>
            </div>
          </Reveal>

          {finalReflection.isPlaceholder && (
            <Reveal delay={260}>
              <div className={styles.noticeSlot}>
                {published ? (
                  <PlaceholderNotice />
                ) : (
                  <p className={styles.reserved} role="note">
                    <strong>Reserved.</strong> This page is the dedicated home
                    for the final meta-reflection. The six prompts below are
                    waiting to be written into — they are questions, not
                    answers, and no content has been invented for them.
                  </p>
                )}
              </div>
            </Reveal>
          )}
        </header>

        <div className={styles.sections}>
          {finalReflection.sections.map((section, i) => (
            <Reveal
              as="section"
              key={section.heading}
              delay={i * 40}
              className={styles.section}
            >
              <div className={styles.sectionHead}>
                <span className={styles.sectionIndex}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className={styles.sectionHeading}>{section.heading}</h2>
                  <p className={styles.sectionPrompt}>{section.prompt}</p>
                </div>
              </div>

              {hasContent(section.blocks) ? (
                <ReflectionBody blocks={section.blocks} />
              ) : (
                <p className={styles.pending}>Not written yet.</p>
              )}
            </Reveal>
          ))}

          <Reveal>
            <AIDocumentation ai={finalReflection.ai} />
          </Reveal>
        </div>

        <Reveal>
          <div className={styles.footerNav}>
            <Link href="/journey" className={styles.footerLink}>
              <span className="eyebrow">Look back</span>
              <span>The full semester journey</span>
            </Link>
            <Link href="/reflections" className={styles.footerLink}>
              <span className="eyebrow">Or reread</span>
              <span>All {site.totalWeeks} weekly reflections</span>
            </Link>
          </div>
        </Reveal>
      </article>
    </>
  );
}
