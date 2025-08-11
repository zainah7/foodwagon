import api from '@/lib/axios';
import type { DiscountItem } from "@/hooks/useDiscountStore";

export const fetchDiscounts = async (): Promise<DiscountItem[]> => {
  const res = await api.get("/discounts");
  return res.data;
};
