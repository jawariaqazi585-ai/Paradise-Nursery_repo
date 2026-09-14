import React, { useState } from 'react';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';
import './App.css';

function App() {
  // 'landing' | 'products' | 'cart'
  const [view, setView] = useState('landing');

  const goToLanding = () => setView('landing');
  const goToProducts = () => setView('products');
  const goToCart = () => setView('cart');

  if (view === 'products') {
    return <ProductList onHomeClick={goToLanding} onCartClick={goToCart} />;
  }

  if (view === 'cart') {
    return (
      <CartItem onHomeClick={goToLanding} onProductsClick={goToProducts} />
    );
  }

  // Landing page
  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <h1 className="landing-company-name">Paradise Nursery</h1>
        <AboutUs />
        <button className="get-started-btn" onClick={goToProducts}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
