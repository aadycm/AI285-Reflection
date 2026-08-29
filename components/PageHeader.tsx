import type { ReactNode } from "react";
import Reveal from "./Reveal";
import styles from "./PageHeader.module.css";

export default function PageHeader({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  children?: ReactNode;
}) {
  return (
    <header className={styles.header}>
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
      </Reveal>
      <Reveal delay={80}>
        <h1 className={styles.title}>{title}</h1>
      </Reveal>
      {lede && (
        <Reveal delay={150}>
          <p className={styles.lede}>{lede}</p>
        </Reveal>
      )}
      {children && <Reveal delay={220}>{children}</Reveal>}
    </header>
  );
}
