'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { careerHistory } from '@/data';
import { cn } from '@/lib/utils';

function formatDate(dateString: string): string {
  const [year, month] = dateString.split('-');
  return `${year}年${parseInt(month, 10)}月`;
}

export function CareerTimeline() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className="py-12"
    >
      <h2 className="mb-8 text-3xl font-bold">
        <span className="gradient-text">Career</span>
      </h2>
      <div className="relative">
        {/* Timeline line with gradient */}
        <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-12">
          {careerHistory.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                'relative flex flex-col md:flex-row',
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              )}
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 300, delay: index * 0.1 + 0.2 }}
                className="absolute left-4 top-6 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-purple-500 bg-background md:left-1/2"
              >
                {item.current && (
                  <span className="absolute -inset-2 animate-ping rounded-full bg-purple-500/50" />
                )}
              </motion.div>

              {/* Content */}
              <div className="ml-12 w-full md:ml-0 md:w-[calc(50%-3rem)]">
                <Card
                  className={cn(
                    'border-0 bg-gradient-to-br from-card to-purple-500/5 shadow-lg transition-all hover:shadow-xl hover-lift',
                    item.current && 'ring-2 ring-purple-500/50'
                  )}
                >
                  <CardHeader className="pb-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-medium text-purple-400">
                        {formatDate(item.startDate)} -{' '}
                        {item.endDate ? formatDate(item.endDate) : '現在'}
                      </span>
                      {item.current && (
                        <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 text-xs">
                          現職
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <p className="text-muted-foreground font-medium">{item.company}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs border-border/50 hover:border-purple-500/50 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-[calc(50%-3rem)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
