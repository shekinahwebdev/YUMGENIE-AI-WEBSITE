import { createContext, useContext, useState } from "react";

const ChatbotContext = createContext({
  isOpen: false,
  toggleChatbot: () => {},
});

type ChatbotProviderProps = {
  children: React.ReactNode;
};

export const ChatbotProvider = ({ children }: ChatbotProviderProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleChatbot = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <ChatbotContext.Provider value={{ isOpen, toggleChatbot }}>
      {children}
    </ChatbotContext.Provider>
  );
};

// custome hook to use the ChatbotContext
export const useChatbot = () => useContext(ChatbotContext);
