"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { semesterProgress } from "@/content";
import ThemeToggle from "./ThemeToggle";
import styles from "./SiteHeader.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/reflections", label: "Reflections" },
  { href: "/journey", label: "Journey" },
  { href: "/final-reflection", label: "Final" },
  { href: "/about", label: "About" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation.
  useEffect(() => setOpen(false), [pathname]);

  // Trap the page behind the mobile menu, and allow Escape to close it.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className={styles.header} data-scrolled={scrolled}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} aria-label="Home">
          <span className={styles.mark} aria-hidden="true">
            {site.course.code.replace(/\s+/g, "")}
          </span>
          <span className={styles.brandText}>
            <span className={styles.brandTitle}>{site.journalTitle}</span>
            <span className={styles.brandMeta}>{site.course.term}</span>
          </span>
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.link}
              data-active={isActive(link.href)}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.tail}>
          <span
            className={styles.progress}
            title={`${semesterProgress.published} of ${semesterProgress.totalWeeks} weekly reflections published`}
          >
            <span className={styles.progressTrack} aria-hidden="true">
              <span
                className={styles.progressFill}
                style={{ width: `${semesterProgress.weekPercent}%` }}
              />
            </span>
            <span className={styles.progressLabel}>
              {semesterProgress.published}/{semesterProgress.totalWeeks}
            </span>
          </span>

          <ThemeToggle />

          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={styles.bars} data-open={open} aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={styles.mobilePanel}
        data-open={open}
        hidden={!open}
      >
        <nav aria-label="Mobile">
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.mobileLink}
              data-active={isActive(link.href)}
              style={{ transitionDelay: `${60 + i * 45}ms` }}
            >
              <span className={styles.mobileIndex}>
                {String(i + 1).padStart(2, "0")}
              </span>
              {link.label}
            </Link>
          ))}
        </nav>
        <p className={styles.mobileMeta}>
          {semesterProgress.published} of {semesterProgress.totalWeeks} weeks
          published · {semesterProgress.percent}% of the semester
        </p>
      </div>
    </header>
  );
}
