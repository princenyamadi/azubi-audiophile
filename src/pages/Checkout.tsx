import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Button from '../components/common/Button';
import { useCartContext } from '../contexts/CartContext';
import { useOrder } from '../contexts/OrderContext';
import OrderConfirmation from '../components/order/OrderConfirmation';

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
  paymentMethod: 'e-money' | 'cash';
  eMoneyNumber?: string;
  eMoneyPin?: string;
}

const Checkout = () => {
  const navigate = useNavigate();
  const { items, getTotalPrice, clearCart } = useCartContext();
  const { createOrder } = useOrder();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      paymentMethod: 'e-money',
    },
  });

  const paymentMethod = watch('paymentMethod');
  const subtotal = getTotalPrice();
  const shipping = 50;
  const vat = Math.round(subtotal * 0.2);
  const total = subtotal + shipping + vat;

  const onSubmit = (_data: FormData) => {
    createOrder(items);
    clearCart();
  };

  if (items.length === 0) {
    return (
      <main className="pt-[90px] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="heading-2 mb-4">Your cart is empty</h1>
          <Button href="/">Continue Shopping</Button>
        </div>
      </main>
    );
  }

  return (
    <>
      <main className="pt-[90px] bg-[#FAFAFA]">
        <div className="container py-16">
          <Button
            variant="link"
            onClick={() => navigate(-1)}
            className="mb-8 inline-block"
          >
            Go Back
          </Button>

          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg p-8">
                <h1 className="heading-3 mb-8">CHECKOUT</h1>

                {/* Billing Details */}
                <h2 className="subtitle text-primary mb-4">BILLING DETAILS</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      type="text"
                      id="name"
                      className={`form-input ${errors.name ? 'border-red-500' : ''}`}
                      {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      className={`form-input ${errors.phone ? 'border-red-500' : ''}`}
                      {...register('phone', {
                        required: 'Phone number is required',
                        pattern: {
                          value: /^\+?[\d\s-]+$/,
                          message: 'Invalid phone number',
                        },
                      })}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                {/* Shipping Info */}
                <h2 className="subtitle text-primary mb-4">SHIPPING INFO</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="md:col-span-2">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input
                      type="text"
                      id="address"
                      className={`form-input ${errors.address ? 'border-red-500' : ''}`}
                      {...register('address', { required: 'Address is required' })}
                    />
                    {errors.address && (
                      <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="zipCode" className="form-label">ZIP Code</label>
                    <input
                      type="text"
                      id="zipCode"
                      className={`form-input ${errors.zipCode ? 'border-red-500' : ''}`}
                      {...register('zipCode', { required: 'ZIP code is required' })}
                    />
                    {errors.zipCode && (
                      <p className="text-red-500 text-sm mt-1">{errors.zipCode.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="city" className="form-label">City</label>
                    <input
                      type="text"
                      id="city"
                      className={`form-input ${errors.city ? 'border-red-500' : ''}`}
                      {...register('city', { required: 'City is required' })}
                    />
                    {errors.city && (
                      <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="country" className="form-label">Country</label>
                    <input
                      type="text"
                      id="country"
                      className={`form-input ${errors.country ? 'border-red-500' : ''}`}
                      {...register('country', { required: 'Country is required' })}
                    />
                    {errors.country && (
                      <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>
                    )}
                  </div>
                </div>

                {/* Payment Details */}
                <h2 className="subtitle text-primary mb-4">PAYMENT DETAILS</h2>
                <div className="space-y-6">
                  <div>
                    <p className="form-label mb-4">Payment Method</p>
                    <div className="space-y-4">
                      <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:border-primary transition-colors">
                        <input
                          type="radio"
                          value="e-money"
                          className="mr-4"
                          {...register('paymentMethod')}
                        />
                        <span>e-Money</span>
                      </label>
                      <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:border-primary transition-colors">
                        <input
                          type="radio"
                          value="cash"
                          className="mr-4"
                          {...register('paymentMethod')}
                        />
                        <span>Cash on Delivery</span>
                      </label>
                    </div>
                  </div>

                  {paymentMethod === 'e-money' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="eMoneyNumber" className="form-label">e-Money Number</label>
                        <input
                          type="text"
                          id="eMoneyNumber"
                          className={`form-input ${errors.eMoneyNumber ? 'border-red-500' : ''}`}
                          {...register('eMoneyNumber', {
                            required: paymentMethod === 'e-money' ? 'e-Money number is required' : false,
                          })}
                        />
                        {errors.eMoneyNumber && (
                          <p className="text-red-500 text-sm mt-1">{errors.eMoneyNumber.message}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="eMoneyPin" className="form-label">e-Money PIN</label>
                        <input
                          type="text"
                          id="eMoneyPin"
                          className={`form-input ${errors.eMoneyPin ? 'border-red-500' : ''}`}
                          {...register('eMoneyPin', {
                            required: paymentMethod === 'e-money' ? 'e-Money PIN is required' : false,
                          })}
                        />
                        {errors.eMoneyPin && (
                          <p className="text-red-500 text-sm mt-1">{errors.eMoneyPin.message}</p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-8">
                <h2 className="heading-4 mb-8">SUMMARY</h2>
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 rounded-lg object-cover mr-4"
                        />
                        <div>
                          <h3 className="font-bold">{item.name}</h3>
                          <p className="text-black/50">$ {item.price.toLocaleString()}</p>
                        </div>
                      </div>
                      <span className="text-black/50">x{item.quantity}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 mt-8 pt-8 space-y-4">
                  <div className="flex justify-between">
                    <span className="text-black/50">TOTAL</span>
                    <span className="heading-6">$ {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-black/50">SHIPPING</span>
                    <span className="heading-6">$ {shipping}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-black/50">VAT (INCLUDED)</span>
                    <span className="heading-6">$ {vat}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-black/50">GRAND TOTAL</span>
                    <span className="heading-6 text-primary">$ {total.toLocaleString()}</span>
                  </div>
                </div>

                <Button type="submit" className="w-full mt-8">
                  CONTINUE & PAY
                </Button>
              </div>
            </div>
          </form>
        </div>
      </main>

      {/* Order Confirmation Modal */}
      <OrderConfirmation />
    </>
  );
};

export default Checkout; 