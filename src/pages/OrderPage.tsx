import menuIcon from "/assets/icons/fast-food.png";
import "../components/OrderPage.css";

const OrderPage = () => {
  return (
    <main className="order-page">
      <section className="order-header">
        <div className="order-left-side">
          <h1 className="order-title">Place Your Order</h1>
          <img src={menuIcon} alt="Menu Icon" className="menu-icon" />
        </div>
      </section>
    </main>
  );
};

export default OrderPage;
