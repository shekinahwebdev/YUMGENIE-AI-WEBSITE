import "../components/CartPage.css";
import EmptyPage from "./EmptyPage";
import SelectedPage from "./SelectedPage";
import menuIcon from "/assets/icons/fast-food.png";

const CartPage = () => {
  return (
    <main className="cart-page">
      <section className="cart-header">
        <div className="cart-left-side">
          <h1 className="cart-title">My Cart</h1>
          <img src={menuIcon} alt="Menu Icon" className="menu-icon" />
        </div>

        <div className="clear-cart">
          <button className="button clear-cart-button" aria-label="Clear Cart">
            <span>Clear Cart</span>
          </button>
        </div>
      </section>
      {/* <EmptyPage /> */}
      <SelectedPage />
    </main>
  );
};

export default CartPage;
