import { useState } from "react";
import Food from "../components/Food";
import "../components/MenuPage.css";
import menuIcon from "/assets/icons/fast-food.png";
import { foodLists } from "../data/foodIists";
const MenuPage = () => {
  const [activeCatergory, setActiveCategory] = useState("All");

  const filteredFoods =
    activeCatergory === "All"
      ? foodLists
      : foodLists.filter((food) => food.category === activeCatergory);

  interface FoodType {
    id: string;
    src: string;
    category: string;
    title: string;
    price: number;
  }
  [];

  const [selectedFood, setSelectedFood] = useState<FoodType[]>([]);

  const toggleFoodSelection = (food: FoodType) => {
    setSelectedFood((prev) => {
      const existedFood = selectedFood.some((item) => item.id === food.id);

      if (existedFood) {
        return prev.filter((item) => item.id !== food.id);
      } else {
        return [...prev, food];
      }
    });
  };

  return (
    <main className="menu-page">
      <section className="menu-header">
        <div className="menu-left-side">
          <h1 className="menu-title">Menu</h1>
          <img src={menuIcon} alt="Menu Icon" className="menu-icon" />
        </div>
        <div className="menu-buttons">
          {[
            "All",
            "Desserts",
            "Drinks",
            "Fast-Food",
            "Main-Dish",
            "Snacks",
          ].map((category) => (
            <button
              className={`button ${
                activeCatergory === category ? "active-button" : ""
              }`}
              onClick={() => setActiveCategory(category)}
              aria-label="Active Menu Button"
            >
              <span>{category}</span>
            </button>
          ))}
        </div>
      </section>

      <aside className="menu-aside">
        {filteredFoods.map((foodLists, index) => {
          const isSelected = selectedFood.some((f) => f.id === foodLists.id);
          return (
            <Food
              isSelected={isSelected}
              key={index}
              foodId={foodLists.id}
              food={foodLists}
              onToggle={() => toggleFoodSelection(foodLists)}
            />
          );
        })}
      </aside>
    </main>
  );
};

export default MenuPage;
