import menuIcon from "/assets/icons/fast-food.png";
import "../components/OrderPage.css";
import { Link } from "react-router-dom";

import { useOutletContext } from "react-router-dom";
import type { FoodType } from "../RootLayout";

type ContextType = {
  selectedFood: FoodType[];
  setSelectedFood: React.Dispatch<React.SetStateAction<FoodType[]>>;
};


const OrderPage = () => {
  const { selectedFood } = useOutletContext<ContextType>();

  const totalPrice = selectedFood.reduce(
    (sum, item) => sum + item.price * item.foodCount,
    0
  );

  return (
    <main className="order-page">
      <section className="order-header">
        <div className="order-left-side">
          <h1 className="order-title">Your Order</h1>
          <img src={menuIcon} alt="Menu Icon" className="menu-icon" />
        </div>
      </section>

      <div className="order-content">
        <section className="order-summary">
          {selectedFood.length === 0 ? (
            <p className="order-empty-text">No items selected.</p>
          ) : (
            selectedFood.map((food) => (
              <div className="order-food-item" key={food.id}>
                <img
                  src={food.src}
                  alt={food.title}
                  className="selected-food-image"
                />
                <div className="order-food-details">
                  <p className="order-food-name">{food.title}</p>
                  <p className="order-food-price">${food.price.toFixed(2)}</p>
                  <p className="order-food-count">x{food.foodCount}</p>
                </div>
              </div>
            ))
          )}
        </section>
        <section className="order-delivery">
          <h2 className="order-section-title">Delivery Details</h2>
          <form className="order-delivery-form">

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
          <h2 className="order-section-title">Payment Method</h2>
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

          <div className="order-total">
            <h2 className="order-total-items">
              Food Number:{" "}
              {selectedFood.reduce((total, f) => total + f.foodCount, 0)}x
            </h2>
            <h2 className="order-total-price">
              Total: ${totalPrice.toFixed(2)}
            </h2>
          </div>
        </section>

        <section className="order-actions">
          <Link to="/cart" className="order-back-btn">
            Back to Cart
          </Link>
          <Link to="/" className="order-confirm-btn">
            Place Order
          </Link>
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
