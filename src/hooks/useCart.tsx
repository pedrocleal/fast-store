"use client";

import { CartContext } from "@/context/CartContext";
import { formatCurrency } from "@/utils/formatCurrency";
import { useContext } from "react";

export function useCart() {
  const {
    cartItems,
    isCartOpen,
    onAddToCart,
    onOpenCart,
    onRemoveFromCart,
    setIsCartOpen,
    clearCart,
    setCartItems,
  } = useContext(CartContext);

  const itemsPrice = cartItems
    .map((item) => item.price * item.quantity)
    .reduce((prev, next) => prev + next, 0);

  function removeItemFromCart(id: number) {
    const updatedList = cartItems.filter((item) => item.id !== id);

    setCartItems(updatedList);
    return 0;
  }

  function onIncreaseItem(id: number) {
    const updatedList = cartItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1
        }
      }

      return item
    });

    setCartItems(updatedList);
  }

  function onDecreaseItem(id: number) {
    const item = cartItems.find(item => item.id === id);

    if (item?.quantity === 1) {
      removeItemFromCart(id);
      return;
    }

    const updatedList = cartItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }

      return item
    });

    setCartItems(updatedList);
  }

  return {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    onOpenCart,
    onAddToCart,
    onRemoveFromCart,
    clearCart,
    onIncreaseItem,
    onDecreaseItem,
    itemsPrice: formatCurrency(itemsPrice)
  }
}