import ChatbotPage from "./pages/ChatbotPage";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { useState } from "react";
export interface FoodType {
  id: string;
  src: string;
  category: string;
  title: string;
  price: number;
  foodCount: number;
}
[];

export type ContextType = {
  selectedFood: FoodType[];
  setSelectedFood: React.Dispatch<React.SetStateAction<FoodType[]>>;
  handleRemoveFood: (id: string) => void;
  activeCategory: string;
  setActiveCategory: React.Dispatch<React.SetStateAction<string>>;
};

const RootLayout = () => {
  const [selectedFood, setSelectedFood] = useState<FoodType[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");

  const handleRemoveFood = (idToRemove: string) => {
    setSelectedFood((prev) =>
      prev
        .map((item) =>
          item.id === idToRemove
            ? { ...item, foodCount: item.foodCount - 1 }
            : item
        )
        .filter((item) => item.foodCount > 0)
    );
  };

  return (
    <>
      <Header selectedFood={selectedFood} />
      <main className="yumgenie-ai-website">
        <Outlet
          context={{
            selectedFood,
            setSelectedFood,
            handleRemoveFood,
            activeCategory,
            setActiveCategory,
          }}
        />
      </main>
      <ChatbotPage
        selectedFood={selectedFood}
        setSelectedFood={setSelectedFood}
      />
      <Footer />
    </>
  );
};

export default RootLayout;
