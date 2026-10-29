import styles from "./Pill.module.css";

// Figma: the component set "Pill" with the variants Type and State.
// The text in Figma becomes children, and the click becomes onClick.
export default function Pill({ children, onClick }) {
  return (
    <button type="button" className={styles.pill} onClick={onClick}>
      {children}
    </button>
  );
}
