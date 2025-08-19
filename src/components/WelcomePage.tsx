import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./WelcomePage.css";

const images = [
  "/assets/Main-Dish/hearty-Spaghetti-Bolognese.jpg",
  "/assets/Fast-Food/quesadillas.jpg",
  "/assets/Desserts/waffle.jpg",
];

const WelcomePage = () => {
  const navigate = useNavigate();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex: number) => (prevIndex + 1) % images.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="welcome-page"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${images[currentImageIndex]})`,
      }}
    >
      <div className="welcome-header">
        <p className="welcome-title">Welcome to YumGenie</p>
        <p className="welcome-subtitle">
          Your magical food companion. With YumGenie, delicious meals are just a
          click away. Explore our rich menu, order in seconds, or simply chat
          with our AI to discover new flavors, get personalized recommendations,
          and bring your favorite dishes to life — faster, smarter, and tastier
          than ever.
        </p>
      </div>

      <button className="welcome-button" onClick={() => navigate("/order")}>
        <span>Order Now</span>
      </button>
    </section>
  );
};

export default WelcomePage;
