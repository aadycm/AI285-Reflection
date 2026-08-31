import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getNeighbours,
  getReflectionBySlug,
  hasContent,
  reflections,
  readingTime,
  slugFor,
  wordCount,
} from "@/content";
import { site } from "@/content/site";
import ReflectionBody from "@/components/ReflectionBody";
import AIDocumentation from "@/components/AIDocumentation";
import PlaceholderNotice from "@/components/PlaceholderNotice";
import ReadingProgress from "@/components/ReadingProgress";
import WeekNav from "@/components/WeekNav";
import Reveal from "@/components/Reveal";
import styles from "./reflection.module.css";

type Params = { week: string };

/** Pre-renders every week at build time. */
export function generateStaticParams() {
  return reflections.map((r) => ({ week: slugFor(r.week) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { week } = await params;
  const reflection = getReflectionBySlug(week);
  if (!reflection) return { title: "Not found" };

  const title = reflection.title
    ? `Week ${reflection.week} — ${reflection.title}`
    : `Week ${reflection.week}`;

  const description =
    reflection.excerpt ||
    `Week ${reflection.week} of a semester-long reflection journal for ${site.course.code}.`;

  return {
    title,
    description,
    openGraph: { title, description, type: "article" },
    alternates: { canonical: `/reflections/${slugFor(reflection.week)}` },
  };
}

const SECTIONS = [
  {
    id: "key-learning-moments",
    heading: "Key Learning Moments",
    prompt:
      "What concepts, discussions, activities or experiences resonated with me this week?",
    key: "keyLearningMoments",
  },
  {
    id: "personal-connections",
    heading: "Personal Connections",
    prompt:
      "How does the week's content connect to my experiences, goals, interests or future plans?",
    key: "personalConnections",
  },
  {
    id: "challenges-and-growth",
    heading: "Challenges & Growth",
    prompt: "What difficulties did I encounter, and how did I work through them?",
    key: "challengesAndGrowth",
  },
] as const;

export default async function ReflectionPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { week } = await params;
  const reflection = getReflectionBySlug(week);
  if (!reflection) notFound();

  const { previous, next } = getNeighbours(reflection.week);
  const published = reflection.status === "published";

  return (
    <>
      <ReadingProgress />

      <article className={`container ${styles.article}`}>
        {/* ── Entry header ────────────────────────────────────────────── */}
        <header className={styles.head}>
          <Reveal>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/reflections">Reflections</Link>
              <span aria-hidden="true">/</span>
              <span>Week {reflection.week}</span>
            </nav>
          </Reveal>

          <Reveal delay={70}>
            <p className={styles.weekMark}>
              <span className={styles.weekNumber}>
                Week {String(reflection.week).padStart(2, "0")}
              </span>
              <span className={styles.divider} aria-hidden="true" />
              <span className={styles.dateRange}>{reflection.dateRange}</span>
            </p>
          </Reveal>

          <Reveal delay={130}>
            <h1 className={styles.title}>
              {reflection.title ||
                (published ? "Untitled reflection" : "Not written yet")}
            </h1>
          </Reveal>

          {reflection.excerpt && (
            <Reveal delay={190}>
              <p className={styles.lede}>{reflection.excerpt}</p>
            </Reveal>
          )}

          <Reveal delay={240}>
            <div className={styles.meta}>
              <span className={styles.status} data-published={published}>
                <span className={styles.statusDot} aria-hidden="true" />
                {published ? "Published" : "Upcoming"}
              </span>
              {published && (
                <>
                  <span>{wordCount(reflection)} words</span>
                  <span>{readingTime(reflection)} min read</span>
                </>
              )}
              {reflection.tags?.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          {reflection.isPlaceholder && (
            <Reveal delay={290}>
              <div className={styles.noticeSlot}>
                <PlaceholderNotice />
              </div>
            </Reveal>
          )}
        </header>

        {/* ── Body ────────────────────────────────────────────────────── */}
        {published ? (
          <div className={styles.sections}>
            {SECTIONS.map((section, i) => {
              const blocks = reflection[section.key];
              return (
                <Reveal
                  as="section"
                  key={section.id}
                  id={section.id}
                  delay={i * 40}
                  className={styles.section}
                >
                  <div className={styles.sectionHead}>
                    <h2 className={styles.sectionHeading}>{section.heading}</h2>
                    <p className={styles.sectionPrompt}>{section.prompt}</p>
                  </div>

                  {hasContent(blocks) ? (
                    <ReflectionBody blocks={blocks} />
                  ) : (
                    <p className={styles.pending}>
                      Nothing written for this section yet.
                    </p>
                  )}
                </Reveal>
              );
            })}

            <Reveal>
              <AIDocumentation ai={reflection.ai} />
            </Reveal>
          </div>
        ) : (
          <div className={styles.upcoming}>
            <p className={styles.upcomingTitle}>This week has not been written yet.</p>
            <p className={styles.upcomingBody}>
              Week {reflection.week} runs {reflection.dateRange}. It will appear
              here once the reflection is written and published.
            </p>
            <Link href="/reflections" className={styles.upcomingLink}>
              Back to all reflections
            </Link>
          </div>
        )}

        <WeekNav previous={previous} next={next} />

        {reflection.week === site.totalWeeks && (
          <Link href="/final-reflection" className={styles.finalLink}>
            <span className="eyebrow">And finally</span>
            <span className={styles.finalTitle}>
              The semester meta-reflection
            </span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h13M12.5 5.5 19 12l-6.5 6.5" />
            </svg>
          </Link>
        )}
      </article>
    </>
  );
}
