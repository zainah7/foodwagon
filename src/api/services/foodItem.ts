import axios from 'axios';
import { FoodItem } from '@/hooks/useFoodItemsStore';

export const fetchFoodItems = async (): Promise<FoodItem[]> => {
  const response = await axios.get('http://localhost:3001/foodItems');
  return response.data;
};
