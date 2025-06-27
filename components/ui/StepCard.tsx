'use client';

import { motion } from 'framer-motion';
import { Step } from '@/types';

interface StepCardProps {
  step: Step;
  index: number;
}

export default function StepCard({ step, index }: StepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="text-center group"
    >
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
          <div className="text-blue-600 transform group-hover:scale-110 transition-transform duration-200">
            {step.icon}
          </div>
        </div>
      </div>
      
      <div className="mb-4">
        <span className="text-sm font-semibold text-blue-600 mb-2 block">
          {step.id}. {step.title}
        </span>
        <h3 className="font-semibold text-gray-900 text-lg mb-2">
          {step.title}
        </h3>
      </div>
      
      <p className="text-gray-600 leading-relaxed">
        {step.description}
      </p>
    </motion.div>
  );
}