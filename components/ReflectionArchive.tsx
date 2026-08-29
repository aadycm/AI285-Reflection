"use client";

import { useMemo, useState } from "react";
import type { Reflection } from "@/content/types";
import { blocksToText } from "@/content";
import WeekCard from "./WeekCard";
import styles from "./ReflectionArchive.module.css";

type Filter = "all" | "published" | "upcoming";

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All weeks" },
  { id: "published", label: "Published" },
  { id: "upcoming", label: "Upcoming" },
];

/** Searchable, filterable list of every week. */
export default function ReflectionArchive({
  reflections,
}: {
  reflections: Reflection[];
}) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");

  const searchIndex = useMemo(
    () =>
      reflections.map((r) => ({
        week: r.week,
        haystack: [
          `week ${r.week}`,
          r.title,
          r.excerpt,
          r.dateRange,
          r.tags?.join(" ") ?? "",
          r.ai.tool,
          blocksToText(r.keyLearningMoments),
          blocksToText(r.personalConnections),
          blocksToText(r.challengesAndGrowth),
        ]
          .join(" ")
          .toLowerCase(),
      })),
    [reflections],
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return reflections.filter((r) => {
      if (filter === "published" && r.status !== "published") return false;
      if (filter === "upcoming" && r.status !== "upcoming") return false;
      if (!q) return true;
      const entry = searchIndex.find((s) => s.week === r.week);
      return entry ? entry.haystack.includes(q) : false;
    });
  }, [reflections, query, filter, searchIndex]);

  return (
    <div className={styles.wrap}>
      <div className={styles.controls}>
        <div className={styles.searchBox}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="11" cy="11" r="6.4" />
            <path d="m15.8 15.8 4 4" strokeLinecap="round" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search reflections…"
            aria-label="Search reflections"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className={styles.clear}
            >
              Clear
            </button>
          )}
        </div>

        <div className={styles.filters} role="group" aria-label="Filter by status">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              className={styles.filter}
              data-active={filter === f.id}
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <p className={styles.count} role="status">
        {results.length} {results.length === 1 ? "entry" : "entries"}
        {query && ` matching “${query}”`}
      </p>

      {results.length === 0 ? (
        <p className={styles.empty}>
          Nothing matches that yet. Try a different word, or clear the filters.
        </p>
      ) : (
        <div className={styles.grid}>
          {results.map((reflection) => (
            <WeekCard key={reflection.week} reflection={reflection} />
          ))}
        </div>
      )}
    </div>
  );
}
