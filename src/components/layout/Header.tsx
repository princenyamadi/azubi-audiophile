import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Cart from '../cart/Cart';
import { useCartContext } from '../../contexts/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openCart, getTotalItems } = useCartContext();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white">
        <div className="container">
          <div className="flex items-center justify-between h-[90px] border-b border-white/10">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>

            {/* Logo */}
            <Link to="/" className="heading-6">
              audiophile
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="subtitle hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/headphones" className="subtitle hover:text-primary transition-colors">
                Headphones
              </Link>
              <Link to="/speakers" className="subtitle hover:text-primary transition-colors">
                Speakers
              </Link>
              <Link to="/earphones" className="subtitle hover:text-primary transition-colors">
                Earphones
              </Link>
            </nav>

            {/* Cart */}
            <button
              className="relative"
              onClick={openCart}
              aria-label="Shopping cart"
            >
              <ShoppingCartIcon className="w-6 h-6 hover:text-primary transition-colors" />
              {/* Cart Badge */}
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-primary rounded-full text-white text-xs flex items-center justify-center font-bold">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-[90px] left-0 right-0 bg-white text-black">
              <nav className="container py-8">
                <div className="flex flex-col space-y-4">
                  <Link
                    to="/"
                    className="subtitle hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    to="/headphones"
                    className="subtitle hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Headphones
                  </Link>
                  <Link
                    to="/speakers"
                    className="subtitle hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Speakers
                  </Link>
                  <Link
                    to="/earphones"
                    className="subtitle hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Earphones
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Cart Modal */}
      <Cart />
    </>
  );
};

export default Header; 