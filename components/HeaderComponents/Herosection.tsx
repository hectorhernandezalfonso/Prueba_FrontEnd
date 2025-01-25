// components/Header/HeroSection.tsx
export default function HeroSection() {
    return (
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            The best
            <br />
            products start
            <br />
            with Figma
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
            Most calendars are designed for teams.
          </p>
  
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg text-sm sm:text-base">
              Try For Free
            </button>
          </div>
        </div>
      </div>
    );
  }