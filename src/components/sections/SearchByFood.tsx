"use client"
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { foodItems } from '@/lib/food-items-data';

export default function SearchByFood() {
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
          {foodItems.map((item, index) => (
            <div 
              key={index} 
              className="text-center group cursor-pointer hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative mb-4 mx-auto w-32 h-32 rounded-full shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.name} 
                  width={80} 
                  height={80} 
                  className="object-cover rounded-full w-full h-full" 
                />
              </div>
              <h3 className="font-bold text-lg text-gray-900 group-hover:text-chart-4 transition-colors">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
