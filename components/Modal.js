"use client";

import { useEffect, useRef } from "react";
import styles from "./Modal.module.css";

// Figma: the component "Modal".
// isOpen decides whether the <dialog> is shown. showModal() gives us the backdrop, focus trap and Esc for free.
export default function Modal({ title, text, isOpen, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  return (
    // onClose fires both when we call close() and when the user presses Esc
    <dialog ref={dialogRef} className={styles.modal} onClose={onClose}>
      <h2>{title}</h2>
      <p>{text}</p>
    </dialog>
  );
}
