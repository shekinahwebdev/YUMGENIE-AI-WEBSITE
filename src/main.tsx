import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChatbotProvider } from "./contexts/ChatbotContext.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChatbotProvider>
      <RouterProvider router={router} />
    </ChatbotProvider>
  </StrictMode>
);
