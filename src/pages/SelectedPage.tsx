import removeIcon from "/assets/icons/close.png";
import { Link } from "react-router-dom";

const SelectedPage = () => {
  return (
    <main className="selected-page">
      <section className="food-selected">
        <div className="selected-food-info">
          <img
            src="/assets/Drinks/coffee.jpg"
            alt="coffee"
            className="selected-food-image"
          />
          <div className="food-side">
            <p className="food-name">Coffee</p>
            <p className="food-price">$100.00</p>
            <div className="food-total">
              <p className="food-count">x1</p>
              <p className="food-count-price">$100.00</p>
            </div>
          </div>
        </div>
        <button className="remove-item-button">
          <span>Remove</span>
          <img src={removeIcon} alt="remove icon" className="remove-icon" />
        </button>
      </section>
      <section className="food-selected">
        <div className="selected-food-info">
          <img
            src="/assets/Drinks/coffee.jpg"
            alt="coffee"
            className="selected-food-image"
          />
          <div className="food-side">
            <p className="food-name">Coffee</p>
            <p className="food-price">$100.00</p>
            <div className="food-total">
              <p className="food-count">x1</p>
              <p className="food-count-price">$100.00</p>
            </div>
          </div>
        </div>
        <button className="remove-item-button">
          <span>Remove</span>
          <img src={removeIcon} alt="remove icon" className="remove-icon" />
        </button>
      </section>

      <section className="empty-page-footer">
        <div className="subtotal">
          <p className="subtotal-text">Subtotal</p>
          <p className="subtotal-amount">$0.00</p>
        </div>
        <div className="total">
          <p className="total-text">Total</p>
          <p className="total-amount">$0.00</p>
        </div>
        <div className="food-fin-total">
          <p className="food-count">x1</p>
          <p className="food-count-price">$100.00</p>
        </div>
        <button className="checkout-button" aria-label="Checkout Button">
          <Link to="/order">Checkout</Link>
        </button>
      </section>
    </main>
  );
};

export default SelectedPage;
