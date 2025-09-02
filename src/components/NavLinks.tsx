import { Link } from "react-router-dom";
import type { FoodType } from "../RootLayout";

interface NavLinksProps {
  selectedFood: FoodType[];
}

const NavLinks: React.FC<NavLinksProps> = ({ selectedFood }) => {
  const cartCount = selectedFood.reduce((sum, food) => sum + food.foodCount, 0);

  return (
    <nav className="main-nav">
      <ul className="nav-menu">
        <li>
          <Link to="/" data-text="Home">
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/about" data-text="About">
            <span>About</span>
          </Link>
        </li>
        <li>
          <Link to="/menu" data-text="Menu">
            <span>Menu</span>
          </Link>
        </li>
        <li className="cart-link">
          <Link to="/cart" data-text="Cart">
            <span>Cart</span>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        </li>
        <li>
          <Link to="/order" data-text="Order">
            <span>Order</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
