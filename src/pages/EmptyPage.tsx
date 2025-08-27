import { Link } from "react-router-dom";
import emptyIcon from "/assets/icons/empty-box.png";
const EmptyPage = () => {
  return (
    <main className="empty-page">
      <div className="empty-header">
        <img src={emptyIcon} alt="Empty Icon" className="empty-icon" />
        <p className="empty-text">Empty cart</p>
      </div>
      <button className="cart-button" aria-label="Order Button">
        <Link to="/menu">Order</Link>
      </button>
    </main>
  );
};

export default EmptyPage;
