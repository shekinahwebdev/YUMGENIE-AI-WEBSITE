import { useState, useEffect } from "react";
import leftArrow from "/assets/icons/left-arrow-3.png";
import rightArrow from "/assets/icons/right-arrow-3.png";
import "./FoodItems.css";

const FoodItems = () => {
  const foodItems = [
    { src: "/assets/Desserts/ice-creame.jpg", title: "Ice Cream" },
    { src: "/assets/Drinks/sprite.jpg", title: "Sprite" },
    { src: "/assets/Fast-Food/burger.jpg", title: "Burger" },
    { src: "/assets/Main-Dish/wings.jpg", title: "Chicken Wings" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // const prevSlide = () => {
  //   setCurrentIndex((prev) => (prev === 0 ? foodItems.length - 3 : prev - 1));
  // };

  // const nextSlide = () => {
  //   setCurrentIndex((prev) =>
  //     prev === foodItems.length - 1 ? foodItems.length - 2 : prev + 1
  //   );
  // };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev: number) => {
        if (prev === foodItems.length - 2) {
          setDirection(-1);
        }

        if (prev === 0) setDirection(1);

        return prev + direction;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [direction]);

  return (
    <section className="foodItems">
      <h1 className="foodItems-title">Food Items</h1>

      <div className="foodItems-slider">
        <div
          className="foodItems-container-slider"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {foodItems.map((item, index) => (
            <div className="foodItems-container" key={index}>
              <img src={item.src} alt={item.title} className="foodItem-image" />
            </div>
          ))}
        </div>
      </div>

      {/* <div className="foodItems-arrows">
        <button onClick={prevSlide} className="foodItems-arrow left-arrow">
          <img src={leftArrow} alt="Left Arrow" />
        </button>
        <button onClick={nextSlide} className="foodItems-arrow right-arrow">
          <img src={rightArrow} alt="Right Arrow" />
        </button>
      </div> */}
    </section>
  );
};

export default FoodItems;
