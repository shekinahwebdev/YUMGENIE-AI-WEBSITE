import NavLinks from "../components/NavLinks";
import searchIcon from "/assets/icons/search.png";
import historyIcon from "/assets/icons/history.png";
import type { FoodType } from "../RootLayout";

interface HeaderProps {
  selectedFood: FoodType[];
}

const Header: React.FC<HeaderProps> = ({ selectedFood }) => {
  return (
    <div className="header">
      <h1 className="header_title">YumGenie</h1>
      <NavLinks selectedFood={selectedFood} />
      <div className="header_right">
        <button className="search_button">
          <img src={searchIcon} alt="Search Icon" className="icon" />
        </button>
        <button className="history_button">
          <img src={historyIcon} alt="History Icon" className="icon" />
        </button>
      </div>
    </div>
  );
};

export default Header;
