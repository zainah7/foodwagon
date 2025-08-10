import Image from 'next/image';
import React from 'react';
import { servicesData } from '@/lib/data/app-download-data';

const iconDimensions = {
  width: 72,
  height: 72,
};

const serviceItems = servicesData.map((service) => ({
  ...service,
  ...iconDimensions,
}));

const Service = ({
  icon,
  title1,
  title2,
  width,
  height,
}: (typeof serviceItems)[0]) => (
  <div className="flex items-center gap-4">
    <Image src={icon} alt={`${title1} ${title2}`} width={width} height={height} />
    <div>
      <h3 className="text-xl font-bold text-chart-1 leading-tight">
        {title1}
        <br />
        {title2}
      </h3>
    </div>
  </div>
);

export default function AppDownload() {
  return (
    <section className="relative bg-[#FEEFD0] pt-16 pb-0 md:pt-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Services Card Section */}
        <div
          className="bg-white rounded-3xl p-8 shadow-xl max-w-5xl mx-auto mb-20"
          style={{
            boxShadow:
              '0 18px 25px -5px rgba(253, 195, 71, 0.4), 0 8px 10px -6px rgba(245, 149, 0, 0.4)',
          }}
        >
          <div className="flex flex-col md:flex-row items-center justify-around gap-y-8 md:gap-10">
            {serviceItems.map((item, index) => (
              <React.Fragment key={item.title1}>
                <Service {...item} />
                {index < serviceItems.length - 1 && (
                  <div className="hidden md:block w-px h-24 bg-gray-300"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* App Download Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F48102] mb-6 leading-tight">
              Install the app
            </h2>
            <p className="text-gray-700 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
              It&apos;s never been easier to order food. Look for the finest
              discounts and you&apos;ll be lost in a world of delectable food.
            </p>

            {/* Download Buttons */}
            <div className="flex mb-9 flex-row gap-4 justify-center lg:justify-start">
              <a href="#" className="block">
                <Image
                  src="/assets/images/google-play.svg"
                  alt="Get it on Google Play"
                  width={180}
                  height={54}
                  className="w-[140px] sm:w-[180px] h-auto transition-transform hover:scale-105"
                  style={{ filter: 'drop-shadow(0 10px 15px rgba(244, 129, 2, 0.4))' }}
                />
              </a>
              <a href="#" className="block">
                <Image
                  src="/assets/images/app-store.svg"
                  alt="Download on the App Store"
                  width={180}
                  height={54}
                  className="w-[140px] sm:w-[180px] h-auto transition-transform hover:scale-105"
                  style={{ filter: 'drop-shadow(0 10px 15px rgba(244, 129, 2, 0.4))' }}
                />
              </a>
            </div>
          </div>
          
          {/* Phone Image */}
          <div className="flex-1 flex justify-center lg:justify-start order-2 lg:order-1 -mt-16 sm:-mt-24 lg:mt-0 lg:-ml-16">
            <Image
              src="/assets/images/phone-cta-one.png"
              alt="Food delivery app on mobile phones"
              width={850}
              height={550}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none h-auto"
            />
          </div>
        </div>
      </div>
      {/* Background Curve Image */}
      <div className="absolute bottom-0 left-0 w-full h-auto z-0">
        <Image
          src="/assets/images/Curve.svg"
          alt="background curve"
          width={1440}
          height={160}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}