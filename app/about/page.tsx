import type { Metadata } from "next";
import Link from "next/link";
import { site, isUnfilled } from "@/content/site";
import { about } from "@/content/about";
import { hasContent, semesterProgress } from "@/content";
import PageHeader from "@/components/PageHeader";
import ReflectionBody from "@/components/ReflectionBody";
import PlaceholderNotice from "@/components/PlaceholderNotice";
import Reveal from "@/components/Reveal";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About",
  description: `About this ${site.course.code} reflection journal, why it takes this form, and how AI is used responsibly within it.`,
};

const sections = [
  { id: "intro", heading: "Who I am", blocks: about.intro },
  { id: "format", heading: "Why I chose this format", blocks: about.whyThisFormat },
  { id: "ai", heading: "How I use AI responsibly", blocks: about.responsibleAI },
];

export default function AboutPage() {
  return (
    <div className="container">
      <PageHeader
        eyebrow="About"
        title="About this journal"
        lede={`A semester-long reflection journal for ${site.course.code}. One entry a week, ${semesterProgress.totalEntries} in total, each ending with an explicit note about what the AI got wrong.`}
      />

      {about.isPlaceholder && (
        <Reveal>
          <div className={styles.notice}>
            <PlaceholderNotice>
              The three sections below are prompts, not a real account of the
              author&rsquo;s background or process. They will be replaced with
              their own writing.
            </PlaceholderNotice>
          </div>
        </Reveal>
      )}

      <div className={styles.layout}>
        <div className={styles.prose}>
          {sections.map((section, i) => (
            <Reveal
              as="section"
              key={section.id}
              id={section.id}
              delay={i * 60}
              className={styles.section}
            >
              <h2 className={styles.heading}>{section.heading}</h2>
              {hasContent(section.blocks) ? (
                <ReflectionBody blocks={section.blocks} />
              ) : (
                <p className={styles.pending}>Not written yet.</p>
              )}
            </Reveal>
          ))}

          <Reveal as="section" className={styles.section}>
            <h2 className={styles.heading}>How this site works</h2>
            <div className={styles.plain}>
              <p>
                Each week has its own entry with the same four parts: key
                learning moments, personal connections, challenges and growth,
                and a documented account of the AI tool used. Every entry closes
                with a <strong>Verification Nudge</strong> — one specific thing
                the AI got wrong or one thing that was changed after checking it
                against notes or course material.
              </p>
              <p>
                Anything still marked as a placeholder is scaffolding, clearly
                labelled as such, and is not presented as a real account of a
                week. The semester finishes with a{" "}
                <Link href="/final-reflection">meta-reflection</Link> looking
                back across all {site.totalWeeks} weeks.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal as="aside" delay={120} className={styles.sidebar}>
          <dl className={styles.card}>
            {[
              ["Author", site.studentName],
              ["Program", site.studentProgram],
              ["Course", `${site.course.code} — ${site.course.title}`],
              ["Instructor", site.course.instructor],
              ["Institution", site.course.institution],
              ["Term", site.course.term],
            ]
              .filter(([, value]) => value)
              .map(([label, value]) => (
                <div key={label}>
                  <dt className="eyebrow">{label}</dt>
                  <dd className={isUnfilled(value) ? styles.unfilled : undefined}>
                    {value}
                  </dd>
                </div>
              ))}
          </dl>

          <Link href="/reflections" className={styles.sideLink}>
            Read the weekly reflections
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h13M12.5 5.5 19 12l-6.5 6.5" />
            </svg>
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
