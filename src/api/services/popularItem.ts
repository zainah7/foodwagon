import api from '@/lib/axios';
import type { PopularItem } from "@/hooks/usePopularItemsStore";

export const fetchPopularItems = async (): Promise<PopularItem[]> => {
  const res = await api.get("/popularItems");
  return res.data;
};
