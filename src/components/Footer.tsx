import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto flex justify-center">
        <img src="/logo.png" className="w-64 h-64"/>
      </div>
      <div>
        <p className="text-gray-400 text-center">
          Weaving Innovation, Renewing Earth.
        </p>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-800 text-center py-8">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Change2Green. All rights reserved.
          </p>
      </div>
    </footer>
  );
};

export default Footer;