"use client";

import { useEffect, useState } from "react";

import { CreateServerModal } from "@/components/modals/create-server-modal.tsx";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    console.log("ModalProvider mounted");
  }, []);

  if (!isMounted) {
    console.log("ModalProvider not mounted yet");
    return null;
  }

  return (
    <>
      <CreateServerModal />
    </>
  );
};
