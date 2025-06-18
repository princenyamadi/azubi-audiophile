import { useNavigate } from 'react-router-dom';
import { CheckIcon } from '@heroicons/react/24/outline';
import Button from '../common/Button';
import { useOrder } from '../../contexts/OrderContext';

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const { orderSummary, isConfirmationOpen, closeConfirmation } = useOrder();

  if (!isConfirmationOpen || !orderSummary) {
    return null;
  }

  const handleBackToHome = () => {
    closeConfirmation();
    navigate('/');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={closeConfirmation} />
      <div className="relative bg-white rounded-lg p-8 max-w-[540px] w-full max-h-[90vh] overflow-y-auto">
        {/* Success Icon */}
        <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mb-8">
          <CheckIcon className="w-8 h-8 text-white" />
        </div>

        {/* Title */}
        <h2 className="heading-3 mb-6">
          THANK YOU<br />FOR YOUR ORDER
        </h2>

        <p className="body text-black/50 mb-8">
          You will receive an email confirmation shortly.
        </p>

        {/* Order Summary */}
        <div className="bg-gray rounded-lg overflow-hidden mb-8">
          {/* Items Summary */}
          <div className="p-6">
            {/* First Item */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <img
                  src={orderSummary.items[0].image}
                  alt={orderSummary.items[0].name}
                  className="w-16 h-16 rounded-lg object-cover mr-4"
                />
                <div>
                  <h6 className="font-bold">{orderSummary.items[0].name}</h6>
                  <p className="text-black/50">$ {orderSummary.items[0].price.toLocaleString()}</p>
                </div>
              </div>
              <span className="text-black/50">x{orderSummary.items[0].quantity}</span>
            </div>

            {/* Other Items Count */}
            {orderSummary.items.length > 1 && (
              <div className="text-center border-t border-black/10 pt-4">
                <button
                  className="text-black/50 hover:text-black/75 transition-colors"
                  onClick={() => {/* Toggle full item list */}}
                >
                  and {orderSummary.items.length - 1} other item(s)
                </button>
              </div>
            )}
          </div>

          {/* Grand Total */}
          <div className="bg-black text-white p-6">
            <p className="text-white/50 mb-2">GRAND TOTAL</p>
            <p className="heading-6">$ {orderSummary.total.toLocaleString()}</p>
          </div>
        </div>

        <Button onClick={handleBackToHome} className="w-full">
          BACK TO HOME
        </Button>
      </div>
    </div>
  );
};

export default OrderConfirmation; 