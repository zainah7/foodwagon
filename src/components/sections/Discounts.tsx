import Image from 'next/image';
import { discountItems } from '@/lib/discount-data';

export default function Discounts() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {discountItems.map((item, index) => (
            <div key={index} className="bg-white overflow-hidden">
              <div className="relative">
                <Image src={item.image} alt={item.title} width={300} height={200} className="w-full rounded-2xl" />
                <div className="absolute bottom-0 left-0 bg-chart-4 text-white px-3 py-2 rounded-tr-3xl rounded-bl-xl flex items-center justify-center">
                  <span className="text-4xl font-bold leading-none">{item.discount.replace('%', '')}</span>
                  <div className="flex flex-col items-center leading-none">
                    <span className="text-lg font-bold">%</span>
                    <span className="text-xs">OFF</span>
                  </div>
                </div>
              </div>
              <div className="py-4">
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-[#F17228] font-bold bg-orange-100 inline-block px-3 py-1 rounded-md text-base">{item.daysRemaining}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
