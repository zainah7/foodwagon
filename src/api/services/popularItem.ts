import axios from "axios";
import type { PopularItem } from "@/hooks/usePopularItemsStore";

export const fetchPopularItems = async (): Promise<PopularItem[]> => {
  const res = await axios.get("http://localhost:3001/popularItems");
  return res.data;
};
