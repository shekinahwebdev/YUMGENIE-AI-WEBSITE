import { useOutletContext } from "react-router-dom";
import "../components/CartPage.css";
import type { FoodType } from "../RootLayout";
import EmptyPage from "./EmptyPage";
import SelectedPage from "./SelectedPage";
import menuIcon from "/assets/icons/fast-food.png";

type ContextType = {
  selectedFood: FoodType[];
  setSelectedFood: React.Dispatch<React.SetStateAction<FoodType[]>>;
  handleRemoveFood: (id: string) => void;
};

const CartPage = () => {
  const { selectedFood, setSelectedFood, handleRemoveFood } =
    useOutletContext<ContextType>();

  return (
    <main className="cart-page">
      <section className="cart-header">
        <div className="cart-left-side">
          <h1 className="cart-title">My Cart</h1>
          <img src={menuIcon} alt="Menu Icon" className="menu-icon" />
        </div>

        <div className="clear-cart">
          <button
            className="button clear-cart-button"
            aria-label="Clear Cart"
            onClick={() => setSelectedFood([])}
          >
            <span>Clear Cart</span>
          </button>
        </div>
      </section>
      {selectedFood.length === 0 ? (
        <EmptyPage />
      ) : (
        <SelectedPage
          selectedFood={selectedFood}
          handleRemoveFood={handleRemoveFood}
        />
      )}
    </main>
  );
};

export default CartPage;
