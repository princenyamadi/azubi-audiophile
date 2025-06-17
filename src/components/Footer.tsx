import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/headphones">Headphones</Link>
          <Link to="/speakers">Speakers</Link>
          <Link to="/earphones">Earphones</Link>
        </div>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener">
            <img src="/assets/shared/desktop/icon-facebook.svg" alt="Facebook" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener">
            <img src="/assets/shared/desktop/icon-twitter.svg" alt="Twitter" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener">
            <img src="/assets/shared/desktop/icon-instagram.svg" alt="Instagram" />
          </a>
        </div>
        <p>&copy; 2023 Audiophile. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 