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
    <div className="text-center p-6 md:p-8 h-full flex flex-col items-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 md:w-full"> {/* Added md:w-full */}

      <FeatureImage imageSrc={imageSrc} title={title} />

      <div className="mb-4 flex flex-col items-center flex-1">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 break-words md:max-w-[300px]"> {/* Increased max-w */}
          {title}
        </h3>

        {subtitle && (
          <p className="text-xl md:text-2xl font-bold text-gray-900 break-words md:max-w-[300px]"> {/* Increased max-w */}
            {subtitle}
          </p>
        )}
      </div>

      <p className="text-base md:text-lg text-gray-500 leading-relaxed md:max-w-[400px] w-full"> {/* Increased max-w */}
        {description}
      </p>
    </div>
  );
}