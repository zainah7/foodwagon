"use client"
import { RestaurantCard } from '@/lib/shared';
import { restaurants } from '@/lib/data/featured-restaurants-data';

export default function FeaturedRestaurants() {
  const handleRestaurantClick = (restaurant: typeof restaurants[0]) => {
    console.log('Opening restaurant:', restaurant.name);
    // Add navigation logic here
  };

  return (
    <section className="py-8">
            <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Featured Restaurants</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {restaurants.map((restaurant, index) => (
            <RestaurantCard
              key={index}
              image={restaurant.image}
              logo={restaurant.logo}
              name={restaurant.name}
              status={restaurant.status}
              discount={restaurant.discount}
          
              rating={restaurant.rating}
              onClick={() => handleRestaurantClick(restaurant)}
            />
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
