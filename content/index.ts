/**
 * The registry. Every week is wired up here already — you never need to touch
 * this file. Editing content/reflections/week-NN.ts is enough: the home page,
 * archive, timeline, progress bar and prev/next navigation all read from here.
 */
import type { Block, Reflection, MetaReflection } from "./types";
import { site } from "./site";

import week01 from "./reflections/week-01";
import week02 from "./reflections/week-02";
import week03 from "./reflections/week-03";
import week04 from "./reflections/week-04";
import week05 from "./reflections/week-05";
import week06 from "./reflections/week-06";
import week07 from "./reflections/week-07";
import week08 from "./reflections/week-08";
import week09 from "./reflections/week-09";
import week10 from "./reflections/week-10";
import week11 from "./reflections/week-11";
import week12 from "./reflections/week-12";
import week13 from "./reflections/week-13";
import week14 from "./reflections/week-14";
import week15 from "./reflections/week-15";

import finalReflectionEntry from "./final-reflection";

export const reflections: Reflection[] = [
  week01, week02, week03, week04, week05,
  week06, week07, week08, week09, week10,
  week11, week12, week13, week14, week15,
].sort((a, b) => a.week - b.week);

export const finalReflection: MetaReflection = finalReflectionEntry;

export type { Block, Reflection, MetaReflection };

/* ── Derived data ────────────────────────────────────────────────────────── */

export const slugFor = (week: number) => `week-${week}`;

export const publishedReflections = reflections.filter(
  (r) => r.status === "published",
);

export const upcomingReflections = reflections.filter(
  (r) => r.status === "upcoming",
);

/** The most recent published week, or null before Week 1 goes live. */
export const latestReflection: Reflection | null =
  publishedReflections.length > 0
    ? publishedReflections[publishedReflections.length - 1]
    : null;

/** 0–100, rounded. Counts the final meta-reflection as the sixteenth entry. */
export const semesterProgress = (() => {
  const totalEntries = site.totalWeeks + 1;
  const done =
    publishedReflections.length +
    (finalReflection.status === "published" ? 1 : 0);
  return {
    published: publishedReflections.length,
    totalWeeks: site.totalWeeks,
    totalEntries,
    percent: Math.round((done / totalEntries) * 100),
    weekPercent: Math.round(
      (publishedReflections.length / site.totalWeeks) * 100,
    ),
  };
})();

export function getReflection(week: number): Reflection | undefined {
  return reflections.find((r) => r.week === week);
}

export function getReflectionBySlug(slug: string): Reflection | undefined {
  const match = /^week-(\d{1,2})$/.exec(slug);
  return match ? getReflection(Number(match[1])) : undefined;
}

/** Previous / next published-or-not neighbours, for in-page navigation. */
export function getNeighbours(week: number) {
  return {
    previous: getReflection(week - 1) ?? null,
    next: getReflection(week + 1) ?? null,
  };
}

/* ── Text helpers ────────────────────────────────────────────────────────── */

export function blockToText(block: Block): string {
  if (typeof block === "string") return block;
  if ("list" in block) return block.list.join(" ");
  return block.quote;
}

export function blocksToText(blocks: Block[]): string {
  return blocks.map(blockToText).join(" ");
}

export function hasContent(blocks: Block[]): boolean {
  return blocksToText(blocks).trim().length > 0;
}

/** Number of words across a set of sections. */
export function countWords(...sections: Block[][]): number {
  return sections
    .flat()
    .map(blockToText)
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
}

/**
 * Words in the three reflection sections. The course sets a 300–500 word
 * minimum per entry, so this is surfaced in the entry metadata.
 */
export function wordCount(reflection: Reflection): number {
  return countWords(
    reflection.keyLearningMoments,
    reflection.personalConnections,
    reflection.challengesAndGrowth,
  );
}

/** Words across the meta-reflection's six sections. */
export function metaWordCount(meta: MetaReflection): number {
  return countWords(...meta.sections.map((s) => s.blocks));
}

/** Rough reading time in minutes, minimum 1. */
export function readingTime(reflection: Reflection): number {
  return Math.max(1, Math.round(wordCount(reflection) / 200));
}

/** Everything the site needs to render one timeline dot. */
export interface TimelineEntry {
  week: number;
  label: string;
  title: string;
  dateRange: string;
  href: string;
  status: "published" | "upcoming";
  isPlaceholder: boolean;
}

export const timeline: TimelineEntry[] = [
  ...reflections.map((r) => ({
    week: r.week,
    label: `Week ${r.week}`,
    title: r.title || "Not written yet",
    dateRange: r.dateRange,
    href: `/reflections/${slugFor(r.week)}`,
    status: r.status,
    isPlaceholder: r.isPlaceholder,
  })),
  {
    week: site.totalWeeks + 1,
    label: "Final",
    title: finalReflection.title || "Semester meta-reflection",
    dateRange: finalReflection.dateRange,
    href: "/final-reflection",
    status: finalReflection.status,
    isPlaceholder: finalReflection.isPlaceholder,
  },
];
