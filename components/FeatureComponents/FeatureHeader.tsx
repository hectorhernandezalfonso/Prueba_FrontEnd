// components/FeatureHeader.tsx
import React from 'react';

interface FeatureHeaderProps {
  title: string;
  description: React.ReactNode;
}

export default function FeatureHeader({ title, description }: FeatureHeaderProps) {
  return (
    <div className="text-center mb-12 md:mb-20">
      <h2 className="text-3xl md:text-5xl text-gray-900 mb-4">
        {title}
      </h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
}