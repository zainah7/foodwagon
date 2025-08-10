import { Button } from "../shared";
import { ChevronRight } from "lucide-react";

export default function OrderCTA() {
  return (
    <section
      className="py-20 bg-cover bg-center rounded-3xl"
      style={{ backgroundImage: "url('/assets/images/cta-two-bg.png')" }}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 leading-tight text-white max-w-md mx-auto">
          Are you ready to order with the best deals?
        </h2>
        <Button className="bg-[#F15E28] text-white font-bold py-4 px-5 rounded-md flex items-center gap-2 hover:bg-chart-5 transition-colors cursor-pointer w-fit mx-auto">
          Proceed to order
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
}
