import type { Metadata } from "next";
import { site } from "@/content/site";
import { semesterProgress } from "@/content";
import PageHeader from "@/components/PageHeader";
import Timeline from "@/components/Timeline";
import SemesterProgress from "@/components/SemesterProgress";
import Reveal from "@/components/Reveal";
import styles from "./journey.module.css";

export const metadata: Metadata = {
  title: "Semester Journey",
  description: `A visual timeline of all ${site.totalWeeks} weeks plus the final meta-reflection.`,
};

export default function JourneyPage() {
  const remaining = semesterProgress.totalWeeks - semesterProgress.published;

  return (
    <div className="container">
      <PageHeader
        eyebrow={`${site.course.term} · ${semesterProgress.percent}% complete`}
        title="Semester Journey"
        lede="The whole arc of the semester in one view. Each entry fills in as its week is written, so this page is the clearest picture of where the journal actually stands."
      />

      <Reveal>
        <SemesterProgress />
      </Reveal>

      <Reveal className={styles.statsRow} delay={80}>
        {[
          { value: semesterProgress.published, label: "Weeks published" },
          { value: remaining, label: "Weeks remaining" },
          { value: semesterProgress.totalEntries, label: "Entries in total" },
          {
            value: `${semesterProgress.percent}%`,
            label: "Semester complete",
          },
        ].map((stat) => (
          <div key={stat.label} className={styles.stat}>
            <span className={styles.statValue}>{stat.value}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </Reveal>

      <section className={styles.timelineSection} aria-labelledby="timeline-heading">
        <Reveal>
          <h2 id="timeline-heading" className={styles.timelineHeading}>
            Week by week
          </h2>
        </Reveal>
        <Timeline variant="detailed" />
      </section>
    </div>
  );
}
