import React from 'react';
import { ArrowRight, Recycle, Globe, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Empowering Change. Driving Sustainability.
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Leading the way in sustainable textile solutions with innovative recycled fibers and eco-conscious manufacturing.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50 transition duration-150"
          >
            Explore Our Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Change2Green?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center p-3 bg-primary-100 rounded-full mb-6">
                <Recycle className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">100% Recycled</h3>
              <p className="text-gray-600">Our products are made entirely from recycled materials, reducing waste and environmental impact.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center p-3 bg-primary-100 rounded-full mb-6">
                <Globe className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Global Impact</h3>
              <p className="text-gray-600">Making a positive difference worldwide through sustainable manufacturing practices.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center p-3 bg-primary-100 rounded-full mb-6">
                <Leaf className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Eco-Innovation</h3>
              <p className="text-gray-600">Continuously developing new sustainable solutions for a greener future.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;