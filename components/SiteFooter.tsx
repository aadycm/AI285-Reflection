import Link from "next/link";
import { site, isUnfilled } from "@/content/site";
import { semesterProgress } from "@/content";
import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  const name = isUnfilled(site.studentName) ? "This journal" : site.studentName;

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.about}>
          <p className={styles.wordmark}>{site.journalTitle}</p>
          <p className={styles.blurb}>{site.tagline}</p>
        </div>

        <nav className={styles.links} aria-label="Footer">
          <div>
            <p className="eyebrow">Journal</p>
            <Link href="/reflections">All reflections</Link>
            <Link href="/journey">Semester journey</Link>
            <Link href="/final-reflection">Final meta-reflection</Link>
          </div>
          <div>
            <p className="eyebrow">Context</p>
            <Link href="/about">About this journal</Link>
            <Link href="/about#ai">Responsible AI use</Link>
            <Link href="/reflections/week-1">Start at Week 1</Link>
          </div>
        </nav>
      </div>

      <div className={`container ${styles.base}`}>
        <p>
          © {year} {name} · {site.course.code} · {site.course.term}
        </p>
        <p className={styles.stat}>
          {semesterProgress.published} of {semesterProgress.totalWeeks} weeks
          published
        </p>
      </div>
    </footer>
  );
}
