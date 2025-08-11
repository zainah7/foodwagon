
import { useQuery } from "@tanstack/react-query";
import { fetchRestaurants } from "../services/restaurant";
import { useRestaurantStore, RestaurantItem } from "@/hooks/useRestaurantStore";
import { useEffect } from "react";

export const useRestaurants = () => {
  const setRestaurants = useRestaurantStore((s) => s.setRestaurants);
  const query = useQuery<RestaurantItem[]>({
    queryKey: ["restaurants"],
    queryFn: fetchRestaurants,
    staleTime: 1000 * 60 * 5,
  });
  useEffect(() => {
    if (query.data) setRestaurants(query.data);
  }, [query.data, setRestaurants]);
  return query;
};
