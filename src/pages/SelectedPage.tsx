import type { FoodType } from "../RootLayout";
import removeIcon from "/assets/icons/close.png";
import { Link } from "react-router-dom";

interface SelectedPageProps {
  selectedFood: FoodType[];
  handleRemoveFood: (id: string) => void;
}

const SelectedPage: React.FC<SelectedPageProps> = ({
  selectedFood,
  handleRemoveFood,
}) => {
  const subtotal = selectedFood.reduce(
    (sum, food) => sum + food.price + food.foodCount,
    0
  );
  return (
    <main className="selected-page">
      {selectedFood.map((food) => (
        <section className="food-selected">
          <div className="selected-food-info" key={food.id}>
            <img
              src={food.src}
              alt={food.title}
              className="selected-food-image"
            />
            <div className="food-side">
              <p className="food-name">{food.title}</p>
              <p className="food-price">${food.price.toFixed(2)}</p>
              <div className="food-total">
                <p className="food-count">x{food.foodCount}</p>
                <p className="food-count-price">
                  ${(food.foodCount * food.price).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
          <button
            className="remove-item-button"
            onClick={() => handleRemoveFood(food.id)}
          >
            <span>Remove</span>
            <img src={removeIcon} alt="remove icon" className="remove-icon" />
          </button>
        </section>
      ))}

      {selectedFood.length > 0 && (
        <section className="empty-page-footer">
          <div className="subtotal">
            <p className="subtotal-text">Subtotal</p>
            <p className="subtotal-amount">${subtotal.toFixed(2)}</p>
          </div>
          <div className="total">
            <p className="total-text">Total</p>
            <p className="total-amount">${subtotal.toFixed(2)}</p>
          </div>
          <div className="food-fin-total">
            <p className="food-count">x{selectedFood.length}</p>
            <p className="food-count-price">${subtotal.toFixed(2)}</p>
          </div>
          <button className="checkout-button" aria-label="Checkout Button">
            <Link to="/order">Checkout</Link>
          </button>
        </section>
      )}
    </main>
  );
};

export default SelectedPage;
