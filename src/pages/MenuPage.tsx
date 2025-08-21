import "../components/MenuPage.css";
import menuIcon from "/assets/icons/fast-food.png";
const MenuPage = () => {
  return (
    <main className="menu-page">
      <section className="menu-header">
        <div className="menu-left-side">
          <h1 className="menu-title">Menu</h1>
          <img src={menuIcon} alt="Menu Icon" className="menu-icon" />
        </div>
        <div className="menu-buttons">
          <button
            className="active-button menu-button"
            aria-label="Active Menu Button"
          >
            <span>All</span>
          </button>
          <button className="menu-button" aria-label="Active Menu Button">
            <span>Desserts</span>
          </button>
          <button className="menu-button" aria-label="Active Menu Button">
            <span>Drinks</span>
          </button>
          <button className="menu-button" aria-label="Active Menu Button">
            <span>Fast-Food</span>
          </button>
          <button className="menu-button" aria-label="Active Menu Button">
            <span>Main-Dish</span>
          </button>
          <button className="menu-button" aria-label="Active Menu Button">
            <span>Snacks</span>
          </button>
        </div>
      </section>
    </main>
  );
};

export default MenuPage;
