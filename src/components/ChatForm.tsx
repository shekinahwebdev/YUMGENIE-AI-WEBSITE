import { useRef, useState } from "react";
import submitIcon from "/assets/icons/top.png";

interface ChatFormProps {
  setChatHistory: React.Dispatch<React.SetStateAction<any[]>>;
  generateBotResponse: (history: any[]) => void;
  chathistory: any[];
}

export const ChatForm: React.FC<ChatFormProps> = ({
  setChatHistory,
  generateBotResponse,
  chathistory,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    const inputElement = inputRef.current?.value.trim();
    if (!inputElement) return;
    inputRef.current!.value = "";

    setChatHistory((history) => [
      ...history,
      { role: "user", content: inputElement },
    ]);

    setTimeout(() => {
      setChatHistory((history) => [
        ...history,
        { role: "bot", content: "Thinking..." },
      ]);

      generateBotResponse([
        ...chathistory,
        {
          role: "user",
          content: `using the details provided above, please address this query: ${inputElement}`,
        },
      ]);
      // generateBotResponse([
      //   ...chathistory,
      //   { role: "user", content: inputElement },
      // ]);
    }, 600);
  };
  const [message, setMessage] = useState("");
  return (
    <form className="chatbot_form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="chatbot_input"
        placeholder="Message..."
        ref={inputRef}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      {message.trim() && (
        <button className="chatbot_form_button" type="submit">
          <img src={submitIcon} alt="Submit" className="chatbot_submit_icon" />
        </button>
      )}
    </form>
  );
};
