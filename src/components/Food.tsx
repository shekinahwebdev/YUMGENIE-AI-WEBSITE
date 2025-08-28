import addToCart from "/assets/icons/icon-add-cart.svg";
import "./Food.css";
import { useState } from "react";

type FoodType = {
  src: string;
  category: string;
  title: string;
  price: number;
  foodCount: number;
};

interface FoodProps {
  food: FoodType;
  isSelected?: boolean;
  onToggle: () => void;
  foodId: string;
}

const Food: React.FC<FoodProps> = ({ food, onToggle, isSelected, foodId }) => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prev) => {
      const newCount = prev + 1;
      if (newCount === 0) {
        onToggle();
      }
      return newCount;
    });
  };

  const handleDecrement = () => {
    setCount((prev) => {
      if (prev > 1) {
        return prev - 1;
      }
      if (prev === 0) {
        onToggle();
        return 0;
      }
      return 0;
    });
  };

  return (
    <section className="food-section">
      <div className="foodName" key={foodId}>
        <img
          src={food.src}
          alt="fruts"
          className={`foodImage ${isSelected ? "selected" : ""}`}
        />
        <div className="food-item-add">
          {!isSelected && count === 1 ? (
            <button className="add-section btn" onClick={onToggle}>
              <img
                src={addToCart}
                alt="Added to Cart"
                className="food-item__add-icon"
              />
              <p className="add_cart">Add to Cart</p>
            </button>
          ) : (
            <div className="quantity-controls">
              <button
                className="food-item__button decrement"
                onClick={handleDecrement}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="2"
                  fill="none"
                  viewBox="0 0 10 2"
                >
                  <path fill="currentColor" d="M0 .375h10v1.25H0V.375Z" />
                </svg>
              </button>
              <p>{count}</p>
              <button
                className="food-item__button increment"
                onClick={handleIncrement}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  fill="none"
                  viewBox="0 0 10 10"
                >
                  <path
                    fill="currentColor"
                    d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
        <div className="item_class">
          <span className="food-item__category">{food.category}</span>
          <span className="food-item__name">{food.title}</span>
          <span className="fodd-item__price">${food.price}</span>
        </div>
      </div>
      {/* ))} */}
    </section>
  );
};

export default Food;
