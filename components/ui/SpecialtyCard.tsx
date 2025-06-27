'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Specialty } from '@/types';

interface SpecialtyCardProps {
  specialty: Specialty;
  index: number;
}

export default function SpecialtyCard({ specialty, index }: SpecialtyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Link href={specialty.link}>
        <div className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer group-hover:border-blue-300">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 text-blue-600 group-hover:text-blue-700 transition-colors duration-200 group-hover:scale-110 transform transition-transform">
              {specialty.icon}
            </div>
          </div>
          
          <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
            {specialty.name}
          </h3>
          
          <div className="text-blue-600 text-sm font-medium group-hover:text-blue-700 transition-colors duration-200 flex items-center justify-center">
            Find Doctor →
          </div>
        </div>
      </Link>
    </motion.div>
  );
}