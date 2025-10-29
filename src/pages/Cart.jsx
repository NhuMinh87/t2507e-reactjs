import React, { useState } from "react";
import Checkout from "../components/Checkout";
import "./../assets/css/Cart.css"; // tạo file CSS riêng nhé



const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Clap When You Land",
      price: 39.0,
      quantity: 1,
      image: "/images/Clap when you land.png",
    },
  ]);

  const handleQuantityChange = (id, value) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: parseInt(value) || 1 } : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <div className="cart-container">
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td className="product-info">
                  <img src={item.image} alt={item.name} />
                  <span>{item.name}</span>
                </td>
                <td>${item.price.toFixed(2)}</td>
                <td>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) =>
                      handleQuantityChange(item.id, e.target.value)
                    }
                  />
                </td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button
                    className="remove-btn"
                    onClick={() => handleRemove(item.id)}
                  >
                    ×
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="cart-actions">
          <div className="coupon-section">
            <input type="text" placeholder="Coupon Code" />
            <button className="apply-btn">Apply Coupon</button>
          </div>

          <div className="cart-buttons">
            <button className="continue-btn">Continue Shopping</button>
            <button className="update-btn">Update Cart</button>
          </div>
        </div>

        <div className="cart-totals">
          <h2>Cart totals</h2>
          <div className="totals-row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="totals-row">
            <span>Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <button className="checkout-btn">Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
