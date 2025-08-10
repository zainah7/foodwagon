import AppDownload from "@/components/sections/AppDownload";
import Deals from "@/components/sections/Deals";
import Discounts from "@/components/sections/Discounts";
import FeaturedRestaurants from "@/components/sections/FeaturedRestaurants";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import OrderCTA from "@/components/sections/OrderCTA";
import PopularItems from "@/components/sections/PopularItems";
import SearchByFood from "@/components/sections/SearchByFood";

export default function Home() {
  return (
    <main>
      <Hero />
      <Discounts />
      <HowItWorks />
      <PopularItems />
      <FeaturedRestaurants />
      <SearchByFood />
      <AppDownload />
       <Deals />
       <OrderCTA />
    </main>
  );
}
