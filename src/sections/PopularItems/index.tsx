"use client";
import React from 'react';
import { usePopularItemsStore } from '@/hooks/usePopularItemsStore';
import Image from 'next/image';
import { Button } from '@/lib/shared';
import { MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';


// Handle order click (moved outside component)
import type { PopularItem } from '@/hooks/usePopularItemsStore';
const handleOrderClick = (item: PopularItem) => {
  // TODO: Implement order logic, e.g., open modal or add to cart
  alert(`Order placed for: ${item.title}`);
};

const PopularItems: React.FC = () => {
  // Zustand + React Query
  const setPopularItems = usePopularItemsStore((state) => state.setPopularItems);
  const popularItems = usePopularItemsStore((state) => state.popularItems);
  const { isLoading, error } = useQuery({
    queryKey: ['popularItems'],
    queryFn: async () => {
      const res = await fetch('http://localhost:4000/popularItems');
      if (!res.ok) throw new Error('Failed to fetch popular items');
      const data = await res.json();
      setPopularItems(data);
      return data;
    },
    staleTime: 1000 * 60 * 5,
  });

  // Carousel state
  const [page, setPage] = React.useState(0);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(popularItems.length / itemsPerPage);

  const handlePrev = () => {
    setPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };
  const handleNext = () => {
    setPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const visibleItems = popularItems.slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage);

  return (
    <section id="popular-items" className="py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold  mb-4">Popular Items</h2>
          
        </div>
        
        <div className="relative">
          {/* Navigation Arrows - vertical center left/right */}
          <button
            className="hidden lg:flex absolute left-[-60px] top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-chart-4 text-white items-center justify-center cursor-pointer hover:bg-chart-5 transition-colors z-10"
            onClick={handlePrev}
            style={{ boxShadow: '0 4px 12px rgba(250, 170, 1, 0.4)' }}
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="hidden lg:flex absolute right-[-60px] top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-chart-4 text-white items-center justify-center cursor-pointer hover:bg-chart-5 transition-colors z-10"
            onClick={handleNext}
            style={{ boxShadow: '0 4px 12px rgba(250, 170, 1, 0.4)' }}
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
            {isLoading && <div>Loading...</div>}
            {error && <div className="text-red-500">{(error as Error).message}</div>}
            {!isLoading && !error && visibleItems.map((item, index) => (
              <div key={item.id || index} className="bg-white transition-all duration-300 overflow-hidden group flex flex-col h-full">
                {/* Image */}
                <div className="relative h-52 rounded-lg overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                {/* Content */}
                <div className=" flex flex-col flex-grow py-2">
                  <h3 className="font-bold text-base mb-1 text-gray-900">{item.title}</h3>
                  <div className="flex items-center gap-1 mb-2 text-chart-4">
                    <MapPin size={14} className="" />
                    <p className="font-semibold text-base">{item.restaurant}</p>
                  </div>
                  {/* Price */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-900 font-bold text-lg">{item.price}</span>
                    </div>
                  </div>
                  {/* Order Button - pushed to bottom */}
                  <Button
                    onClick={() => handleOrderClick(item)}
                    className="w-full bg-[#F65900] hover:bg-chart-5 text-white font-semibold py-2 px-4 rounded-md transition-colors cursor-pointer mt-auto"
                    style={{ boxShadow: '0 4px 12px rgba(246, 89, 0, 0.4)' }}
                  >
                    Order Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopularItems;
