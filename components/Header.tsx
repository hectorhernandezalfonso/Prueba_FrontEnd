// components/Header.tsx
'use client';

import { useState } from 'react';
import Background from './HeaderComponents/Background';
import NavigationBar from './HeaderComponents/Navbar';
import HeroSection from './HeaderComponents/Herosection';

export default function Header() {
  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Product', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <header className="relative h-screen flex flex-col">
      <Background />
      <NavigationBar navItems={navItems} />
      <div className="flex-1">
        <HeroSection />
      </div>
    </header>
  );
}