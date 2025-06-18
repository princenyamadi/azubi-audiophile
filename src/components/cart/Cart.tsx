import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../../contexts/CartContext';
import Button from '../common/Button';

const Cart: React.FC = () => {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    getTotalPrice,
  } = useCartContext();
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleCheckout = () => {
    closeCart();
    navigate('/checkout');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center">
      <div
        className="fixed inset-0 bg-black/40"
        onClick={closeCart}
      />
      <div className="relative mt-24 w-full max-w-md mx-4 bg-white rounded-lg p-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="heading-6">Cart ({items.length})</h2>
          {items.length > 0 && (
            <button
              onClick={clearCart}
              className="text-black/50 hover:text-primary transition-colors"
            >
              Remove all
            </button>
          )}
        </div>

        {items.length === 0 ? (
          <p className="text-center text-black/50 mb-8">Your cart is empty</p>
        ) : (
          <>
            <ul className="space-y-6 mb-8">
              {items.map((item) => (
                <li key={item.id} className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-grow">
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="text-black/50">$ {item.price.toLocaleString()}</p>
                  </div>
                  <div className="flex items-center bg-gray">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-4 py-3 text-black/50 hover:text-primary transition-colors"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="px-4 py-3 font-bold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-4 py-3 text-black/50 hover:text-primary transition-colors"
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex justify-between items-center mb-6">
              <span className="text-black/50">Total</span>
              <span className="heading-6">$ {getTotalPrice().toLocaleString()}</span>
            </div>

            <Button onClick={handleCheckout} className="w-full">
              Checkout
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart; 