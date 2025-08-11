import api from '@/lib/axios';
import type { RestaurantItem } from "@/hooks/useRestaurantStore";

export const fetchRestaurants = async (): Promise<RestaurantItem[]> => {
  const res = await api.get("/restaurants");
  return res.data;
};
