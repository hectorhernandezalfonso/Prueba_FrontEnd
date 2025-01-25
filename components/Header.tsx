// components/Header.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Product', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <header className="relative h-screen">
      {/* Background Image with Clip Path */}
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

      {/* Inverse Triangle Shape */}
      <div className="absolute -bottom-px left-0 w-full z-20">
        <svg 
          viewBox="0 0 1440 172" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-32 md:h-48"
          preserveAspectRatio="none"
        >
          <path 
            d="M0 0H1440V172H0V0Z" 
            fill="white"
            className="fill-current text-white"
          />
          <path 
            d="M1440 172L720 0L0 172H1440Z" 
            fill="white"
            className="fill-current text-white"
          />
        </svg>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 bg-transparent">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                src="/images/logo_phone.png" 
                width={40}
                height={40}
                alt="Logo"
                className="rounded-full"
              />
            </div>

            {/* Desktop Menu (hidden on mobile) */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-white/10 transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none transition-colors"
                aria-label="Toggle menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu (collapsible) */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/50">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Updated to match Figma */}
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
    </header>
  );
}