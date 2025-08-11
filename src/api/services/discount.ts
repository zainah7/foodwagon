import axios from "axios";
import type { DiscountItem } from "@/hooks/useDiscountStore";

export const fetchDiscounts = async (): Promise<DiscountItem[]> => {
  const res = await axios.get("http://localhost:3001/discounts");
  return res.data;
};
