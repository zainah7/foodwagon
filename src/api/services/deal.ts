import api from '@/lib/axios';
import type { DealItem } from "@/hooks/useDealStore";

export const fetchDeals = async (): Promise<DealItem[]> => {
  const res = await api.get("/deals");
  return res.data;
};
