import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import { Header } from './ProductList';
import './CartItem.css';

function CartItem({ onHomeClick, onProductsClick }) {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.cost,
    0
  );

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({ name: item.name, quantity: item.quantity - 1 })
      );
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleDelete = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckout = () => {
    alert('Coming Soon! Checkout is not implemented yet.');
  };

  return (
    <div className="cart-page">
      <Header
        view="cart"
        onHomeClick={onHomeClick}
        onProductsClick={onProductsClick}
        onCartClick={() => {}}
      />

      <main className="cart-main">
        <h1 className="cart-heading">Your Shopping Cart</h1>

        <div className="cart-summary">
          <p>
            Total Plants: <strong>{totalItems}</strong>
          </p>
          <p>
            Total Cost: <strong>${totalCost.toFixed(2)}</strong>
          </p>
        </div>

        {cartItems.length === 0 ? (
          <p className="empty-cart-message">
            Your cart is empty. Head back to the plant list to add some green!
          </p>
        ) : (
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.name}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-thumbnail"
                />

                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-unit-price">
                    Unit price: ${item.cost.toFixed(2)}
                  </p>

                  <div className="quantity-controls">
                    <button
                      className="quantity-btn"
                      onClick={() => handleDecrement(item)}
                    >
                      −
                    </button>
                    <span className="quantity-value">{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => handleIncrement(item)}
                    >
                      +
                    </button>
                  </div>

                  <p className="cart-item-subtotal">
                    Subtotal: ${(item.cost * item.quantity).toFixed(2)}
                  </p>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(item)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="cart-actions">
          <button className="continue-shopping-btn" onClick={onProductsClick}>
            Continue Shopping
          </button>
          <button className="checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </main>
    </div>
  );
}

export default CartItem;
