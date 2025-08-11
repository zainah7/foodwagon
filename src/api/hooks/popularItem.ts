import { useQuery } from "@tanstack/react-query";
import { fetchPopularItems } from "../services/popularItem";
import { usePopularItemsStore, PopularItem } from "@/hooks/usePopularItemsStore";
import { useEffect } from "react";

export const usePopularItems = () => {
  const setPopularItems = usePopularItemsStore((s) => s.setPopularItems);
  const query = useQuery<PopularItem[]>({
    queryKey: ["popularItems"],
    queryFn: fetchPopularItems,
    staleTime: 1000 * 60 * 5,
  });
  useEffect(() => {
    if (query.data) setPopularItems(query.data);
  }, [query.data, setPopularItems]);
  return query;
};
