import addToCart from "/assets/icons/icon-add-cart.svg";
import "./Food.css";
import { useState } from "react";

interface FoodProps {
  food: {
    src: string;
    category: string;
    title: string;
    price: number;
  }[];
}

const Food: React.FC<FoodProps> = ({ food }) => {
  const [isAddToCart, setIsAddToCart] = useState(true);

  const handleAddToCart = () => {
    setIsAddToCart((prev) => !prev);
  };

  return (
    <section className="food-section">
      {food.map((list, index) => (
        <div className="foodName" key={index}>
          <img
            src={list.src}
            alt="fruts"
            className={`foodImage ${!isAddToCart ? "selected" : ""}`}
          />
          <div className="food-item-add">
            {isAddToCart ? (
              <button className="add-section btn" onClick={handleAddToCart}>
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
                  // onClick={handleDecrement}
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
                <p>0</p>
                <button
                  className="food-item__button increment"
                  // onClick={handleIncrement}
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
            <span className="food-item__category">{list.category}</span>
            <span className="food-item__name">{list.title}</span>
            <span className="fodd-item__price">${list.price}</span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Food;
