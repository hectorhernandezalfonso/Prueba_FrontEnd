// components/Header/NavItem.tsx
interface NavItemProps {
    name: string;
    href: string;
    mobile?: boolean;
  }
  
  export default function NavItem({ name, href, mobile = false }: NavItemProps) {
    const className = mobile 
      ? "text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10 transition-colors"
      : "text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-white/10 transition-colors";
  
    return (
      <a href={href} className={className}>
        {name}
      </a>
    );
  }