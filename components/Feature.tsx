// components/Features.tsx
'use client';
import FeatureHeader from '@/components/FeatureComponents/FeatureHeader';
import FeatureItem from '@/components/FeatureComponents/FeatureItem';

export default function Features() {
  const FEATURES_DATA = [
    {
      imageSrc: '/images/featureImages/ball_square.svg',
      title: 'OpenType features',
      subtitle: 'Variable fonts',
      description: 'Slate helps you see how many more days you need to work to reach your financial goal.'
    },
    {
      imageSrc: '/images/featureImages/pencil.svg',
      title: 'Design with real data',
      description: 'Slate helps you see how many more days you need to work to reach your financial goal.'
    },
    {
      imageSrc: '/images/featureImages/paint_brush.svg',
      title: 'Fastest way to',
      subtitle: 'Take action',
      description: 'Slate helps you see how many more days you need to work to reach your financial goal.'
    }
  ];

  return (
    <section className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <FeatureHeader
          title="Features"
          description={
            <>
              Most calendars are designed for teams.
              <span className="block md:inline">Slate is designed for freelancers</span>
            </>
          }
        />
        
        {/* Centered container with 50% width on desktop */}
        <div className="flex justify-center">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 w-full md:w-3/4 lg:w-1/2">
            {FEATURES_DATA.map((feature, index) => (
              <FeatureItem
                key={index}
                {...feature}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}