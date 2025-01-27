import React from 'react';

interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default ContactItem;