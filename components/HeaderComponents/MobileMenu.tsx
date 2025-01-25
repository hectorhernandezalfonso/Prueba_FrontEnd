// components/Header/MobileMenu.tsx
'use client';

import NavItem from './NavItem';

interface MobileMenuProps {
  isOpen: boolean;
  navItems: Array<{ name: string; href: string }>;
}

export default function MobileMenu({ isOpen, navItems }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-black/50 backdrop-blur-sm">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {navItems.map((item) => (
          <NavItem key={item.name} {...item} mobile />
        ))}
      </div>
    </div>
  );
}