export default function HeroSection() {
  return (
    <div className="relative z-10 h-full flex items-start pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-8">
      <h1 className="text-5xl md:text-7xl font-normal md:font-bold text-white mb-10 leading-tight">
        The best{'\u00A0'}
        <br className="md:hidden" />
        products {/* Changed from regular space to non-breaking space */}
        <br className="hidden md:inline" />
        start{'\u00A0'}
        <br className="md:hidden" />
        with Figma
      </h1>

        <p className="text-2xl md:text-3xl text-white/90 mb-14 max-w-2xl mx-auto">
          Most calendars are designed for teams.
          <span className="hidden md:inline"> Slate is designed for freelancers.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
        <button className="bg-[#2091f9] text-white px-10 py-5 md:px-16 rounded-full font-semibold hover:bg-[#1877c6] transition-colors shadow-lg text-lg sm:text-xl w-fit mx-auto md:mx-0">
          Try For Free
        </button>
        </div>
      </div>
    </div>
  );
}