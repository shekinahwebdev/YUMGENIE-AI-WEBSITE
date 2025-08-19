import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const footerLinks = [
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Cart", path: "/cart" },
    { name: "Menu", path: "/menu" },
    { name: "Order Now", path: "/order" },
  ];
  return (
    <footer className="footer">
      <div className="footer-top-content">
        <h1 className="footer-title">YumGenie AI</h1>
        <div className="footer-links">
          <div className="footer-links-column">
            <p className="footer-links-item">Main Dish</p>
            <p className="footer-links-item">Desserts</p>
            <p className="footer-links-item">Snacks</p>
            <p className="footer-links-item">Fast Food</p>
            <p className="footer-links-item">Drinks</p>
          </div>
          {footerLinks.map((link, index) => (
            <ul key={index} className="footer-link">
              <li>
                <Link to={link.path} className="footer-link-item">
                  {link.name}
                </Link>
              </li>
            </ul>
          ))}
        </div>
      </div>

      <div className="footer-bottom-content">
        <p className="footer-copyright">
          @2025 YumGenie AI. All rights reserved.
          <span className="policy">Privacy policy</span>
        </p>

        <div className="footer-socials">
          <a
            href="https://www.facebook.com/YumGenieAI"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            <img
              src="/assets/icons/facebook.png"
              alt="Facebook"
              className="footer-social-icon"
            />
          </a>
          <a
            href="https://www.instagram.com/YumGenieAI"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            <img
              src="/assets/icons/instagram.png"
              alt="Instagram"
              className="footer-social-icon"
            />
          </a>
          <a
            href="https://www.linkedIn.com/YumGenieAI"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            <img
              src="/assets/icons/linkedin.png"
              alt="LinkedIn"
              className="footer-social-icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
