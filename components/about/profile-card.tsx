'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, Twitter, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { profile } from '@/data';

const socialIcons = {
  github: Github,
  twitter: Twitter,
  linkedin: Linkedin,
  email: Mail,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
} as const;

export function ProfileCard() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Card className="overflow-hidden border-0 bg-gradient-to-br from-card via-card to-purple-500/5 shadow-xl">
        <CardContent className="p-6 md:p-10">
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
            <motion.div
              variants={itemVariants}
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-75 blur-sm animate-gradient-x" />
              <Avatar className="relative h-36 w-36 border-4 border-background shadow-2xl md:h-44 md:w-44">
                <AvatarImage src={profile.avatar} alt={profile.name} />
                <AvatarFallback className="text-5xl bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                  {profile.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <motion.div
                className="absolute -right-2 -top-2"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Sparkles className="h-6 w-6 text-yellow-400" />
              </motion.div>
            </motion.div>

            <div className="flex-1 text-center md:text-left">
              <motion.h1
                variants={itemVariants}
                className="text-4xl font-bold md:text-5xl"
              >
                <span className="gradient-text">{profile.name}</span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="mt-1 text-lg text-muted-foreground"
              >
                {profile.nameEn}
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="mt-3 text-xl font-medium text-purple-400"
              >
                {profile.title}
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="mt-2 flex items-center justify-center gap-1.5 text-muted-foreground md:justify-start"
              >
                <MapPin className="h-4 w-4" />
                <span>{profile.location}</span>
              </motion.div>
              <motion.p
                variants={itemVariants}
                className="mt-5 text-muted-foreground leading-relaxed text-lg whitespace-pre-line"
              >
                {profile.bio}
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="mt-8 flex items-center justify-center gap-3 md:justify-start"
              >
                {profile.socialLinks.map((link, index) => {
                  const Icon = socialIcons[link.platform];
                  return (
                    <motion.div
                      key={link.platform}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-11 w-11 rounded-full border-purple-500/30 hover:border-purple-500 hover:bg-purple-500/10 hover:text-purple-400 transition-all"
                        asChild
                      >
                        <Link
                          href={link.url}
                          target={link.platform !== 'email' ? '_blank' : undefined}
                          rel={link.platform !== 'email' ? 'noopener noreferrer' : undefined}
                          aria-label={link.label}
                        >
                          <Icon className="h-5 w-5" />
                        </Link>
                      </Button>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
