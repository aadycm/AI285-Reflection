import Link from "next/link";
import { site, isUnfilled } from "@/content/site";
import {
  latestReflection,
  publishedReflections,
  reflections,
  semesterProgress,
  slugFor,
} from "@/content";
import Reveal from "@/components/Reveal";
import Timeline from "@/components/Timeline";
import SemesterProgress from "@/components/SemesterProgress";
import WeekCard from "@/components/WeekCard";
import PlaceholderNotice from "@/components/PlaceholderNotice";
import styles from "./page.module.css";

export default function HomePage() {
  const nameUnfilled = isUnfilled(site.studentName);
  const quickLinks = reflections.slice(0, 8);

  return (
    <div className="container">
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <Reveal>
          <p className="eyebrow">
            {site.course.code} · {site.course.term} · Weeks 1–{site.totalWeeks}
          </p>
        </Reveal>

        <Reveal delay={90}>
          <h1 className={styles.heroTitle}>
            A semester,
            <br />
            <em>one week at a time.</em>
          </h1>
        </Reveal>

        <Reveal delay={170}>
          <div className={styles.heroIntro}>
            <p>
              I am{" "}
              <strong className={nameUnfilled ? styles.unfilled : undefined}>
                {site.studentName}
              </strong>
              {!isUnfilled(site.studentProgram) && `, ${site.studentProgram}`}.
              This is my reflection journal for{" "}
              <strong className={isUnfilled(site.course.title) ? styles.unfilled : undefined}>
                {site.course.title}
              </strong>{" "}
              ({site.course.code}).
            </p>
            <p>
              Every week of the semester I write one entry here: what actually
              landed, how it connects to my own life and plans, what was hard —
              and an honest record of how I used an AI tool, including one thing
              it got wrong that I had to correct.
            </p>
          </div>
        </Reveal>

        <Reveal delay={240}>
          <div className={styles.heroActions}>
            <Link href="/reflections" className={styles.primaryButton}>
              Read the reflections
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h13M12.5 5.5 19 12l-6.5 6.5" />
              </svg>
            </Link>
            <Link href="/about" className={styles.secondaryButton}>
              About this journal
            </Link>
          </div>
        </Reveal>

        {nameUnfilled && (
          <Reveal delay={300}>
            <div className={styles.setupHint}>
              <PlaceholderNotice compact title="Setup in progress.">
                The name, course details and Week 1 writing are still
                placeholders. Everything marked this way is scaffolding, not a
                real account of the semester.
              </PlaceholderNotice>
            </div>
          </Reveal>
        )}
      </section>

      {/* ── Timeline strip ────────────────────────────────────────────── */}
      <Reveal className={styles.stripSection}>
        <div className={styles.sectionBar}>
          <p className="eyebrow">The semester at a glance</p>
          <Link href="/journey" className={styles.moreLink}>
            Full journey
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h13M12.5 5.5 19 12l-6.5 6.5" />
            </svg>
          </Link>
        </div>
        <Timeline variant="strip" />
      </Reveal>

      {/* ── Progress ──────────────────────────────────────────────────── */}
      <Reveal className={styles.section}>
        <SemesterProgress />
      </Reveal>

      {/* ── Latest reflection ─────────────────────────────────────────── */}
      <section className={styles.section} aria-labelledby="latest-heading">
        <Reveal>
          <div className={styles.sectionBar}>
            <h2 id="latest-heading" className={styles.sectionTitle}>
              Latest reflection
            </h2>
            <Link href="/reflections" className={styles.moreLink}>
              All {site.totalWeeks} weeks
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h13M12.5 5.5 19 12l-6.5 6.5" />
              </svg>
            </Link>
          </div>
        </Reveal>

        <Reveal delay={80}>
          {latestReflection ? (
            <WeekCard reflection={latestReflection} featured />
          ) : (
            <p className={styles.emptyState}>
              No reflections have been published yet. Week 1 will appear here as
              soon as it goes live.
            </p>
          )}
        </Reveal>
      </section>

      {/* ── Quick links ───────────────────────────────────────────────── */}
      <section className={styles.section} aria-labelledby="quick-heading">
        <Reveal>
          <div className={styles.sectionBar}>
            <h2 id="quick-heading" className={styles.sectionTitle}>
              Jump to a week
            </h2>
            <span className={styles.sectionMeta}>
              {publishedReflections.length} published
            </span>
          </div>
        </Reveal>

        <Reveal delay={70}>
          <ul className={styles.quickGrid}>
            {quickLinks.map((reflection) => {
              const published = reflection.status === "published";
              const label = `Week ${reflection.week}`;
              const inner = (
                <>
                  <span className={styles.quickWeek}>{label}</span>
                  <span className={styles.quickTitle}>
                    {reflection.title || (published ? "Untitled" : "Upcoming")}
                  </span>
                </>
              );
              return (
                <li key={reflection.week}>
                  {published ? (
                    <Link
                      href={`/reflections/${slugFor(reflection.week)}`}
                      className={styles.quickLink}
                      data-published="true"
                    >
                      {inner}
                    </Link>
                  ) : (
                    <span className={styles.quickLink} data-published="false">
                      {inner}
                    </span>
                  )}
                </li>
              );
            })}
            <li>
              <Link
                href="/final-reflection"
                className={styles.quickLink}
                data-published="true"
                data-final="true"
              >
                <span className={styles.quickWeek}>Final</span>
                <span className={styles.quickTitle}>Meta-reflection</span>
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* ── Course card ───────────────────────────────────────────────── */}
      <Reveal className={styles.section}>
        <dl className={styles.courseCard}>
          {[
            ["Course", `${site.course.code} — ${site.course.title}`],
            ["Instructor", site.course.instructor],
            ["Institution", site.course.institution],
            ["Term", site.course.term],
            ["Entries", `${semesterProgress.totalEntries} across the semester`],
          ].map(([label, value]) => (
            <div key={label} className={styles.courseRow}>
              <dt className="eyebrow">{label}</dt>
              <dd className={isUnfilled(String(value)) ? styles.unfilled : undefined}>
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </div>
  );
}
