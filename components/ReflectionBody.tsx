import type { Block } from "@/content/types";
import styles from "./ReflectionBody.module.css";

/**
 * Renders the three block types a reflection section can contain:
 * a paragraph (plain string), a bulleted list, or a pull quote.
 */
export default function ReflectionBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className={styles.body}>
      {blocks.map((block, i) => {
        if (typeof block === "string") {
          return <p key={i}>{block}</p>;
        }
        if ("list" in block) {
          return (
            <ul key={i} className={styles.list}>
              {block.list.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          );
        }
        return (
          <figure key={i} className={styles.quote}>
            <blockquote>{block.quote}</blockquote>
            {block.attribution && <figcaption>{block.attribution}</figcaption>}
          </figure>
        );
      })}
    </div>
  );
}
