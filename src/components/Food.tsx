import addToCart from "/assets/icons/icon-add-cart.svg";
import "./Food.css";
import { foodLists } from "../data/foodIists";

const Food = () => {
  return (
    <section className="food-section">
      {foodLists.map((food, index) => (
        <div className="foodName" key={index}>
          <img src={food.src} alt="fruts" className="foodImage" />
          <div className="food-item-add">
            <button className="add-section btn">
              <img
                src={addToCart}
                alt="Added to Cart"
                className="food-item__add-icon"
              />
              <p className="add_cart">Add to Cart</p>
            </button>
          </div>
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
          <div className="item_class">
            <span className="food-item__category">{food.category}</span>
            <span className="food-item__name">{food.title}</span>
            <span className="fodd-item__price">${food.price}</span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Food;
