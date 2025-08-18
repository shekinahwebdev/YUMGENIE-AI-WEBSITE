import { Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <main className="yumgenie-ai-website">
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </main>
  );
};

export default App;
