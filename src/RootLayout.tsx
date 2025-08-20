import ChatbotPage from "./pages/ChatbotPage";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main className="yumgenie-ai-website">
        <Outlet />
      </main>
      <ChatbotPage />
    </>
  );
};

export default RootLayout;
