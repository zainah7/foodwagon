"use client"
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './Card';
import { Button } from './Button';

interface FoodCardProps {
  image: string;
  title: string;
  restaurant?: string;
  price: string;
  category?: string;
  onOrderClick?: () => void;
  className?: string;
}

export function FoodCard({ 
  image, 
  title, 
  restaurant, 
  price, 
  category,
  onOrderClick,
  className 
}: FoodCardProps) {
  return (
    <Card className={className}>
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-xl">
          <Image 
            src={image} 
            alt={title} 
            width={300} 
            height={200} 
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" 
          />
          {category && (
            <span className="absolute top-3 left-3 bg-white px-2 py-1 rounded-full text-xs font-medium text-gray-700">
              {category}
            </span>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <CardTitle className="mb-2 text-lg">{title}</CardTitle>
        {restaurant && (
          <CardDescription className="mb-2">{restaurant}</CardDescription>
        )}
        <div className="flex items-center justify-between">
          <span className="font-bold text-xl text-chart-4">{price}</span>
          <Button 
            size="sm" 
            onClick={onOrderClick}
            className="rounded-full"
          >
            Order Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
