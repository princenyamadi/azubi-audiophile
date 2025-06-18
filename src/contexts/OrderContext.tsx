import { createContext, useContext, useState } from 'react';
import type { CartItem } from '../hooks/useCart';

interface OrderSummary {
  items: CartItem[];
  subtotal: number;
  shipping: number;
  vat: number;
  total: number;
}

interface OrderContextType {
  orderSummary: OrderSummary | null;
  isConfirmationOpen: boolean;
  createOrder: (items: CartItem[]) => void;
  closeConfirmation: () => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};

export const OrderProvider = ({ children }: { children: React.ReactNode }) => {
  const [orderSummary, setOrderSummary] = useState<OrderSummary | null>(null);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const createOrder = (items: CartItem[]) => {
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = 50;
    const vat = Math.round(subtotal * 0.2);
    const total = subtotal + shipping + vat;

    setOrderSummary({
      items,
      subtotal,
      shipping,
      vat,
      total,
    });
    setIsConfirmationOpen(true);
  };

  const closeConfirmation = () => {
    setIsConfirmationOpen(false);
    setOrderSummary(null);
  };

  return (
    <OrderContext.Provider
      value={{
        orderSummary,
        isConfirmationOpen,
        createOrder,
        closeConfirmation,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}; 