import chatbot from "/assets/icons/chatbot.png";
import arrowDown from "/assets/icons/caret-down.png";

interface ChatHeaderProps {
  toggleChatbot?: () => void;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ toggleChatbot }) => {
  return (
    <div className="chatbot_header">
      <div className="chatbot_header_line">
        <div className="chatbot_icon-container">
          <img src={chatbot} alt="Chatbot Icon" className="chatbot_icon" />
        </div>
        <h1 className="chatbot_title">YumGenie Chatbot</h1>
      </div>
      <button className="chatbot_button" onClick={toggleChatbot}>
        <img src={arrowDown} alt="Arrow Down" className="chatbot_arrow" />
      </button>
    </div>
  );
};
