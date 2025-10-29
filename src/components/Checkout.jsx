import React from "react";
import  "./../assets/css/Checkout.css";

export default function Checkout() {
  return (
    <div className="checkout-container">
      <form className="billing-form">
        <h2>Billing details</h2>

        <div className="form-row">
          <div className="form-group">
            <label>First name *</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>Last name *</label>
            <input type="text" required />
          </div>
        </div>

        <div className="form-group">
          <label>Company name (optional)</label>
          <input type="text" />
        </div>

        <div className="form-group">
          <label>Country / Region *</label>
          <select required>
            <option>United States (US)</option>
            <option>Vietnam</option>
          </select>
        </div>

        <div className="form-group">
          <label>Street address *</label>
          <input type="text" placeholder="House number and street name" required />
          <input type="text" placeholder="Apartment, suite, unit, etc. (optional)" />
        </div>

        <div className="form-group">
          <label>Town / City *</label>
          <input type="text" required />
        </div>

        <div className="form-group">
          <label>State *</label>
          <select>
            <option>New York</option>
            <option>California</option>
          </select>
        </div>

        <div className="form-group">
          <label>ZIP Code *</label>
          <input type="text" required />
        </div>

        <div className="form-group">
          <label>Phone *</label>
          <input type="tel" required />
        </div>

        <div className="form-group">
          <label>Email address *</label>
          <input type="email" required />
        </div>

        <h3>Additional information</h3>
        <textarea placeholder="Order notes (optional)"></textarea>
      </form>

      <div className="order-summary">
        <h2>Your order</h2>
        <div className="order-item">
          <span>Clap When You Land × 1</span>
          <span>$39.00</span>
        </div>
        <div className="order-subtotal">
          <span>Subtotal</span>
          <span>$39.00</span>
        </div>
        <div className="order-total">
          <strong>Total</strong>
          <strong>$39.00</strong>
        </div>

        <div className="payment-section">
          <h2>Payment</h2>

          <div className="payment-option">
            <input type="radio" name="payment" defaultChecked />
            <label>Cash on delivery</label>
            <p>Pay with cash upon delivery.</p>
          </div>

          <div className="payment-option">
            <input type="radio" name="payment" />
            <label>
              PayPal <img src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-100px.png" alt="PayPal" />
            </label>
          </div>

          <button type="submit" className="place-order-btn">Place order</button>
        </div>
      </div>
    </div>
  );
}
