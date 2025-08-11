

import { useQuery } from '@tanstack/react-query';
import { fetchFoodItems } from '../services/foodItem';
import { useFoodItemsStore } from '@/hooks/useFoodItemsStore';
import { useEffect } from 'react';

export const useFoodItems = () => {
  const setFoodItems = useFoodItemsStore((state) => state.setFoodItems);
  const query = useQuery({
    queryKey: ['foodItems'],
    queryFn: fetchFoodItems,
  });

  useEffect(() => {
    if (query.data) {
      setFoodItems(query.data);
    }
  }, [query.data, setFoodItems]);

  return query;
};
