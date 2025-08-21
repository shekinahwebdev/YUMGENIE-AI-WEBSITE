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
        <Food food={filteredFoods} />
      </aside>
    </main>
  );
};

export default MenuPage;
