import React from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
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
        <li>
          <Link to="/cart" data-text="Cart">
            <span>Cart</span>
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
