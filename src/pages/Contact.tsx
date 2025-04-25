import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { isValidPhoneNumber } from 'libphonenumber-js';

interface FormData {
  name: string;
  phone: string;
  email: string;
  query: string;
}

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({ mode: 'onBlur', reValidateMode: 'onChange' });

  const onSubmit = async (data: FormData) => {
    // Simulate form submission
    console.log('Form submitted:', data);
    // In a real application, you would send this data to your backend
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Contact Us</h1>
          
          {isSubmitted && (
            <div className="mb-6 p-4 bg-green-100 text-green-700 rounded">
              Thank you for your message! We'll get back to you soon.
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register('name', { required: 'Name is required' })}
                placeholder="Your full name"
                className="mt-1 block w-full px-4 py-2 text-gray-900 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition duration-150"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                {...register('phone', { required: 'Phone number is required', validate: value => isValidPhoneNumber(value) || 'Invalid phone number' })}
                inputMode="tel"
                autoComplete="tel"
                placeholder="e.g. +1 5551234567"
                className="mt-1 block w-full px-4 py-2 text-gray-900 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition duration-150"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                inputMode="email"
                autoComplete="email"
                placeholder="you@example.com"
                className="mt-1 block w-full px-4 py-2 text-gray-900 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition duration-150"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="query" className="block text-sm font-medium text-gray-700">
                Query
              </label>
              <textarea
                id="query"
                rows={4}
                {...register('query', { required: 'Query is required' })}
                placeholder="Enter your message"
                className="mt-1 block w-full px-4 py-2 text-gray-900 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition duration-150"
              />
              {errors.query && (
                <p className="mt-1 text-sm text-red-600">{errors.query.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition duration-150"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;