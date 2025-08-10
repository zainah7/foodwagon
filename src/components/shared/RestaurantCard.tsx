"use client"
import Image from 'next/image';
import { Star, Percent, Zap } from 'lucide-react';

interface RestaurantCardProps {
  image: string;
  logo: string;
  name: string;
  status: string;
  discount: string;
  category?: string;
  rating?: number;
  reviewCount?: number;
  onClick?: () => void;
  className?: string;
}

export function RestaurantCard({ 
  image, 
  logo, 
  name, 
  status, 
  discount, 
  category,
  rating,
  reviewCount,
  onClick,
  className 
}: RestaurantCardProps) {
  return (
    <div 
      className={`bg-white rounded-xl cursor-pointer group  transition-all duration-300 overflow-hidden ${className}`} 
      onClick={onClick}
    >
      {/* Image Section */}
      <div className="relative overflow-hidden rounded-xl">
        <Image 
          src={image} 
          alt={name} 
          width={300} 
          height={200} 
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 rounded-xl" 
        />
        
        {/* Discount and Fast Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {discount && (
            <div className="bg-chart-1 text-white px-3 py-1 rounded-md text-sm font-semibold flex items-center gap-1">
              <Percent size={12} />
              {discount}
            </div>
          )}
          <div className="bg-chart-4 text-white px-3 py-1 rounded-md text-sm font-semibold flex items-center gap-1">
            <Zap size={12} />
            Fast
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="py-4">
        <div className="flex items-center space-x-3 mb-3">
          {/* Logo */}
          <div className="w-12 h-12 relative rounded-md overflow-hidden   flex-shrink-0">
            <Image 
              src={logo} 
              alt={`${name} logo`} 
              width={48} 
              height={48} 
              className="w-full h-full object-cover" 
            />
          </div>
          
          {/* Restaurant Info */}
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-lg text-gray-900 truncate">{name}</h3>
            {rating && (
              <div className="flex items-center gap-1 mb-3">
                <Star size={14} className="text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-semibold text-yellow-500">{rating}</span>
              </div>
            )}
          </div>
        </div>
        
        {/* Status Section - at the bottom */}
        {status && (
          <div className="mt-auto">
            {status === 'Open Now' && (
              <div className="inline-block px-4 py-1 rounded-full text-xs font-semibold"
                   style={{ backgroundColor: '#e7f7d8ff', color: '#79B93C' }}>
                {status}
              </div>
            )}
            {status === 'Opens tomorrow' && (
              <div className="inline-block bg-orange-100 text-chart-1 px-3 py-1 rounded-full text-xs font-semibold">
                {status}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
