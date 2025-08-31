import Food from "../components/Food";
import "../components/MenuPage.css";
import menuIcon from "/assets/icons/fast-food.png";
import { foodLists } from "../data/foodIists";
import type { FoodType } from "../RootLayout";
import { useOutletContext } from "react-router-dom";

type ContextType = {
  selectedFood: FoodType[];
  setSelectedFood: React.Dispatch<React.SetStateAction<FoodType[]>>;
  activeCategory: string;
  setActiveCategory: React.Dispatch<React.SetStateAction<string>>;
};

const MenuPage = () => {
  const { selectedFood, setSelectedFood, activeCategory, setActiveCategory } =
    useOutletContext<ContextType>();

  const foodsWithCounts = foodLists.map((food) => {
    const match = selectedFood.find((f) => f.id === food.id);
    return match ? { ...food, foodCount: match.foodCount } : food;
  });

  const filteredFoods =
    activeCategory === "All"
      ? foodsWithCounts
      : foodsWithCounts.filter((food) => food.category === activeCategory);

  const toggleFoodSelection = (food: FoodType) => {
    setSelectedFood((prev) => {
      const existedFood = prev.some((item) => item.id === food.id);
      if (existedFood) {
        return prev.map((item) =>
          item.id === food.id
            ? { ...item, foodCount: item.foodCount + 1 }
            : item
        );
      } else {
        return [...prev, { ...food, foodCount: 1 }];
      }
    });
  };

  const Onincrement = (foodId: string) => {
    setSelectedFood((prev) =>
      prev.map((item) =>
        item.id === foodId ? { ...item, foodCount: item.foodCount + 1 } : item
      )
    );
  };

  const Ondecrement = (foodId: string) => {
    setSelectedFood((prev) =>
      prev
        .map((item) =>
          item.id === foodId && item.foodCount > 1
            ? { ...item, foodCount: item.foodCount - 1 }
            : item
        )
        .filter((item) => !(item.id === foodId && item.foodCount === 1))
    );
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
                activeCategory === category ? "active-button" : ""
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
        {filteredFoods.map((foodLists) => {
          const isSelected = selectedFood.some((f) => f.id === foodLists.id);
          return (
            <Food
              onDecrement={Ondecrement}
              onIncrement={Onincrement}
              isSelected={isSelected}
              key={foodLists.id}
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
