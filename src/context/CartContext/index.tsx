"use client";

import { IProductProps } from "@/types/product";
import { Dispatch, SetStateAction, createContext, useEffect, useMemo, useState } from "react";

interface CartContextProps {
  cartItems: IProductProps[];
  setCartItems: Dispatch<SetStateAction<IProductProps[]>>;
  isCartOpen: boolean;
  setIsCartOpen: (value: boolean) => void;
  onOpenCart: () => void;
  onAddToCart: (item: IProductProps) => void;
  onRemoveFromCart: (id: string) => void;
  clearCart: () => void;
}

export const CartContext = createContext({} as CartContextProps);

type CartProviderProps = {
  children: React.ReactNode;
}

export default function CartProvider({ children }: CartProviderProps) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<IProductProps[]>(() => {
    if (typeof window !== 'undefined') {
      const storagedCart = localStorage.getItem('@FastStore:cart');

      if (storagedCart) {
        return JSON.parse(storagedCart);
      }

      return [];
    }

    return [];
  });

  function addToCart(item: IProductProps) {

    // Verify if items already exists in cart
    if (cartItems.find(cartItem => cartItem.id === item.id)) {
      const updatedList = cartItems.map(cartItem => {
        if (cartItem.id === item.id) {
          return {
            ...cartItem,
            quantity: cartItem?.quantity + 1
          }
        }

        return cartItem;
      });

      setCartItems(updatedList);
      localStorage.setItem('@FastStore:cart', JSON.stringify(updatedList));

      return;
    }

    const updatedList = [...cartItems, { ...item, quantity: 1 }];
    setCartItems(updatedList);
    localStorage.setItem('@FastStore:cart', JSON.stringify(updatedList));
  }

  function removeFromCart(id: string) {
    const updatedList = cartItems.filter(item => item.id !== Number(id));
    setCartItems(updatedList);
    localStorage.setItem('@FastStore:cart', JSON.stringify(updatedList));
  }

  const handleCartButtonClick = () => {
    setIsCartOpen(prevState => !prevState);
  }

  function clearCart() {
    setCartItems([]);
    localStorage.removeItem('@FastStore:cart');
  };

  useEffect(() => {
    localStorage.setItem('@FastStore:cart', JSON.stringify(cartItems))
  }, [cartItems]);

  return (
    <CartContext.Provider value={{
      cartItems,
      setCartItems,
      isCartOpen,
      setIsCartOpen,
      onOpenCart: handleCartButtonClick,
      onAddToCart: addToCart,
      onRemoveFromCart: removeFromCart,
      clearCart,
    }}>
      {children}
    </CartContext.Provider>
  );
}