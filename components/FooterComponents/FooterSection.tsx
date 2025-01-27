import React from 'react';

interface FooterSectionProps {
  title: string;
  names: string[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, names }) => {
  return (
    <div className="text-center md:text-left">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {names.map((name) => (
          <li key={name} className="text-sm opacity-75">
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;