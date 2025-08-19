import { ChatForm } from "../components/ChatForm";
import { ChatHeader } from "../components/ChatHeader";
import { ChatMessage } from "../components/ChatMessage";
import chatbot from "/assets/icons/chatbot.png";
import "../components/ChatbotPage.css";
import { useEffect, useRef, useState } from "react";
import { companyInfo } from "../data/companyInfo";

interface ChatMessage {
  hideInfoChat: boolean;
  role: "user" | "bot";
  content: string;
  isError?: boolean;
}

const ChatbotPage = () => {
  const [chathistory, setChatHistory] = useState<ChatMessage[]>([
    {
      hideInfoChat: true,
      role: "bot",
      content: companyInfo,
    },
  ]);
  const [showChat, setShowChat] = useState<boolean>(true);
  const chatRef = useRef<HTMLDivElement>(null);

  const handleShowChat = () => {
    setShowChat((prev) => !prev);
  };

  const generateBotResponse = async (history: any[]) => {
    const upadateChatHistory = (botReply: string, isError: boolean = false) => {
      setChatHistory((prevHistory) => [
        ...prevHistory.filter(
          (msg) => !(msg.role === "bot" && msg.content === "Thinking...")
        ),
        { role: "bot", content: botReply, isError, hideInfoChat: false },
      ]);
    };

    // Format chat history for API response
    const formatedHistory = history.map(({ role, content }) => ({
      role: role === "bot" ? "model" : "user",
      parts: [{ text: content }],
    }));

    // Send a POST request to the API endpoint
    const requestOptions: RequestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: formatedHistory }),
    };

    // Fetch the bot response from the API
    try {
      const response = await fetch(
        import.meta.env.VITE_API_URL,
        requestOptions
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch response");
      }
      console.log(data);

      const botReply = data.candidates?.[0]?.content?.parts?.[0]?.text
        ?.replace(/\*/g, "")
        .trim();

      upadateChatHistory(botReply);
    } catch (error: string | any) {
      console.log(error.message, true);
    }
  };

  // Scroll to the bottom of the chat
  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  });

  return (
    <>
      <main className={`main ${showChat ? "show-chatbot wrapper" : ""}`}>
        <button className="chatbot_toggle-button" onClick={handleShowChat}>
          <img
            src="/assets/icons/close.png"
            alt="Close Chatbot"
            className="chatbot_close_icon"
          />
          <img
            src="/assets/icons/messenger.png"
            alt="Open Chatbot"
            className="chatbot_open_icon"
          />
        </button>
        <div className="chatbot_main">
          <ChatHeader handleShowChat={handleShowChat} />
          <section className="chatbot_body" ref={chatRef}>
            <div className="chatbot_message">
              <div className="chatbot_icon-container">
                <img
                  src={chatbot}
                  alt="Chatbot Icon"
                  className="chatbot_icon"
                />
              </div>
              <p className="message_text">
                Hello there 👋 <br />I am YumGenie, your AI-powered chatbot!
              </p>
            </div>
            {chathistory.map((message, index) => (
              <ChatMessage message={message} key={index} />
            ))}
          </section>
          <footer className="chatbot_footer">
            <ChatForm
              setChatHistory={setChatHistory}
              generateBotResponse={generateBotResponse}
              chathistory={chathistory}
            />
          </footer>
        </div>
      </main>
    </>
  );
};

export default ChatbotPage;
