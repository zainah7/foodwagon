import { create } from 'zustand';

export interface FoodItem {
  id: number;
  image: string;
  title: string;
  restaurant: string;
  price: string;
  originalPrice: string;
  rating: number;
}

interface FoodItemsState {
  foodItems: FoodItem[];
  setFoodItems: (items: FoodItem[]) => void;
}

export const useFoodItemsStore = create<FoodItemsState>((set) => ({
  foodItems: [],
  setFoodItems: (items) => set({ foodItems: items }),
}));
