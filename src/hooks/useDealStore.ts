import { create } from 'zustand';

export interface DealItem {
  id: number;
  title: string;
  description: string;
  image: string;
  isSpecial: boolean;
}

interface DealState {
  deals: DealItem[];
  setDeals: (deals: DealItem[]) => void;
}

export const useDealStore = create<DealState>((set) => ({
  deals: [],
  setDeals: (deals) => set({ deals }),
}));
