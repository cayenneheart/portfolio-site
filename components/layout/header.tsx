'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';
import { Navigation } from './navigation';
import { MobileNav } from './mobile-nav';

export function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="sticky top-0 z-50 w-full border-b border-purple-500/10 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4">
        <Link href="/" className="group flex items-center gap-2">
          <motion.div
            whileHover={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-50 blur group-hover:opacity-75 transition-opacity" />
              <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-background">
                <Sparkles className="h-5 w-5 text-purple-400" />
              </div>
            </div>
            <span className="text-xl font-bold">
              <span className="gradient-text">Kaien</span>
            </span>
          </motion.div>
        </Link>
        <div className="flex items-center gap-4">
          <Navigation />
          <MobileNav />
        </div>
      </div>
    </motion.header>
  );
}
