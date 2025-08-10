import AppDownload from "@/sections/AppDownload";
import Deals from "@/sections/Deals";
import Discounts from "@/sections/Discounts";
import FeaturedRestaurants from "@/sections/FeaturedRestaurants";
import Hero from "@/sections/Hero";
import HowItWorks from "@/sections/HowItWorks";
import OrderCTA from "@/sections/OrderCTA";
import PopularItems from "@/sections/PopularItems";
import SearchByFood from "@/sections/SearchByFood";

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
