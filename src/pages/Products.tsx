import React from 'react';

const Products = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Product Offerings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">1. Optical Bleach (Undyed) Counts</h3>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Count</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="px-4 py-2 text-sm text-gray-600">2s</td><td className="px-4 py-2 text-sm text-gray-600">Optical Bleach (undyed)</td></tr>
                <tr><td className="px-4 py-2 text-sm text-gray-600">6s</td><td className="px-4 py-2 text-sm text-gray-600">Optical Bleach (undyed)</td></tr>
                <tr><td className="px-4 py-2 text-sm text-gray-600">8s</td><td className="px-4 py-2 text-sm text-gray-600">Optical Bleach (undyed)</td></tr>
                <tr><td className="px-4 py-2 text-sm text-gray-600">10s</td><td className="px-4 py-2 text-sm text-gray-600">Optical Bleach (undyed)</td></tr>
                <tr><td className="px-4 py-2 text-sm text-gray-600">2/10s</td><td className="px-4 py-2 text-sm text-gray-600">Optical Bleach (undyed)</td></tr>
                <tr><td className="px-4 py-2 text-sm text-gray-600">14s</td><td className="px-4 py-2 text-sm text-gray-600">Optical Bleach (undyed)</td></tr>
                <tr><td className="px-4 py-2 text-sm text-gray-600">18s</td><td className="px-4 py-2 text-sm text-gray-600">Optical Bleach (undyed)</td></tr>
                <tr><td className="px-4 py-2 text-sm text-gray-600">2/18s</td><td className="px-4 py-2 text-sm text-gray-600">Optical Bleach (undyed)</td></tr>
                <tr><td className="px-4 py-2 text-sm text-gray-600">20s</td><td className="px-4 py-2 text-sm text-gray-600">Optical Bleach (undyed)</td></tr>
                <tr><td className="px-4 py-2 text-sm text-gray-600">26s</td><td className="px-4 py-2 text-sm text-gray-600">Optical Bleach (undyed)</td></tr>
                <tr><td className="px-4 py-2 text-sm text-gray-600">30s</td><td className="px-4 py-2 text-sm text-gray-600">Optical Bleach (undyed)</td></tr>
              </tbody>
            </table>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">2. 10s Coloured Counts</h3>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Color</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Count</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="px-4 py-2 text-sm text-gray-600">Pani / Mélange</td><td className="px-4 py-2 text-sm text-gray-600">10s (Pre-colored)</td></tr>
                <tr><td className="px-4 py-2 text-sm text-gray-600">Pink</td><td className="px-4 py-2 text-sm text-gray-600">10s (Pre-colored)</td></tr>
                <tr><td className="px-4 py-2 text-sm text-gray-600">Red</td><td className="px-4 py-2 text-sm text-gray-600">10s (Pre-colored)</td></tr>
                <tr><td className="px-4 py-2 text-sm text-gray-600">Black</td><td className="px-4 py-2 text-sm text-gray-600">10s (Pre-colored)</td></tr>
                <tr><td className="px-4 py-2 text-sm text-gray-600">Light Yellow</td><td className="px-4 py-2 text-sm text-gray-600">10s (Pre-colored)</td></tr>
              </tbody>
            </table>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">3. 20s Items</h3>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Color</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Count</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="px-4 py-2 text-sm text-gray-600">Black</td><td className="px-4 py-2 text-sm text-gray-600">20s (Pre-colored)</td></tr>
              </tbody>
            </table>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">4. 30s Items</h3>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Type</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Count</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="px-4 py-2 text-sm text-gray-600">PC (Poly-Cot Blend)</td><td className="px-4 py-2 text-sm text-gray-600">30s</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;