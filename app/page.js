import Modal from "@/components/Modal";
import Pill from "@/components/Pill";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <h1>Components</h1>
      <div className={styles.pills}>
        <Pill>Primary</Pill>
      </div>
      {/* Step 1.1: isOpen shows the modal. From step 1.2, PillModal opens it. */}
      <Modal
        isOpen
        title="Hick's Law"
        text="Jo flere valgmuligheder, jo længere tid tager det at vælge."
      />
    </main>
  );
}
