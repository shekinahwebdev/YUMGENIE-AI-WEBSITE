import emptyIcon from "/assets/icons/empty-box.png";
const SelectedPage = () => {
  return (
    <main className="selected-page">
      <div className="selected-header">
        <img src={emptyIcon} alt="Empty Icon" className="empty-icon" />
        <p className="selected-text">Empty cart</p>
      </div>

      <section className="selected-page-footer">
        <div className="subtotal">
          <p className="subtotal-text">Subtotal</p>
          <p className="subtotal-amount">$0.00</p>
        </div>

        <div className="total">
          <p className="total-text">Total</p>
          <p className="total-amount">$0.00</p>
        </div>

        <button className="checkout-button" aria-label="Checkout Button">
          <span>Checkout</span>
        </button>
      </section>
    </main>
  );
};

export default SelectedPage;
