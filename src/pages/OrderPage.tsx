import menuIcon from "/assets/icons/fast-food.png";
import "../components/OrderPage.css";
import { Link } from "react-router-dom";

const OrderPage = () => {
  return (
    <main className="order-page">
      <section className="order-header">
        <div className="order-left-side">
          <h1 className="order-title">You Order</h1>
          <img src={menuIcon} alt="Menu Icon" className="menu-icon" />
        </div>
      </section>
      <div className="order-main-page">
        <section className="order-summary">
          <div className="selected-food-info">
            <img
              src="/assets/Drinks/coffee.jpg"
              alt="coffee"
              className="selected-food-image"
            />

            <div className="food-side">
              <p className="food-name">Coffee</p>
              <p className="food-price">$100.00</p>
            </div>
          </div>
        </section>
        <section className="order-delivery">
          <h2>Delivery Details</h2>
          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="text" placeholder="Delivery Address" required />
            <input type="tel" placeholder="Phone Number" required />
          </form>
        </section>
        <section className="order-payment">
          <h2>Payment Method</h2>
          <label>
            <input type="radio" name="payment" value="cash" /> Cash on Delivery
          </label>
          <label>
            <input type="radio" name="payment" value="card" /> Credit/Debit Card
          </label>
          <label>
            <input type="radio" name="payment" value="momo" /> Mobile Money
          </label>

          <div className="total-food">
            <h2>Total: $0.0</h2>
          </div>
        </section>
        <section className="order-actions">
          <button className="back-to-cart">
            <Link to="/cart">Back to Cart</Link>
          </button>
          <button className="confirm-order">
            <Link to="/">Place order</Link>
          </button>
        </section>
      </div>
    </main>
  );
};

export default OrderPage;
