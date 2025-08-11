import axios from "axios";
import type { RestaurantItem } from "@/hooks/useRestaurantStore";

export const fetchRestaurants = async (): Promise<RestaurantItem[]> => {
  const res = await axios.get("http://localhost:3001/restaurants");
  return res.data;
};
