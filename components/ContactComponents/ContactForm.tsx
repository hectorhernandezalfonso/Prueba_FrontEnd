// components/Contact/ContactForm.tsx
"use client";
import { useState } from 'react';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="md:w-1/2 bg-white p-6 rounded-xl shadow-lg w-full max-w-md border border-gray-100">
      <form className="space-y-4 mx-auto text-gray-900 font-bold">
        <h1 className='p-6 text-2xl text-center'>Contact Us</h1>
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-600">Your Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-600">Your Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-600">Your Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all h-32"
          />
        </div>
        
        <button
          type="submit"
          className="w-1/2 bg-[#2091f9] text-white py-3 px-4 rounded-full hover:bg-[#1877c9] transition-colors shadow-md self-start"
        >
          Send
        </button>
      </form>
    </div>
  );
};