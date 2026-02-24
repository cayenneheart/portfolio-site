'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Work } from '@/types';
import { cn } from '@/lib/utils';

interface WorkCardProps {
  work: Work;
  index?: number;
}

const categoryColors: Record<string, string> = {
  web: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  mobile: 'bg-green-500/20 text-green-400 border-green-500/30',
  design: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  business: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  community: 'bg-teal-500/20 text-teal-400 border-teal-500/30',
  event: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
  tool: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  other: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
};

const categoryLabels: Record<string, string> = {
  web: 'Web',
  mobile: 'Mobile',
  design: 'Design',
  business: 'Business',
  community: 'Community',
  event: 'Event',
  tool: 'Tool',
  other: 'Other',
};

export function WorkCard({ work, index = 0 }: WorkCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group h-full overflow-hidden border-0 bg-gradient-to-br from-card to-purple-500/5 shadow-lg transition-all hover:shadow-xl hover-lift">
        <Link href={`/works/${work.slug}`} className="block">
          <div className="relative aspect-video overflow-hidden bg-muted">
            {work.thumbnail ? (
              <Image
                src={work.thumbnail}
                alt={work.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-muted-foreground">
                <span className="text-4xl font-bold opacity-20">{work.title.charAt(0)}</span>
              </div>
            )}
            {/* Overlay on hover */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <motion.div
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1 }}
                className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black"
              >
                詳細を見る
                <ArrowUpRight className="h-4 w-4" />
              </motion.div>
            </div>
            {work.featured && (
              <Badge className="absolute left-2 top-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                Featured
              </Badge>
            )}
          </div>
        </Link>
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <Badge
              variant="outline"
              className={cn('text-xs', categoryColors[work.category])}
            >
              {categoryLabels[work.category]}
            </Badge>
            <span className="text-xs text-muted-foreground">
              {work.startDate} {work.endDate ? `- ${work.endDate}` : ''}
            </span>
          </div>
          <Link href={`/works/${work.slug}`} className="group/title">
            <h3 className="text-xl font-bold transition-colors group-hover/title:text-purple-400">
              {work.title}
            </h3>
          </Link>
        </CardHeader>
        <CardContent className="pb-2">
          <p className="line-clamp-2 text-sm text-muted-foreground leading-relaxed">
            {work.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {work.technologies.slice(0, 4).map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-xs border-border/50 hover:border-purple-500/50 transition-colors"
              >
                {tech}
              </Badge>
            ))}
            {work.technologies.length > 4 && (
              <Badge variant="outline" className="text-xs border-border/50">
                +{work.technologies.length - 4}
              </Badge>
            )}
          </div>
        </CardContent>
        <CardFooter className="gap-2 pt-2">
          {work.url && (
            <Button
              variant="outline"
              size="sm"
              className="border-purple-500/30 hover:border-purple-500 hover:bg-purple-500/10 hover:text-purple-400 transition-all"
              asChild
            >
              <a href={work.url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                Demo
              </a>
            </Button>
          )}
          {work.github && (
            <Button
              variant="outline"
              size="sm"
              className="border-border/50 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all"
              asChild
            >
              <a href={work.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-1.5 h-3.5 w-3.5" />
                Code
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
