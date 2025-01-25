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
    <header className="relative h-screen">
      <Background />
      <NavigationBar navItems={navItems} />
      <HeroSection />
    </header>
  );
}