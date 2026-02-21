'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { skillCategories } from '@/data';
import { cn } from '@/lib/utils';

const levelColors = {
  beginner: 'bg-slate-500/20 text-slate-400 border-slate-500/30 hover:bg-slate-500/30',
  intermediate: 'bg-blue-500/20 text-blue-400 border-blue-500/30 hover:bg-blue-500/30',
  advanced: 'bg-purple-500/20 text-purple-400 border-purple-500/30 hover:bg-purple-500/30',
  expert: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/30',
};

const levelLabels = {
  beginner: '初級',
  intermediate: '中級',
  advanced: '上級',
  expert: 'エキスパート',
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
} as const;

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring' as const, stiffness: 300, damping: 20 },
  },
};

export function SkillSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className="py-12"
    >
      <h2 className="mb-8 text-3xl font-bold">
        <span className="gradient-text">Skills</span>
      </h2>
      <Tabs defaultValue={skillCategories[0].name} className="w-full">
        <TabsList className="mb-6 flex h-auto flex-wrap justify-start gap-2 bg-transparent p-0">
          {skillCategories.map((category) => (
            <TabsTrigger
              key={category.name}
              value={category.name}
              className="rounded-full border border-border px-4 py-2 data-[state=active]:border-purple-500 data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400 transition-all"
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {skillCategories.map((category) => (
          <TabsContent key={category.name} value={category.name}>
            <Card className="border-0 bg-gradient-to-br from-card to-purple-500/5 shadow-lg">
              <CardContent className="p-6 md:p-8">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-wrap gap-3"
                >
                  {category.skills.map((skill) => (
                    <motion.div key={skill.name} variants={skillVariants}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Badge
                            variant="outline"
                            className={cn(
                              'cursor-pointer px-4 py-2.5 text-sm font-medium transition-all hover:scale-105',
                              levelColors[skill.level]
                            )}
                          >
                            {skill.name}
                          </Badge>
                        </TooltipTrigger>
                        <TooltipContent className="bg-card border">
                          <p>レベル: {levelLabels[skill.level]}</p>
                        </TooltipContent>
                      </Tooltip>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
      <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
        <span className="font-medium">凡例:</span>
        {Object.entries(levelLabels).map(([level, label]) => (
          <div key={level} className="flex items-center gap-2">
            <span
              className={cn(
                'inline-block h-3 w-3 rounded-full',
                level === 'beginner' && 'bg-slate-500',
                level === 'intermediate' && 'bg-blue-500',
                level === 'advanced' && 'bg-purple-500',
                level === 'expert' && 'bg-emerald-500'
              )}
            />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
