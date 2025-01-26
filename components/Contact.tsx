// app/components/Contact.tsx
"use client";
import { SocialIcons } from '@/components/SocialMedia/SocialMediaButtonsContact';
import { ContactForm } from '@/components/ContactComponents/ContactForm';
import { ContactInfoItem } from '@/components/ContactComponents/ContactInfoItem';
import { LocationIcon, PhoneIcon, EmailIcon } from '@/components/ContactComponents/icons';
import MapComponent from '@/components/ContactComponents/ContactMap'
const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 md:p-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

      <p className="mb-6 text-gray-600">
        Most calendars are designed for teams.
        <span className="hidden md:inline">
          <br />
          State is designed for freelancers
        </span>
      </p>

      <div className="md:flex md:gap-12">
        {/* Left Column */}
        <ContactForm />
        

        {/* Right Column */}
        <div className="md:w-1/2 md:block hidden">
          <div className="space-y-6">
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
            <div className="p-4">
            <MapComponent />
          </div>
          </div>
          <SocialIcons />
        </div>

        {/* Mobile Contact Info */}
        <div className="md:hidden mt-8 space-y-6">
          <div className="flex gap-4 justify-center mb-8">
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
      </div>
    </div>
  );
};

export default Contact;