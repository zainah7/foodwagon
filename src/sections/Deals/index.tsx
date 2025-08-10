"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { useDealStore } from '@/hooks/useDealStore';
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Button } from "../../lib/shared";


const Deals: React.FC = () => {
  const setDeals = useDealStore((state) => state.setDeals);
  const deals = useDealStore((state) => state.deals);

  useQuery({
    queryKey: ['deals'],
    queryFn: async () => {
      const res = await fetch('http://localhost:4000/deals');
      if (!res.ok) throw new Error('Failed to fetch deals');
      const data = await res.json();
      setDeals(data);
      return data;
    },
    staleTime: 1000 * 60 * 5,
  });

  const router = useRouter();

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-13">
        {deals.map((deal, index) => {
          const isImageFirst = index === 1;
          return (
            <div
              key={deal.id || index}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row ${
                isImageFirst ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* Image Section */}
              <div className="flex justify-center items-center md:w-7/12">
                <Image
                  src={deal.image}
                  alt={
                    typeof deal.title === "string"
                      ? deal.title
                      : "deal image"
                  }
                  width={960}
                  height={500}
                  className="object-cover w-full h-auto"
                />
              </div>

              {/* Text Section */}
              <div className="p-8 flex flex-col justify-center md:w-5/12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-snug">
                  {deal.isSpecial ? (
                    <>
                      Best deals <span className="text-chart-4">Crispy <br /></span>  <span className="text-chart-4">Sandwiches</span>
                    </>
                  ) : deal.title === 'Celebrate parties with Fried Chicken' ? (
                    <>
                      Celebrate parties<br />
                      with <span className="text-chart-4">Fried Chicken</span>
                    </>
                  ) : deal.title === 'Wanna eat hot & spicy Pizza?' ? (
                    <>
                      Wanna eat hot &<br />
                      spicy <span className="text-chart-4">Pizza?</span>
                    </>
                  ) : (
                    deal.title
                  )}
                </h3>
                <p className="text-gray-600 mb-6">{deal.description}</p>
                <Button
                  className="bg-chart-5 text-white font-semibold py-3 px-6 rounded-md flex items-center gap-2 hover:bg-[#d96f02] transition-colors w-fit shadow-lg shadow-chart-5/50 cursor-pointer"
                  onClick={() => router.push('/#popular-items')}
                >
                  Proceed to order
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Deals;