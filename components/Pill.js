import styles from "./Pill.module.css";

// Figma: the component set "Pill" with the variants Type and State.
// The text in Figma becomes children, and the click becomes onClick.
// Type becomes the prop type, which picks a class. State=Hover is handled in CSS.
export default function Pill({ children, onClick, type = "primary" }) {
  return (
    <button type="button" className={`${styles.pill} ${styles[type]}`} onClick={onClick}>
      {children}
    </button>
  );
}
