// components/Features.tsx
'use client';
import FeatureHeader from '@/components/FeatureComponents/FeatureHeader';
import FeatureItem from '@/components/FeatureComponents/FeatureItem';
import FeatureVideo from '@/components/FeatureComponents/FeatureVideo';
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
      title: 'Fastest way to take action',
      subtitle: '',
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
        
        {/* Responsive order container */}
        <div className="flex flex-col">
          {/* FeatureVideo - appears first on mobile, last on desktop */}
          <div className="order-1 md:order-2 pt-5 pb-5 md:pt-20">
            <FeatureVideo videoUrl="https://www.youtube.com/watch?v=YUwl8gKGtqs"/>
          </div>
  
          {/* FeatureItems container - appears last on mobile, first on desktop */}
          <div className="order-2 md:order-1 md:pb-20">
            <div className="flex justify-center">
              <div className="grid md:grid-cols-3 gap-8 md:gap-12 w-full">
                {FEATURES_DATA.map((feature, index) => (
                  <FeatureItem
                    key={index}
                    {...feature}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}