import { useQuery } from "@tanstack/react-query";
import { fetchDiscounts } from "../services/discount";
import { useDiscountStore, DiscountItem } from "@/hooks/useDiscountStore";
import { useEffect } from "react";

export const useDiscounts = () => {
  const setDiscounts = useDiscountStore((s) => s.setDiscounts);
  const query = useQuery<DiscountItem[]>({
    queryKey: ["discounts"],
    queryFn: fetchDiscounts,
    staleTime: 1000 * 60 * 5,
  });
  useEffect(() => {
    if (query.data) setDiscounts(query.data);
  }, [query.data, setDiscounts]);
  return query;
};
