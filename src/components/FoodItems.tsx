import React from "react";

const FoodItems = () => {
  const foodItems = [
    {
      src: "/assets/Deserts/ice-creame.jpg",
      title: "Ice Cream",
    },
    {
      src: "/assets/Drinks/sprite.jpg",
      title: "Sprite",
    },
    {
      src: "/assets/Fast-Food/burger.jpg",
    },
    {
      src: "/assets/Main-Dish/wings.jpg",
    },
    {
      src: "/assets/Snacks/cupcakes.jpg",
    },
  ];

  return (
    <section className="foodItems">
      <h1 className="foodItems-title">Food Items</h1>
      <div className="foodItems-container-slider">
        {foodItems.map((item, index) => (
          <div className="foodItems-container" key={index}>
            <img
              src={item.src}
              alt={item.title || "Food Item"}
              className="foodItem-image"
            />
            {item.title && <h3 className="foodItem-title">{item.title}</h3>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoodItems;
