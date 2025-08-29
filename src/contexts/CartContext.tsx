import { createContext } from "react";

export interface FoodType {
  id: string;
  src: string;
  category: string;
  title: string;
  price: number;
  foodCount: number;
}
[];

export type CartContextType = {
  selectedFood: FoodType[];
  setSelectedFood: React.Dispatch<React.SetStateAction<FoodType[]>>;
  handleRemoveFood: (id: string) => void;
  activeCategory: string;
  setActiveCategory: React.Dispatch<React.SetStateAction<string>>;
};

// Start with undefined, so TS enforces Provider usage
export const CartContext = createContext<CartContextType | undefined>(
  undefined
);
