import chatbot from "/assets/icons/chatbot.png";

type ChatMessage = {
  role: "user" | "bot";
  content: string;
  isError?: boolean;
  hideInfoChat?: boolean;
};

interface ChatMessageProps {
  message: ChatMessage;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  if (message.role === "bot") {
    return (
      !message.hideInfoChat && (
        <div className={`chatbot_message ${message.isError ? "error" : ""}`}>
          <div className="chatbot_icon-container">
            <img src={chatbot} alt="Chatbot Icon" className="chatbot_icon" />
          </div>
          <p className="message_text">{message.content}</p>
        </div>
      )
    );
  }
  return (
    !message.hideInfoChat && (
      <div className="user_message">
        <p className="message_text">{message.content}</p>
      </div>
    )
  );
};
