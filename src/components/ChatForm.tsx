import { useRef, useState } from "react";
import submitIcon from "/assets/icons/top.png";
import type { FoodType } from "../RootLayout";
import { foodLists } from "../data/foodIists";

interface ChatFormProps {
  setChatHistory: React.Dispatch<React.SetStateAction<any[]>>;
  generateBotResponse: (history: any[]) => void;
  chathistory: any[];
  selectedFood: FoodType[];
  setSelectedFood: React.Dispatch<React.SetStateAction<FoodType[]>>;
}

const parseOrderCommand = (message: string) => {
  const lowerMsg = message.toLowerCase();
  const numberMatch = lowerMsg.match(/(\d+)/);
  const count = numberMatch ? parseInt(numberMatch[0]) : 1;

  // Matching food name
  const foodMatch = foodLists.find((food) =>
    lowerMsg.includes(food.title.toLowerCase())
  );

  if (foodMatch) {
    return { count, foodName: foodMatch.title.toLowerCase() };
  }
  return null;
};

export const ChatForm: React.FC<ChatFormProps> = ({
  setChatHistory,
  generateBotResponse,
  chathistory,
  selectedFood,
  setSelectedFood,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    const inputElement = inputRef.current?.value.trim();
    if (!inputElement) return;
    inputRef.current!.value = "";

    // add user to the chats
    setChatHistory((history) => [
      ...history,
      { role: "user", content: inputElement },
    ]);

    const userMsg = inputElement.toLowerCase();

    if (/menu|show.*menu|what.*have/.test(userMsg)) {
      const menuList = foodLists
        .map((food) => `${food.title} - $${food.price.toFixed(2)}`)
        .join("\n");

      setChatHistory((history) => [
        ...history,
        { role: "bot", content: `Here's our menu: \n${menuList}` },
      ]);
      return;
    }

    // 👉 Check for price
    if (/price|cost|how much/.test(userMsg)) {
      const foundFood = foodLists.find((f) =>
        userMsg.includes(f.title.toLowerCase())
      );
      if (foundFood) {
        setChatHistory((history) => [
          ...history,
          {
            role: "bot",
            content: `${foundFood.title} costs $${foundFood.price.toFixed(2)}`,
          },
        ]);
        return;
      }
    }

    // 👉 Check for add-to-cart
    const parsedOrder = parseOrderCommand(userMsg);
    if (parsedOrder) {
      const { count, foodName } = parsedOrder;
      const foodItem = foodLists.find((f) =>
        f.title.toLowerCase().includes(foodName)
      );
      if (foodItem) {
        setSelectedFood((prev) => {
          const existing = prev.find((f) => f.id === foodItem.id);
          if (existing) {
            return prev.map((f) =>
              f.id === foodItem.id
                ? { ...f, foodCount: f.foodCount + count }
                : f
            );
          } else {
            return [...prev, { ...foodItem, foodCount: count }];
          }
        });

        setChatHistory((history) => [
          ...history,
          {
            role: "bot",
            content: `✅ Added ${count} ${foodItem.title}(s) to your cart.`,
          },
        ]);
        return;
      }
    }

    // setTimeout(() => {
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
    // }, 600);
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
