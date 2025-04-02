import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About Change2Green</h1>
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                Change2Green stands at the forefront of sustainable textile innovation, specializing in the trading and manufacturing of recycled textile fibers and yarns. Our mission is to revolutionize the textile industry by providing eco-conscious alternatives that don't compromise on quality.
              </p>
              <p>
                Founded on the principles of sustainability and innovation, we've developed cutting-edge processes that transform post-consumer waste into high-quality textile materials. Our commitment to environmental stewardship drives every aspect of our operations, from sourcing to production.
              </p>
              <p>
                Through continuous research and development, we're constantly pushing the boundaries of what's possible in sustainable textile manufacturing. Our team of experts works tirelessly to create products that meet the highest standards of quality while maintaining our commitment to environmental responsibility.
              </p>
            </div>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Sustainable textile manufacturing"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;