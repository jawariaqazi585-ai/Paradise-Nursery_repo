import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

// ---------------------------------------------------------------------
// Plant catalog — at least six unique plants across three+ categories
// ---------------------------------------------------------------------
export const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      {
        name: 'Snake Plant',
        image:
          'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=500&q=80',
        description: 'Hardy, air-purifying plant with tall, striking leaves.',
        cost: 18,
      },
      {
        name: 'Aloe Vera',
        image:
          'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80',
        description: 'Soothing succulent known for its healing gel.',
        cost: 15,
      },
      {
        name: 'Monstera Deliciosa',
        image:
          'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=500&q=80',
        description: 'Iconic split-leaf plant that thrives indoors.',
        cost: 28,
      },
    ],
  },
  {
    category: 'Succulents & Cacti',
    plants: [
      {
        name: 'Golden Barrel Cactus',
        image:
          'https://images.unsplash.com/photo-1493957988430-a5f2e15f39a3?auto=format&fit=crop&w=500&q=80',
        description: 'A round, spiny cactus that loves bright light.',
        cost: 12,
      },
      {
        name: 'Zebra Haworthia',
        image:
          'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=500&q=80',
        description: 'Striped, low-maintenance succulent rosette.',
        cost: 10,
      },
      {
        name: 'Moon Cactus',
        image:
          'https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?auto=format&fit=crop&w=500&q=80',
        description: 'A colorful grafted cactus, easy to care for.',
        cost: 14,
      },
    ],
  },
  {
    category: 'Decorative Greenery',
    plants: [
      {
        name: 'Boston Fern',
        image:
          'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=500&q=80',
        description: 'Lush, feathery fronds for a classic green look.',
        cost: 16,
      },
      {
        name: 'Boxwood Topiary',
        image:
          'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=500&q=80',
        description: 'A neatly shaped, elegant accent plant.',
        cost: 22,
      },
      {
        name: 'Ficus Bonsai',
        image:
          'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=500&q=80',
        description: 'A miniature tree, perfect for quiet corners.',
        cost: 35,
      },
    ],
  },
];

// ---------------------------------------------------------------------
// Header / navbar — shared across the Product Listing and Cart pages
// ---------------------------------------------------------------------
export function Header({ view, onHomeClick, onProductsClick, onCartClick }) {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="nursery-header">
      <div className="nursery-header-left" onClick={onHomeClick}>
        <span className="nursery-logo">🌱</span>
        <span className="nursery-title">Paradise Nursery</span>
      </div>

      <nav className="nursery-nav">
        <span
          className={`nav-link ${view === 'landing' ? 'active' : ''}`}
          onClick={onHomeClick}
        >
          Home
        </span>
        <span
          className={`nav-link ${view === 'products' ? 'active' : ''}`}
          onClick={onProductsClick}
        >
          Plants
        </span>
        <span
          className={`nav-link cart-nav-link ${view === 'cart' ? 'active' : ''}`}
          onClick={onCartClick}
        >
          🛒 Cart
          <span className="cart-count">{totalItems}</span>
        </span>
      </nav>
    </header>
  );
}

// ---------------------------------------------------------------------
// Product Listing page
// ---------------------------------------------------------------------
function ProductList({ onHomeClick, onCartClick }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (name) => cartItems.some((item) => item.name === name);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-list-page">
      <Header
        view="products"
        onHomeClick={onHomeClick}
        onProductsClick={() => {}}
        onCartClick={onCartClick}
      />

      <main className="product-list-main">
        <h1 className="product-list-heading">Our Houseplants</h1>

        {plantsArray.map((categoryGroup) => (
          <section key={categoryGroup.category} className="category-section">
            <h2 className="category-title">{categoryGroup.category}</h2>
            <div className="plants-grid">
              {categoryGroup.plants.map((plant) => {
                const added = isInCart(plant.name);
                return (
                  <div className="plant-card" key={plant.name}>
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="plant-thumbnail"
                    />
                    <h3 className="plant-name">{plant.name}</h3>
                    <p className="plant-description">{plant.description}</p>
                    <p className="plant-price">${plant.cost.toFixed(2)}</p>
                    <button
                      className="add-to-cart-btn"
                      disabled={added}
                      onClick={() => handleAddToCart(plant)}
                    >
                      {added ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductList;
