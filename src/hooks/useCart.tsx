"use client";

import { useState } from "react";

export function useCart() {
  const [ísCartOpen, setIsCartOpen] = useState(false);

  const handleCartButtonClick = () => {
    console.log({ ísCartOpen });
    setIsCartOpen(prevState => !prevState);
  }

  return {
    isCartOpen: ísCartOpen,
    setIsCartOpen,
    onOpenCart: handleCartButtonClick,
  }
}