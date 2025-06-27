'use client';

import { motion } from 'framer-motion';
import SpecialtyCard from "./SpecialtyCard";
import { HeartIcon, BrainIcon, BoneIcon, SkinIcon } from '../icons';
import { Specialty } from '@/types';

const specialties: Specialty[] = [
  {
    id: 'cardiology',
    name: 'Cardiology',
    icon: <HeartIcon className="w-12 h-12" />,
    link: '/specialties/cardiology'
  },
  {
    id: 'neurology',
    name: 'Neurology',
    icon: <BrainIcon className="w-12 h-12" />,
    link: '/specialties/neurology'
  },
  {
    id: 'orthopedic',
    name: 'Orthopedic',
    icon: <BoneIcon className="w-12 h-12" />,
    link: '/specialties/orthopedic'
  },
  {
    id: 'dermatology',
    name: 'Dermatology',
    icon: <SkinIcon className="w-12 h-12" />,
    link: '/specialties/dermatology'
  }
];

export default function SpecialtiesSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900">
            Browse by Top Specialties
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((specialty, index) => (
            <SpecialtyCard
              key={specialty.id}
              specialty={specialty}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}