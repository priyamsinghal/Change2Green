import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-bck-dark text-subtitle">
      <div className="max-w-7xl mx-auto flex justify-center">
        <img src="/logo.png" className="w-64 h-64"/>
      </div>
      <div>
        <p className="text-subtitle text-center">
          Weaving Innovation, Renewing Earth.
        </p>
      </div>
      <div className="mt-8 pt-2 border-t border-subtitle/20 text-center">
          <p className="text-body-dark">
            © {new Date().getFullYear()} Change2Green. All rights reserved.
          </p>
      </div>
    </footer>
  );
};

export default Footer;