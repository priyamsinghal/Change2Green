import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-bck-dark shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="./logo.png" className="w-20 h-20"/>
            </Link>
            <Link to="/" className="text-subtitle hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link to="/about" className="text-subtitle hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link to="/products" className="text-subtitle hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                Products
              </Link>
              <Link to="/contact" className="text-subtitle hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
          </div>
          <div className="flex items-center">
            <div className="hidden md:flex space-x-8">
              
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;