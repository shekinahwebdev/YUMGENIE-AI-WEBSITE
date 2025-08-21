import WelcomePage from "../components/WelcomePage";
import CompanyStats from "../components/CompanyStats";
import OurServices from "../components/OurServices";
import OurHistory from "../components/OurHistory";
import FoodItems from "../components/FoodItems";
import "../App.css";
const Homepage = () => {
  return (
    <section className="homepage">
      <WelcomePage />
      <CompanyStats />
      <OurHistory />
      <OurServices />
      <FoodItems />
    </section>
  );
};

export default Homepage;
