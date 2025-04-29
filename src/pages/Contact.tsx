// src/pages/Contact.tsx
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="p-8 text-gray-800">
      <h1 className="text-3xl font-bold text-[#83E213] mb-4">Contact Us</h1>
      <p>
        Have questions or need assistance? Reach out to us at:
      </p>
      <ul className="list-disc list-inside mt-2">
        <li>Email: support@troyadispensary.com</li>
        <li>Phone: (123) 456-7890</li>
        <li>Address: 123 Green Lane, Izmir, Türkiye</li>
      </ul>
    </div>
  );
};

export default Contact;
