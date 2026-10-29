"use client";

import { useState } from "react";
import Modal from "./Modal";
import Pill from "./Pill";

// The pill opens the modal. isOpen lives here, so both components are controlled from one place.
export default function PillModal({ label, type, title, text, showSeparator }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Pill type={type} onClick={() => setIsOpen(true)}>
        {label}
      </Pill>
      {/* onClose resets the state, so the pill can open the modal again after Esc */}
      <Modal
        title={title}
        text={text}
        showSeparator={showSeparator}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
