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

  // A click on the backdrop hits the <dialog> itself. A click on the content hits .content or its children.
  function handleClick(e) {
    if (e.target === dialogRef.current) {
      dialogRef.current.close();
    }
  }

  return (
    // onClose fires both when we call close() and when the user presses Esc
    <dialog ref={dialogRef} className={styles.modal} onClose={onClose} onClick={handleClick}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
      </div>
    </dialog>
  );
}
