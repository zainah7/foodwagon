import { create } from 'zustand';

export interface DiscountItem {
  id: number;
  image: string;
  discount: string;
  title: string;
  daysRemaining: string;
}

interface DiscountState {
  discounts: DiscountItem[];
  setDiscounts: (discounts: DiscountItem[]) => void;
}

export const useDiscountStore = create<DiscountState>((set) => ({
  discounts: [],
  setDiscounts: (discounts) => set({ discounts }),
}));
