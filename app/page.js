import PillModal from "@/components/PillModal";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <h1>Components</h1>
      <div className={styles.pills}>
        <PillModal
          label="Primary"
          title="Hick's Law"
          text="Jo flere valgmuligheder, jo længere tid tager det at vælge."
        />
      </div>
    </main>
  );
}
