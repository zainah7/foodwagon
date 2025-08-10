import Image from 'next/image';
import { Button, Input } from '@/components/shared';
import { Bike, Handbag, MapPin, Search } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden min-h-screen sm:min-h-0">
      <div className="absolute inset-0 bg-no-repeat bg-bottom bg-cover bg-[url('/assets/images/hero-bg.png')]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between py-8 sm:py-12 lg:py-16 min-h-screen lg:min-h-0">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6 text-white leading-tight">
              Are you starving?
            </h1>
            <p className="text-sm lg:text-base mb-6 lg:mb-8 text-gray-800 max-w-md mx-auto lg:mx-0">
              Within a few clicks, find meals that are accessible near you
            </p>
            
            {/* Search Card */}
            <div className="bg-white p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 w-full max-w-sm sm:max-w-md lg:max-w-3xl mx-auto lg:mx-0">
              {/* Delivery/Pickup Tabs */}
              <div className="flex flex-wrap lg:space-x-3 gap-2 lg:gap-0 mb-3 lg:mb-4 border-b border-gray-200 pb-2 lg:pb-3">
                <Button 
                  variant="default"
                  className="flex items-center gap-1 lg:gap-2 text-[#F65900] font-bold px-3 sm:px-4 lg:px-6 py-1 text-xs lg:text-sm rounded-lg bg-orange-100 font-semibold hover:opacity-90 hover:text-white transition-all"
                >
                  <Bike size={16} className="lg:w-5 lg:h-5" />
                  Delivery
                </Button>
                <Button 
                  variant="ghost"
                  className="flex items-center gap-1 lg:gap-2 text-gray-700 px-3 sm:px-4 lg:px-6 py-1 lg:py-3 text-xs lg:text-sm hover:text-gray-900 transition-colors font-semibold"
                >
                  <Handbag size={16} className="lg:w-5 lg:h-5" />
                  Pickup
                </Button>
              </div>
              
              {/* Search Input */}
              <div className="flex flex-col lg:flex-row gap-3">
                <div className="lg:flex-1 relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#F65900] w-4 h-4 lg:w-5 lg:h-5" />
                  <Input 
                    type="text" 
                    placeholder="Enter Your Address" 
                    className="pl-10 lg:pl-12 pr-4 py-2 lg:py-3 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-chart-4/20 text-gray-700 placeholder-gray-500 text-sm lg:text-base w-full"
                  />
                </div>
                <Button 
                  variant="default"
                  className="flex items-center justify-center gap-2 px-6 lg:px-8 py-2 lg:py-3 font-semibold bg-[#F65900] text-white hover:bg-chart-5/90 text-sm lg:text-base rounded-lg lg:whitespace-nowrap"
                >
                  <Search size={14} className="lg:w-4 lg:h-4" />
                  Find Food
                </Button>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-16 flex justify-center lg:justify-end items-center relative order-first lg:order-last">
            <div className="relative lg:absolute lg:-top-24">
              <Image 
                src="/assets/images/hero-header.png" 
                alt="Hero Image" 
                width={600} 
                height={600}
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
