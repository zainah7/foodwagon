import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'yellow';
  containerClassName?: string;
}

export function Section({ 
  title, 
  subtitle, 
  children, 
  className,
  background = 'white',
  containerClassName 
}: SectionProps) {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    yellow: 'bg-yellow-400',
  };

  return (
    <section className={cn(backgroundClasses[background], 'py-12', className)}>
      <div className={cn('container mx-auto px-4', containerClassName)}>
        {(title || subtitle) && (
          <div className="text-center mb-8">
            {title && (
              <h2 className="text-3xl font-bold text-gray-900 font-display mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
