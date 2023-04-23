"use client";

import { IProductProps } from "@/types/product";
import { useEffect, useState } from "react";

export function useCart() {
  const [ísCartOpen, setIsCartOpen] = useState(false);

  const [cartItems, setCartItems] = useState<IProductProps[]>(() => {
    const storagedCart = localStorage.getItem('@FastStore:cart');

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  function addToCart(item: IProductProps) {
    const updatedList = [...cartItems, item];
    setCartItems(updatedList);
    localStorage.setItem('@FastStore:cart', JSON.stringify(updatedList));
  }

  function removeFromCart(id: string) {
    const updatedList = cartItems.filter(item => item.id !== Number(id));
    setCartItems(updatedList);
    localStorage.setItem('@FastStore:cart', JSON.stringify(updatedList));
  }

  const handleCartButtonClick = () => {
    console.log({ ísCartOpen });
    setIsCartOpen(prevState => !prevState);
  }

  console.log('hook render')

  return {
    cartItems,
    isCartOpen: ísCartOpen,
    setIsCartOpen,
    onOpenCart: handleCartButtonClick,
    onAddToCart: addToCart,
    onRemoveFromCart: removeFromCart,
  }
}