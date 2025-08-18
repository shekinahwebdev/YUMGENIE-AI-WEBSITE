import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <section className="welcome-page">
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
