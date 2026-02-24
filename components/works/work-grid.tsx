'use client';

import { motion } from 'framer-motion';
import { WorkCard } from './work-card';
import { Work } from '@/types';

interface WorkGridProps {
  works: Work[];
}

export function WorkGrid({ works }: WorkGridProps) {
  return (
    <motion.div
      layout
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {works.map((work, index) => (
        <WorkCard key={work.id} work={work} index={index} />
      ))}
    </motion.div>
  );
}
