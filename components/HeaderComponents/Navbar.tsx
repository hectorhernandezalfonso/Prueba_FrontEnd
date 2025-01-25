// components/Header/NavigationBar.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import NavItem from './NavItem';
import MobileMenu from './MobileMenu';
import SocialButtons from '../SocialMedia/SocialMediaButtons';

interface NavigationBarProps {
  navItems: Array<{ name: string; href: string }>;
}

export default function NavigationBar({ navItems }: NavigationBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative z-10 bg-transparent">
      {/* Main container with 80% width on desktop */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full md:w-4/5">
        <div className="flex h-16 items-center justify-between">
          {/* Desktop Menu Items (Left) */}
          <div className="hidden md:flex flex-1 items-center">
            <div className="flex space-x-4">
              {navItems.map((item) => (
                <NavItem key={item.name} {...item} />
              ))}
            </div>
          </div>

          {/* Logo - Centered within 80% container */}
          <div className="flex-shrink-0 mx-4"> {/* Added horizontal margin */}
            <div className="w-[281px] h-[54px] relative">
              <Image
                src="/images/logo_phone.png"
                fill
                alt="Logo"
                className="object-contain"
              />
            </div>
          </div>

          {/* Social Buttons (Right) */}
          <div className="hidden md:flex flex-1 items-center justify-end">
            <SocialButtons />
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

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} navItems={navItems} />
    </nav>
  );
}