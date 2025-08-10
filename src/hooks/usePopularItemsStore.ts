import { create } from 'zustand';

interface PopularItem {
  id: number;
  image: string;
  title: string;
  restaurant: string;
  price: string;
  originalPrice: string;
  rating: number;
}

interface PopularItemsState {
  popularItems: PopularItem[];
  setPopularItems: (items: PopularItem[]) => void;
}

export const usePopularItemsStore = create<PopularItemsState>((set) => ({
  popularItems: [],
  setPopularItems: (items) => set({ popularItems: items }),
}));
