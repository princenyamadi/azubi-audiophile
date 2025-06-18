import React, { createContext, useContext } from 'react';
import { useCart } from '../hooks/useCart';
import type { CartItem } from '../hooks/useCart';

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  addToCart: (product: {
    id: number;
    name: string;
    price: number;
    image: string;
    slug: string;
  }, quantity?: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const cart = useCart();

  return (
    <CartContext.Provider value={cart}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
}; 