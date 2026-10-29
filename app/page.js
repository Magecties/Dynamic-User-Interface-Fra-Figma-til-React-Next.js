import PillModal from "@/components/PillModal";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <h1>Components</h1>
      <div className={styles.pills}>
        <PillModal
          label="Primary"
          type="primary"
          title="Hick's Law"
          text="Jo flere valgmuligheder, jo længere tid tager det at vælge."
          showSeparator={true}
        />
        <PillModal
          label="Secondary"
          type="secondary"
          title="Hick's Law"
          text="Jo flere valgmuligheder, jo længere tid tager det at vælge."
          showSeparator={false}
        />
      </div>
    </main>
  );
}
