import "./OurServices.css";

const OurServices = () => {
  const serviceItems = [
    {
      title: "Online Ordering & Delivery",
      description:
        "Order your favorite meals online and enjoy fast, reliable delivery straight to your doorstep.",
      src: "/assets/icons/bus.png",
    },
    {
      title: "Coffee & Drinks Bar",
      description:
        "From freshly brewed coffee to refreshing cold drinks, we’ve got the perfect sip for every mood.",
      src: "/assets/icons/paper-cup.png",
    },
    {
      title: "Catering for Events",
      description:
        "Delicious and customizable catering options to make your events memorable and stress-free.",
      src: "/assets/icons/event.png",
    },
    {
      title: "Snacks & Desserts",
      description:
        "Indulge in a wide variety of sweet treats and savory snacks to satisfy every craving.",
      src: "/assets/icons/snack.png",
    },
  ];

  return (
    <section className="service-section">
      <h2 className="service-section-title">Our Services</h2>
      <p className="service-section-subtitle">
        Lists Of Food Services We Offer
      </p>
      <div className="service-items-container">
        {serviceItems.map((item, index) => (
          <div className="service-item" key={index}>
            <img
              src={item.src}
              alt={item.title}
              className="service-item-icon"
            />
            <h3 className="service-item-title">{item.title}</h3>
            <p className="service-item-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
