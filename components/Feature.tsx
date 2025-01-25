// components/Feature.tsx
'use client';

interface FeatureItem {
  title: string;
  subtitle: string;
  description: string;
}

interface FeaturesProps {
  features: FeatureItem[];
}

export default function Features({ features }: FeaturesProps) {
  return (
    <section className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Features
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Most calendars are designed for teams. 
            <span className="block md:inline">Slate is designed for freelancers</span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center md:text-left">
              {/* Title & Subtitle */}
              <div className="mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-lg md:text-xl text-gray-600 mt-2">
                  {feature.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-base md:text-lg text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}