import React from 'react';
import { ArrowRight, Recycle, Globe, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-600 to-secondary-600 bg-center bg-cover" 
           style={{ backgroundImage: "url('/hero.png')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-heading mb-6">
            Weaving Innovation, Renewing Earth
          </h1>
          <p className="text-xl text-subtitle mb-8 max-w-2xl mx-auto">
            Leading the way in sustainable textile solutions with innovative recycled fibers and eco-conscious manufacturing.
          </p>
          <Link
  to="/products"
  className="inline-flex items-center px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 shadow-lg shadow-blue-400/40 border-0 transition duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 hover:scale-105 hover:shadow-2xl hover:from-green-500 hover:to-purple-600"
  style={{ boxShadow: '0 0 24px 4px rgba(59,130,246,0.4), 0 2px 8px 0 rgba(0,0,0,0.10)' }}
>
  Explore Our Products
  <ArrowRight className="ml-2 h-5 w-5" />
</Link>

        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Change2Green?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {/* Card 1: 100% Recycled */}
  <div className="p-8 rounded-xl shadow-lg border border-body-dark text-center text-white bg-gradient-to-br  from-accent-orange/50 via-accent-orange-80 to-accent-orange">
    <div className="inline-flex items-center justify-center p-3 bg-white/20 rounded-full mb-6">
      <Recycle className="h-8 w-8 text-white" />
    </div>
    <h3 className="text-xl font-semibold mb-4">100% Recycled</h3>
    <p className="text-white/90">Our products are made entirely from recycled materials, reducing waste and environmental impact.</p>
  </div>
  {/* Card 2: Global Impact */}
  <div className="p-8 rounded-xl shadow-lg border border-gray-200 text-center text-white bg-gradient-to-br from-heading via-heading/80 to-heading/70">
    <div className="inline-flex items-center justify-center p-3 bg-white/20 rounded-full mb-6">
      <Globe className="h-8 w-8 text-white" />
    </div>
    <h3 className="text-xl font-semibold mb-4">Global Impact</h3>
    <p className="text-white/90">Making a positive difference worldwide through sustainable manufacturing practices.</p>
  </div>
  {/* Card 3: Eco-Innovation */}
  <div className="p-8 rounded-xl shadow-lg border border-gray-200 text-center text-white bg-gradient-to-br  from-accent-green/50 via-accent-green to-accent-dark-green">
    <div className="inline-flex items-center justify-center p-3 bg-white/20 rounded-full mb-6">
      <Leaf className="h-8 w-8 text-white" />
    </div>
    <h3 className="text-xl font-semibold mb-4">Eco-Innovation</h3>
    <p className="text-white/90">Continuously developing new sustainable solutions for a greener future.</p>
  </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default Home;