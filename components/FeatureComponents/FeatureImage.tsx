// components/FeatureImage.tsx
'use client';
import Image from 'next/image';

interface FeatureImageProps {
  imageSrc: string;
  title: string;
}

export default function FeatureImage({ imageSrc, title }: FeatureImageProps) {
  return (
    <div className="mb-6 flex justify-center"> {/* Removed md:justify-start */}
      <div className="relative w-16 h-16 md:w-20 md:h-20">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}