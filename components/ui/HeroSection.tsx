'use client';

import { motion } from 'framer-motion';
import SearchForm from './SearchForm';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Find Trusted Care,{' '}
            <span className="text-blue-600 relative">
              Effortlessly
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-200 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              />
            </span>
            .
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <p className="text-lg text-gray-600 mb-2">
            Search for top-rated doctors and specialists in your area.
          </p>
          <p className="text-lg text-gray-600">
            Discover the quality of care you deserve.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <SearchForm />
        </motion.div>
      </div>
    </section>
  );
}