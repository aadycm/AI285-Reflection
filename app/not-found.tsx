import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={`container ${styles.wrap}`}>
      <p className="eyebrow">404</p>
      <h1 className={styles.title}>That page isn&rsquo;t in this journal.</h1>
      <p className={styles.body}>
        The link may be from a week that hasn&rsquo;t been written yet, or the
        address may be slightly off.
      </p>
      <div className={styles.links}>
        <Link href="/" className={styles.primary}>
          Back to the journal
        </Link>
        <Link href="/reflections" className={styles.secondary}>
          All reflections
        </Link>
      </div>
    </div>
  );
}
