"use client";

import { useEffect, useRef, useState } from "react";
import { semesterProgress } from "@/content";
import styles from "./SemesterProgress.module.css";

/**
 * The semester progress indicator: an arc that draws itself and a percentage
 * that counts up, both the first time it scrolls into view.
 */
export default function SemesterProgress({
  variant = "full",
}: {
  variant?: "full" | "compact";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);
  const [count, setCount] = useState(0);

  const target = semesterProgress.percent;

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setRun(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRun(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!run) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(target);
      return;
    }

    const duration = 1100;
    const start = performance.now();
    let frame = requestAnimationFrame(function step(now) {
      const t = Math.min(1, (now - start) / duration);
      // easeOutCubic
      setCount(Math.round(target * (1 - Math.pow(1 - t, 3))));
      if (t < 1) frame = requestAnimationFrame(step);
    });
    return () => cancelAnimationFrame(frame);
  }, [run, target]);

  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const dash = (circumference * target) / 100;

  return (
    <div ref={ref} className={styles.wrap} data-variant={variant}>
      <div className={styles.dial}>
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <circle className={styles.track} cx="60" cy="60" r={radius} />
          <circle
            className={styles.arc}
            cx="60"
            cy="60"
            r={radius}
            strokeDasharray={`${dash} ${circumference}`}
            style={{
              strokeDashoffset: run ? 0 : dash,
            }}
          />
        </svg>
        <div className={styles.readout}>
          <span className={styles.percent}>
            {count}
            <span className={styles.percentSign}>%</span>
          </span>
          <span className={styles.percentLabel}>complete</span>
        </div>
      </div>

      <div className={styles.stats}>
        <p className="eyebrow">Semester progress</p>
        <p className={styles.headline}>
          {semesterProgress.published} of {semesterProgress.totalWeeks} weekly
          reflections published
        </p>
        <p className={styles.sub}>
          Plus the final meta-reflection — {semesterProgress.totalEntries}{" "}
          entries in total across the semester.
        </p>

        <div className={styles.barTrack} aria-hidden="true">
          <div
            className={styles.barFill}
            style={{ width: run ? `${target}%` : "0%" }}
          />
        </div>
        <p className={styles.srOnly} role="status">
          {target}% of the semester journal is complete.
        </p>
      </div>
    </div>
  );
}
