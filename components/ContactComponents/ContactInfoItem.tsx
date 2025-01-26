// components/Contact/ContactInfoItem.tsx
import { ReactNode } from 'react';

export const ContactInfoItem = ({ icon, text }: { icon: ReactNode; text: string }) => (
  <div className="flex items-center gap-4justify-center">
    <div className="text-gray-500">{icon}</div>
    <span className="text-gray-600">{text}</span>
  </div>
);