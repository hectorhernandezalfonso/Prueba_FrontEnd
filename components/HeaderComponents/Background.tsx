// components/Header/Background.tsx
'use client';

import Image from 'next/image';

export default function Background() {
  return (
    <div className="absolute inset-0 z-0 clip-path-inverse-triangle">
      <Image
        src="/images/hero-bg.jpeg"
        alt="Background"
        fill
        priority
        className="opacity-90 object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
}