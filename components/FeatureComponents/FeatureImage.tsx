// components/FeatureImage.tsx
'use client';
import Image from 'next/image';

interface FeatureImageProps {
  imageSrc: string;
  title: string;
}

export default function FeatureImage({ imageSrc, title }: FeatureImageProps) {
  return (
    <div className="mb-6 flex justify-center">
      {/* Further reduced size */}
      <div className="relative w-10 h-10 md:w-14 md:h-14"> {/* Changed from w-12/md:w-16 */}
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