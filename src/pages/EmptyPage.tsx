import emptyIcon from "/assets/icons/empty-box.png";
const EmptyPage = () => {
  return (
    <main className="empty-page">
      <div className="empty-header">
        <img src={emptyIcon} alt="Empty Icon" className="empty-icon" />
        <p className="empty-text">Empty cart</p>
      </div>

      <section className="empty-page-footer">
        <div className="subtotal">
          <p className="subtotal-text">Subtotal</p>
          <p className="subtotal-amount">$0.00</p>
        </div>

        <div className="total">
          <p className="total-text">Total</p>
          <p className="total-amount">$0.00</p>
        </div>

        <button className="checkout-button" aria-label="Checkout Button">
          <span>Add to cart</span>
        </button>
      </section>
    </main>
  );
};

export default EmptyPage;
