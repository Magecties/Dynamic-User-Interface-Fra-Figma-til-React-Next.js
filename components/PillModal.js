"use client";

import { useState } from "react";
import Modal from "./Modal";
import Pill from "./Pill";

// The pill opens the modal. isOpen lives here, so both components are controlled from one place.
export default function PillModal({ label, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Pill onClick={() => setIsOpen(true)}>{label}</Pill>
      {/* onClose resets the state, so the pill can open the modal again after Esc */}
      <Modal title={title} text={text} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
