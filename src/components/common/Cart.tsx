import { XMarkIcon, TrashIcon } from '@heroicons/react/24/outline';
import Button from './Button';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
  onCheckout: () => void;
}

const Cart = ({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }: CartProps) => {
  if (!isOpen) return null;

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-end">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white w-full max-w-md h-full max-h-[600px] p-6 overflow-y-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="heading-6">Cart ({items.length})</h2>
          <button onClick={onClose}>
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        {items.length === 0 ? (
          <p className="body text-black/50">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-4 mb-8">
              {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="subtitle">{item.name}</h3>
                    <p className="body text-black/50">${item.price}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                      className="w-8 h-8 bg-gray flex items-center justify-center text-black hover:bg-gray-dark transition-colors"
                    >
                      -
                    </button>
                    <span className="w-8 text-center body">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 bg-gray flex items-center justify-center text-black hover:bg-gray-dark transition-colors"
                    >
                      +
                    </button>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="ml-2 text-black/50 hover:text-black transition-colors"
                    >
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between items-center mb-4">
                <span className="body">Total</span>
                <span className="heading-6">${total}</span>
              </div>
              <Button className="w-full">Checkout</Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart; 