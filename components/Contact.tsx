// app/components/Contact.tsx
"use client";
import { SocialIcons } from '@/components/SocialMedia/SocialMediaButtonsContact';
import { ContactForm } from '@/components/ContactComponents/ContactForm';
import { ContactInfoItem } from '@/components/ContactComponents/ContactInfoItem';
import { LocationIcon, PhoneIcon, EmailIcon } from '@/components/ContactComponents/icons';
import MapComponent from '@/components/ContactComponents/ContactMap'

const Contact = () => {
  return (
    <div className="text-center max-w-6xl mx-auto p-6 md:p-8 justify-center">
      <div className='mb-10'>
        <h1 className="text-3xl md:text-5xl text-gray-900 mb-4">Contact Us</h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Most calendars are designed for teams.
          <span className="hidden md:inline">
            <br />
            State is designed for freelancers
          </span>
        </p>
      </div>

      <div className="md:flex md:gap-12">
        {/* Mobile Content - Reordered */}
        <div className="md:hidden space-y-6">
          <div className="flex gap-4 justify-center">
            <SocialIcons />
          </div>
          
          <ContactInfoItem
            icon={<LocationIcon />}
            text="6386 Spring St undefined Anchorage, Georgia 12473 United States"
          />
          <ContactInfoItem
            icon={<PhoneIcon />}
            text="(843) 555-0130"
          />
          <ContactInfoItem
            icon={<EmailIcon />}
            text="willis.jennings@example.com"
          />
        </div>

        {/* Left Column (Form - Now comes after mobile content on mobile) */}
        <ContactForm />

        {/* Right Column (Desktop) */}
        <div className="md:w-1/2 md:block hidden">
          <div className="space-y-6">
            <div className="flex flex-row gap-6 mb-8">
              {[LocationIcon, PhoneIcon, EmailIcon].map((Icon, index) => (
                <div key={index} className="flex-1 flex flex-col items-center text-center">
                  <div className="mb-2 flex justify-center">
                    <Icon />
                  </div>
                  <p className="text-sm font-medium text-gray-700">
                    {[
                      "6386 Spring St undefined Anchorage, Georgia 12473 United States",
                      "(843) 555-0130",
                      "willis.jennings@example.com"
                    ][index]}
                  </p>
                </div>
              ))}
            </div>
            <div className="p-4">
              <MapComponent />
            </div>
          </div>
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};

export default Contact;