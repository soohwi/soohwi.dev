/**
 * hooks
 * useModal.tsx
**/

import { useState } from "react";

export function useModal<T = unknown>() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<T | null>(null);

  const open = (data?: T)=> {
    setData(data || null);
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  return { isOpen, data, open, close, setData };
}