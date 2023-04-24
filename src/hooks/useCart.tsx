"use client";

import { CartContext } from "@/context/CartContext";
import { useContext } from "react";

export function useCart() {
  const {
    cartItems,
    ísCartOpen,
    onAddToCart,
    onOpenCart,
    onRemoveFromCart,
    setIsCartOpen,
    clearCart
  } = useContext(CartContext);

  return {
    cartItems,
    ísCartOpen,
    setIsCartOpen,
    onOpenCart,
    onAddToCart,
    onRemoveFromCart,
    clearCart
  }
}