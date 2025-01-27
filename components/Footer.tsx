import React from 'react';
import FooterSection from '@/components/FooterComponents/FooterSection';
import ContactInfo from '@/components/FooterComponents/ContactInfo';
import SocialIcons from '@/components/FooterComponents/SocialIcons';
import ContactItem from '@/components/FooterComponents/ContactItem';

const Footer = () => {
  const sections = [1, 2, 3];
  const names = [
    'Jennie Cooper',
    'Julie Henry',
    'Johnny Murphy',
    'Gregory McCoy',
    'Martin McKinney',
  ];

  return (
    <footer className="bg-[#252b42] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Footer Sections */}
          {sections.map((section) => (
            <FooterSection
              key={section}
              title="Annette Steward"
              names={names}
            />
          ))}
          
          {/* Contact & Social Column */}
          <div className="text-center md:text-left space-y-6 md:space-y-8">
            {/* Mobile: Centered Content */}
            <div className="md:hidden">
              <ContactInfo />
              <div className="mt-6 flex justify-center">
                <SocialIcons />
              </div>
            </div>

            {/* Desktop: Structured Rows with Icons */}
            <div className="hidden md:block space-y-4">
              <ContactItem
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                }
                text="7480 Mockingbird Hill undefined"
              />
              <ContactItem
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                }
                text="(239) 555-0108"
              />
              <div className="pt-4">
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;