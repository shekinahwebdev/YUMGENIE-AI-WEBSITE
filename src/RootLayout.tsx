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

  const handleRemoveFood = (idToRemove: string) => {
    setSelectedFood(selectedFood.filter((food) => food.id !== idToRemove));
  };
  return (
    <>
      <Header />
      <main className="yumgenie-ai-website">
        <Outlet context={{ selectedFood, setSelectedFood, handleRemoveFood }} />
      </main>
      <ChatbotPage />
      <Footer />
    </>
  );
};

export default RootLayout;
