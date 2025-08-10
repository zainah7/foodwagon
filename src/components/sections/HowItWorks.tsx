import Image from 'next/image';
import { steps } from '@/lib/how-it-works-data';

export default function HowItWorks() {
  return (
    <section className="py-16" style={{ background: 'linear-gradient(to bottom, #FFF9E6, #FFFEF9, #FFFFFF)' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#F65900] mb-4">How does it work</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative flex flex-col items-center">
              {/* Connection Line (not for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-chart-4 -z-10"></div>
              )}
              
              {/* Icon */}
              <div className="flex items-center justify-center mx-auto mb-6 w-24 h-24" style={{ filter: 'drop-shadow(0 8px 16px rgb(255 206 103 / 0.5))' }}>
                <Image src={step.icon} alt={step.title} width={80} height={80} className="object-contain w-20 h-20" />
              </div>
              
              {/* Content */}
              <h3 className="font-bold text-xl mb-3 text-gray-800">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
