import { create } from 'zustand';

interface RestaurantItem {
  id: number;
  image: string;
  logo: string;
  name: string;
  slug: string;
  status: string;
  discount: string;
  rating: number;
}

interface RestaurantState {
  restaurants: RestaurantItem[];
  setRestaurants: (restaurants: RestaurantItem[]) => void;
}

export const useRestaurantStore = create<RestaurantState>((set) => ({
  restaurants: [],
  setRestaurants: (restaurants) => set({ restaurants }),
}));
