import { Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import MenuPage from "./pages/MenuPage";

const App = () => {
  return (
    <main className="yumgenie-ai-website">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </main>
  );
};

export default App;
