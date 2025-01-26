// components/FeatureItem.tsx
import React from 'react';
import FeatureImage from '@/components/FeatureComponents/FeatureImage';

interface FeatureItemProps {
  imageSrc: string;
  title: string;
  subtitle?: string;
  description: string;
}

export default function FeatureItem({ imageSrc, title, subtitle, description }: FeatureItemProps) {
  return (
    <div className="text-center p-6 md:p-8 h-full flex flex-col items-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Image Container */}
      <FeatureImage imageSrc={imageSrc} title={title} />

      {/* Text Content */}
      <div className="mb-4 flex flex-col items-center flex-1">
        {/* Title with word break */}
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 break-words max-w-[200px]">
          {title}
        </h3>

        {/* Optional Subtitle */}
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-600 mt-2 break-words max-w-[200px]">
            {subtitle}
          </p>
        )}
      </div>

      {/* Description with constrained width */}
      <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-[280px]">
        {description}
      </p>
    </div>
  );
}