import React from 'react';

const navLinks = [
  { name: 'HOME', href: '/' },
  { name: 'HEADPHONES', href: '/headphones' },
  { name: 'SPEAKERS', href: '/speakers' },
  { name: 'EARPHONES', href: '/earphones' },
];

export const Header: React.FC = () => (
  <header className="w-full bg-black text-white px-10 py-8 flex items-center justify-between">
    {/* Logo */}
    <a href="/" className="font-extrabold text-2xl tracking-widest mr-16">
      audiophile
    </a>
    {/* Nav */}
    <nav className="flex-1 flex justify-center">
      <ul className="flex gap-8">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="uppercase text-sm tracking-widest font-bold hover:border-b-2 hover:border-orange-500 transition-colors duration-150 px-2 py-1"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
    {/* Cart Icon */}
    <a href="/cart" className="ml-16 flex items-center">
      <img
        src="/assets/shared/desktop/icon-cart.svg"
        alt="Cart"
        className="w-6 h-6 hover:scale-110 transition-transform duration-150"
      />
    </a>
  </header>
);

export default Header; 