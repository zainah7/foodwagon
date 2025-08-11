import { useQuery } from "@tanstack/react-query";
import { fetchDeals } from "../services/deal";
import { useDealStore, DealItem } from "@/hooks/useDealStore";
import { useEffect } from "react";

export const useDeals = () => {
  const setDeals = useDealStore((s) => s.setDeals);
  const query = useQuery<DealItem[]>({
    queryKey: ["deals"],
    queryFn: fetchDeals,
    staleTime: 1000 * 60 * 5,
  });
  useEffect(() => {
    if (query.data) setDeals(query.data);
  }, [query.data, setDeals]);
  return query;
};
