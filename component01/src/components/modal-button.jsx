import { useState } from "react";
// import { Button } from "@/components/ui/button";
import Modal from "./modal";

export default function ModalButton({Header, Body}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center items-center m-4">
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      {isOpen && (
        <Modal setIsOpen={setIsOpen} Header={Header} Body={Body} />
      )}
    </div>
  );
}
