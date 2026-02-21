'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { WorkCard } from './work-card';
import { Button } from '@/components/ui/button';
import { Work } from '@/types';
import { cn } from '@/lib/utils';

interface WorkGridProps {
  works: Work[];
}

const categories = [
  { value: 'all', label: 'すべて' },
  { value: 'web', label: 'Web' },
  { value: 'mobile', label: 'Mobile' },
  { value: 'design', label: 'Design' },
  { value: 'other', label: 'Other' },
];

export function WorkGrid({ works }: WorkGridProps) {
  const [filter, setFilter] = useState<string>('all');

  const filteredWorks =
    filter === 'all'
      ? works
      : works.filter((work) => work.category === filter);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 flex flex-wrap gap-2"
      >
        {categories.map((category) => (
          <Button
            key={category.value}
            variant="outline"
            size="sm"
            onClick={() => setFilter(category.value)}
            className={cn(
              'rounded-full border transition-all',
              filter === category.value
                ? 'border-purple-500 bg-purple-500/20 text-purple-400'
                : 'border-border hover:border-purple-500/50 hover:bg-purple-500/10'
            )}
          >
            {category.label}
          </Button>
        ))}
      </motion.div>

      <motion.div
        layout
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {filteredWorks.map((work, index) => (
          <WorkCard key={work.id} work={work} index={index} />
        ))}
      </motion.div>

      {filteredWorks.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-16 text-center"
        >
          <p className="text-lg text-muted-foreground">該当する実績がありません</p>
        </motion.div>
      )}
    </div>
  );
}
