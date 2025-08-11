import api from '@/lib/axios';
import { FoodItem } from '@/hooks/useFoodItemsStore';

export async function fetchFoodItems(): Promise<FoodItem[]> {
  const response = await api.get('/foodItems');
  return response.data;
}
