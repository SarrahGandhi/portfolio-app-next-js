"use client";

import { motion } from "motion/react";

interface CompletionScreenProps {
  preferences: string[];
  goal: string;
  onComplete: () => void;
}

export function CompletionScreen({ onComplete }: CompletionScreenProps) {
  return (
    <motion.div
      className="min-h-screen bg-[#03174C] flex flex-col relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Stars background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
            animate={{
              opacity: [0.3, 0.9, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-8">
        <motion.div
          className="relative mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <div className="w-24 h-24 rounded-full bg-[#8E97FD] flex items-center justify-center">
            <motion.svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              />
            </motion.svg>
          </div>
        </motion.div>

        <motion.h1
          className="text-3xl font-semibold text-white text-center mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          You&apos;re all set!
        </motion.h1>

        <motion.p
          className="text-[#EBEAEC] text-center text-sm leading-relaxed max-w-xs opacity-80"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Your personalized meditation journey is ready. Start exploring and find your inner peace.
        </motion.p>
      </div>

      {/* Bottom section */}
      <motion.div
        className="px-8 pb-12 relative z-10"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <button
          onClick={onComplete}
          className="w-full py-4 bg-[#8E97FD] text-white rounded-full text-sm font-semibold tracking-wide hover:bg-[#7C85E3] transition-colors"
        >
          GO TO HOME
        </button>
      </motion.div>
    </motion.div>
  );
}
