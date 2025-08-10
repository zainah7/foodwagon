import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Button } from "../../lib/shared";
import { deals } from "@/lib/data/deals-data";

export default function Deals() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-13">
        {deals.map((deal, index) => {
          const isImageFirst = index === 1; 
          return (
            <div
              key={index}
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
                  ) : (
                    deal.title
                  )}
                </h3>
                <p className="text-gray-600 mb-6">{deal.description}</p>
                <Button className="bg-chart-5 text-white font-semibold py-3 px-6 rounded-md flex items-center gap-2 hover:bg-[#d96f02] transition-colors w-fit shadow-lg shadow-chart-5/50 cursor-pointer">
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
}
