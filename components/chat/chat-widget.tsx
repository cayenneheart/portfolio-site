'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ChatWidgetProps {
  difyAppId: string;
}

function KaienAvatar({ isHovered, isOpen }: { isHovered: boolean; isOpen: boolean }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className="h-full w-full"
      style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))' }}
    >
      {/* Background circle with gradient */}
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="50%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
        <linearGradient id="faceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FEF3C7" />
          <stop offset="100%" stopColor="#FDE68A" />
        </linearGradient>
      </defs>

      {/* Main circle */}
      <circle cx="50" cy="50" r="48" fill="url(#bgGradient)" />

      {/* Face */}
      <circle cx="50" cy="52" r="35" fill="url(#faceGradient)" />

      {/* Blush */}
      <ellipse cx="30" cy="58" rx="8" ry="5" fill="#FECACA" opacity="0.6" />
      <ellipse cx="70" cy="58" rx="8" ry="5" fill="#FECACA" opacity="0.6" />

      {/* Eyes */}
      <g>
        {isOpen ? (
          // Closed eyes (happy)
          <>
            <path
              d="M 32 50 Q 38 45, 44 50"
              fill="none"
              stroke="#1F2937"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M 56 50 Q 62 45, 68 50"
              fill="none"
              stroke="#1F2937"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </>
        ) : (
          // Open eyes
          <>
            <ellipse cx="38" cy="48" rx="6" ry="7" fill="#1F2937" />
            <ellipse cx="62" cy="48" rx="6" ry="7" fill="#1F2937" />
            {/* Eye sparkles */}
            <circle cx="40" cy="46" r="2" fill="white" />
            <circle cx="64" cy="46" r="2" fill="white" />
          </>
        )}
      </g>

      {/* Mouth */}
      {isHovered || isOpen ? (
        // Happy mouth
        <path
          d="M 40 62 Q 50 72, 60 62"
          fill="none"
          stroke="#1F2937"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      ) : (
        // Normal smile
        <path
          d="M 42 62 Q 50 68, 58 62"
          fill="none"
          stroke="#1F2937"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      )}

      {/* Hair / Antenna */}
      <path
        d="M 50 17 Q 45 8, 55 12 Q 50 5, 58 10"
        fill="none"
        stroke="#8B5CF6"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Sparkle decorations */}
      <g className={isHovered ? 'animate-pulse' : ''}>
        <circle cx="82" cy="25" r="3" fill="#FCD34D" />
        <circle cx="18" cy="30" r="2" fill="#FCD34D" />
        <circle cx="85" cy="70" r="2" fill="#FCD34D" />
      </g>
    </svg>
  );
}

export function ChatWidget({ difyAppId }: ChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);

  useEffect(() => {
    // Show greeting after 3 seconds
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowGreeting(true);
        // Hide greeting after 5 seconds
        setTimeout(() => setShowGreeting(false), 5000);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="overflow-hidden rounded-2xl border border-purple-500/30 bg-background shadow-2xl"
            style={{
              width: 'min(380px, calc(100vw - 2rem))',
              height: 'min(550px, calc(100vh - 8rem))',
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-purple-500/20 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10">
                  <KaienAvatar isHovered={false} isOpen={true} />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-foreground">AI カイエン</span>
                    <Sparkles className="h-4 w-4 text-yellow-400" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    オンライン
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full hover:bg-purple-500/20"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">閉じる</span>
              </Button>
            </div>

            {/* Chat Content */}
            {difyAppId ? (
              <iframe
                src={`https://udify.app/chatbot/${difyAppId}`}
                className="h-[calc(100%-60px)] w-full border-none"
                allow="microphone"
              />
            ) : (
              <div className="flex h-[calc(100%-60px)] flex-col items-center justify-center gap-4 p-6 text-center">
                <div className="h-24 w-24">
                  <KaienAvatar isHovered={true} isOpen={false} />
                </div>
                <div>
                  <p className="text-lg font-medium">こんにちは!</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Dify App IDを設定すると、
                    <br />
                    AIカイエンとチャットできるようになります
                  </p>
                </div>
                <code className="rounded bg-muted px-3 py-1.5 text-xs">
                  NEXT_PUBLIC_DIFY_APP_ID
                </code>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Greeting Bubble */}
      <AnimatePresence>
        {showGreeting && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            className="relative mr-2 rounded-2xl rounded-br-sm bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2.5 text-sm text-white shadow-lg"
          >
            <span>こんにちは! 何かお手伝いできることはありますか?</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowGreeting(false);
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={
          !isOpen && !isHovered
            ? {
                y: [0, -5, 0],
              }
            : {}
        }
        transition={{
          y: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
        className={cn(
          'relative h-16 w-16 rounded-full p-0 shadow-xl transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2',
          isOpen ? 'shadow-purple-500/30' : 'shadow-purple-500/50 animate-pulse-glow'
        )}
        aria-label={isOpen ? 'チャットを閉じる' : 'AIカイエンとチャット'}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500"
            >
              <X className="h-7 w-7 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="avatar"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="h-full w-full"
            >
              <KaienAvatar isHovered={isHovered} isOpen={false} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Notification dot */}
        {!isOpen && (
          <span className="absolute -right-1 -top-1 flex h-4 w-4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-400 opacity-75" />
            <span className="relative inline-flex h-4 w-4 rounded-full bg-pink-500" />
          </span>
        )}
      </motion.button>
    </div>
  );
}
