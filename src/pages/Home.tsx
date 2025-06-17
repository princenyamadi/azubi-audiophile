import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to Audiophile</h1>
        <p>Discover the best audio products for your lifestyle.</p>
      </section>
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {/* Placeholder for featured products */}
          <div className="product">Product 1</div>
          <div className="product">Product 2</div>
          <div className="product">Product 3</div>
        </div>
      </section>
      <section className="banner">
        <h2>Special Offer</h2>
        <p>Get 20% off on all products this month!</p>
      </section>
    </div>
  );
};

export default Home; 