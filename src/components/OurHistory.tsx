import "./OurHistory.css";
const OurHistory = () => {
  return (
    <section className="history_page">
      <div className="history_header">
        <h1 className="history_title">Our History</h1>
        <p className="history_subtitle">
          Every big idea starts small — and YumGenie was no different. What
          began as a love for food and a dream to make ordering easier has
          turned into something magical. Along the way, we’ve blended flavor
          with innovation, turning everyday meals into memorable experiences.
          Today, YumGenie isn’t just about food delivery; it’s about discovery,
          community, and bringing joy to every plate.
        </p>
      </div>

      <div className="total_customers">
        <img
          src="/assets/icons/customer.png"
          alt="Customer Icon"
          className="customer-icon"
        />
        <p className="customers_count">Over 1 Million Happy Customers</p>
      </div>
    </section>
  );
};

export default OurHistory;
