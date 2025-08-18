import NavLinks from "../components/NavLinks";
import searchIcon from "/assets/icons/search.png";
import historyIcon from "/assets/icons/history.png";
// import menuIcon from "/assets/icons/menu.png";
import WelcomePage from "../components/WelcomePage";
import CompanyStats from "../components/CompanyStats";
import FoodItems from "../components/FoodItems";
const Homepage = () => {
  return (
    <section className="homepage">
      <div className="homepage_header">
        <h1 className="header_title">YumGenie</h1>
        <NavLinks />
        <div className="header_right">
          <button className="search_button">
            <img src={searchIcon} alt="Search Icon" className="icon" />
          </button>
          <button className="history_button">
            <img src={historyIcon} alt="History Icon" className="icon" />
          </button>
        </div>
      </div>
      <WelcomePage />
      <CompanyStats />
      <FoodItems />
    </section>
  );
};

export default Homepage;
