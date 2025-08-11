"use client"

import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useFoodItems } from '@/api/hooks/foodItem';
import React from 'react';

const SearchByFood: React.FC = () => {
  const { data: foodItems, isLoading, error } = useFoodItems();
  const [selectedFood, setSelectedFood] = React.useState<string | null>(null);
  const filteredItems = selectedFood && foodItems
    ? foodItems.filter((item) =>
        item.title.toLowerCase().includes(selectedFood.toLowerCase())
      )
    : [];

  if (isLoading) {
    return <div className="py-16 text-center">Loading food items...</div>;
  }
  if (error) {
    return <div className="py-16 text-center text-red-500">Failed to load food items.</div>;
  }

  return (
    <section className="py-16 bg-[#f9efed]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900">Search by Food</h2>
          <div className="flex items-center gap-4">
            <a href="#" className="text-chart-4 font-semibold hover:text-chart-5 transition-colors flex items-center gap-1">
              View All
              <span>&gt;</span>
            </a>
            {/* Navigation Arrows */}
            <div className="flex items-center gap-2">
              <button 
                className="w-10 h-10 rounded-full bg-chart-4 text-white flex items-center justify-center cursor-pointer hover:bg-chart-5 transition-colors"
                onClick={() => console.log('Previous')}
                style={{ boxShadow: '0 4px 12px rgba(250, 170, 1, 0.4)' }}
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                className="w-10 h-10 rounded-full bg-chart-4 text-white flex items-center justify-center cursor-pointer hover:bg-chart-5 transition-colors"
                onClick={() => console.log('Next')}
                style={{ boxShadow: '0 4px 12px rgba(250, 170, 1, 0.4)' }}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {foodItems && foodItems.slice(0, 6).map((item, index) => (
              <div
                key={index}
                className={`text-center group cursor-pointer hover:transform hover:scale-105 transition-all duration-300 ${selectedFood === item.title ? 'ring-4 ring-chart-4' : ''}`}
                onClick={() => setSelectedFood(item.title)}
              >
                <div className="relative mb-4 mx-auto w-32 h-32 rounded-full shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="object-cover rounded-full w-full h-full"
                  />
                </div>
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-chart-4 transition-colors">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
          {/* Show filtered food items below */}
          {selectedFood && (
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-4 text-gray-900">{selectedFood} Food</h3>
              {filteredItems.length === 0 ? (
                <div className="text-gray-500">No items found for {selectedFood}.</div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredItems.map((item) => (
                    <div key={item.id} className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={128}
                        height={128}
                        className="w-32 h-32 object-cover rounded-lg mb-2"
                      />
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <div className="text-gray-600 mb-1">{item.restaurant}</div>
                      <div className="font-semibold text-[#F65900] mb-1">{item.price}</div>
                      <div className="text-sm text-gray-500 line-through">{item.originalPrice}</div>
                      <div className="text-yellow-500 font-bold">Rating: {item.rating}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default SearchByFood;
