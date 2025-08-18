import "./OurServices.css";

const OurServices = () => {
  const serviceItems = [
    {
      title: "Online Ordering & Delivery",
      description: "Quick and reliable food delivery service to your doorstep.",
      src: "/assets/icons/bus.png",
    },
    {
      title: "Coffee & Drinks Bar",
      description: "Personalized meal plans tailored to your dietary needs.",
      src: "/assets/icons/paper-cup.png",
    },
    {
      title: "Catering for Events",
      description: "AI-generated recipes based on available ingredients.",
      src: "/assets/icons/event.png",
    },
    {
      title: "Snacks & Desserts",
      description: "Expert nutritional advice for a healthier lifestyle.",
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
