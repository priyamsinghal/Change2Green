import React from 'react';

const products = [
  {
    id: 1,
    title: 'Recycled Polyester Fiber',
    description: 'High-quality recycled polyester fiber made from post-consumer plastic bottles. Perfect for sustainable textile manufacturing.',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Sustainable Yarn',
    description: 'Eco-friendly yarn produced from recycled materials, offering superior quality and reduced environmental impact.',
    image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Eco Packaging',
    description: 'Biodegradable and recyclable packaging solutions designed to minimize waste and environmental impact.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

const Products = () => {
  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Our Products</h1>
          <p className="mt-4 text-xl text-gray-600">
            Discover our range of sustainable textile solutions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
              <div className="h-64 relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600">
                  {product.description}
                </p>
                <button className="mt-4 px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700 transition duration-150">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;