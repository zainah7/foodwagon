import axios from "axios";
import type { DealItem } from "@/hooks/useDealStore";

export const fetchDeals = async (): Promise<DealItem[]> => {
  const res = await axios.get("http://localhost:3001/deals");
  return res.data;
};
