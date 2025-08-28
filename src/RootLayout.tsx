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

const RootLayout = () => {
  const [selectedFood, setSelectedFood] = useState<FoodType[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");

  console.log(selectedFood);

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
      <Header />
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
      <ChatbotPage />
      <Footer />
    </>
  );
};

export default RootLayout;
