
"use client"

import React, { useEffect } from 'react';
import { useRestaurantStore } from '@/hooks/useRestaurantStore';
import { useRestaurants } from '@/api/hooks/restaurant';
import { RestaurantCard } from '@/lib/shared';
import Link from 'next/link';



const FeaturedRestaurants: React.FC = () => {


  const setRestaurants = useRestaurantStore((state) => state.setRestaurants);
  const restaurants = useRestaurantStore((state) => state.restaurants);
  const { data, isLoading, error } = useRestaurants();
  useEffect(() => {
    if (data) setRestaurants(data);
  }, [data, setRestaurants]);


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
