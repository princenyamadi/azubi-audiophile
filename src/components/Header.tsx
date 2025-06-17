import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <div className="logo">
        <Link to="/">Audiophile</Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/headphones">Headphones</Link></li>
          <li><Link to="/speakers">Speakers</Link></li>
          <li><Link to="/earphones">Earphones</Link></li>
        </ul>
      </nav>
      <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? 'Close' : 'Menu'}
      </button>
    </header>
  );
};

export default Header; 