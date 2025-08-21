import ChatbotPage from "./pages/ChatbotPage";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main className="yumgenie-ai-website">
        <Outlet />
      </main>
      <ChatbotPage />
      <Footer />
    </>
  );
};

export default RootLayout;
