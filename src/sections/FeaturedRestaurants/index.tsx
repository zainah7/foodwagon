
"use client"
import React from 'react';
import { useRestaurantStore } from '@/hooks/useRestaurantStore';
import { useQuery } from '@tanstack/react-query';
import { RestaurantCard } from '@/lib/shared';
import Link from 'next/link';



const FeaturedRestaurants: React.FC = () => {

  // Zustand + React Query
  const setRestaurants = useRestaurantStore((state) => state.setRestaurants);
  const restaurants = useRestaurantStore((state) => state.restaurants);
  const { isLoading, error } = useQuery({
    queryKey: ['restaurants'],
    queryFn: async () => {
      const res = await fetch('http://localhost:4000/restaurants');
      if (!res.ok) throw new Error('Failed to fetch restaurants');
      const data = await res.json();
      setRestaurants(data);
      return data;
    },
    staleTime: 1000 * 60 * 5,
  });

  // Optionally, you can remove handleRestaurantClick if not needed

  return (
    <section className="py-8">
            <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Featured Restaurants</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading && <div>Loading...</div>}
          {error && <div className="text-red-500">{(error as Error).message}</div>}
          {!isLoading && !error && restaurants.slice(0, 8).map((restaurant, index) => (
            <Link key={restaurant.slug || restaurant.id || index} href={`/restaurants/${restaurant.slug}`} passHref legacyBehavior>
              <a style={{ textDecoration: 'none' }}>
                <RestaurantCard
                  image={restaurant.image}
                  logo={restaurant.logo}
                  name={restaurant.name}
                  status={restaurant.status}
                  discount={restaurant.discount}
                  rating={restaurant.rating}
                />
              </a>
            </Link>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-chart-4 hover:bg-chart-5 text-white font-semibold py-3 px-8 rounded-md transition-colors cursor-pointer "
                  style={{ boxShadow: '0 4px 12px rgba(246, 89, 0, 0.4)' }}>
            View All 
          </button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedRestaurants;
