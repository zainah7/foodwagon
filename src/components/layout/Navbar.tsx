"use client"
import Image from 'next/image';
import { MapPin, Search, User, Menu, X } from 'lucide-react';
import { Button } from '@/lib/shared';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image 
              src="/assets/images/logo.svg" 
              alt="Foodwagon" 
              width={40} 
              height={40} 
              className="h-8 w-8"
            />
            <span className="text-xl sm:text-2xl font-bold text-chart-5">
              food <span className="text-chart-4 font-bold">wagon</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
            {/* Center Section - Location */}
            <div className="flex items-center gap-2">
              <span className='font-bold text-gray-800'>Deliver to:</span>
              <MapPin className="text-chart-5" size={20} />
              <span className="font-bold text-gray-800">
                <span className='font-normal'>Current Location </span>
                Mohammadpur Bus Stand, Dhaka
              </span>
            </div>
          </div>
          
          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Search */}
            <div className="flex items-center space-x-2 cursor-pointer group">
              <Search className="text-chart-4" size={20} />
              <span className="font-semibold text-gray-800 group-hover:text-chart-5 transition-colors">Search Food</span>
            </div>
            
            {/* Login Button */}
            <Button 
              variant="outline" 
              className="rounded-lg space-x-2 border-0 cursor-pointer text-chart-5 shadow-[0_8px_30px_rgba(255,183,3,0.4)]"
            >
              <User className="text-chart-5" size={20} />
              <span className="font-bold text-base text-chart-5">Login</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-chart-5 hover:text-chart-4 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-chart-4/20">
            <div className="space-y-8">
              {/* Mobile Location */}
              <div className="px-4">
                <div className="flex items-start gap-4">
                  <MapPin className="text-chart-4 mt-0.5 flex-shrink-0" size={18} />
                  <div className="flex flex-col space-y-1">
                    <span className="font-bold text-gray-800 text-sm">Deliver to:</span>
                    <span className="font-medium  text-sm">Current Location</span>
                    <span className="text-gray-800 text-sm">Mohammadpur Bus Stand, Dhaka</span>
                  </div>
                </div>
              </div>
              
              {/* Mobile Search */}
              <div className="px-4">
                <div className="flex items-center gap-3 cursor-pointer hover:bg-chart-4/5 p-3 rounded-lg transition-colors group">
                  <Search className="text-chart-4" size={18} />
                  <span className="font-semibold text-gray-800 group-hover:text-chart-5 transition-colors">Search Food</span>
                </div>
              </div>
              
              {/* Mobile Login */}
              <div className="px-4 pt-4">
                <Button 
                  variant="outline" 
                  className="w-full rounded-lg border-0 cursor-pointer text-chart-5 shadow-[0_4px_16px_rgba(255,183,3,0.3)] justify-center"
                >
                  <User className="text-chart-5" size={18} />
                  <span className="font-bold text-base text-chart-5">Login</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
