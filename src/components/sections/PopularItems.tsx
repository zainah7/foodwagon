"use client"
import Image from 'next/image';
import { Button } from '@/components/shared';
import { MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { popularItems } from '@/lib/popular-items-data';

export default function PopularItems() {
  const handleOrderClick = (item: typeof popularItems[0]) => {
    console.log('Ordering:', item.title);
  };

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold  mb-4">Popular Items</h2>
          
        </div>
        
        <div className="relative">
          {/* Left Arrow */}
          <Button 
            className="hidden lg:flex absolute left-[-60px] top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-chart-4 border border-gray-200 items-center justify-center cursor-pointer transition-colors z-10"
            onClick={() => console.log('Previous')}
            style={{ boxShadow: '0 4px 12px rgba(255, 255, 0, 0.4)' }}
          >
            <ChevronLeft size={24} className="text-white " />
          </Button>
          
          {/* Right Arrow */}
          <Button 
            className="hidden lg:flex absolute right-[-60px] top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-chart-4 border border-gray-200 items-center justify-center cu transition-colors z-10"
            onClick={() => console.log('Next')}
            style={{ boxShadow: '0 4px 12px rgba(255, 255, 0, 0.4)' }}
          >
            <ChevronRight size={24} className="text-white" />
          </Button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
          {popularItems.map((item, index) => (
            <div key={index} className="bg-white transition-all duration-300 overflow-hidden group flex flex-col h-full">
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
