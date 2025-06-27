'use client';

import { motion } from 'framer-motion';
import StepCard from './StepCard';
import { SearchIcon, CompareIcon, ConnectIcon } from '../icons';
import { Step } from '@/types';

const steps: Step[] = [
  {
    id: 1,
    title: 'Search',
    description: 'Enter your medical need and location.',
    icon: <SearchIcon className="w-8 h-8" />
  },
  {
    id: 2,
    title: 'Compare',
    description: 'Review profiles, qualifications, and reviews.',
    icon: <CompareIcon className="w-8 h-8" />
  },
  {
    id: 3,
    title: 'Connect',
    description: 'Contact or book with your chosen doctor.',
    icon: <ConnectIcon className="w-8 h-8" />
  }
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900">
            How California Best Doc Works
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <StepCard key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}