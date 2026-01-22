"use client";

import { motion } from "motion/react";

interface WelcomeScreenProps {
  onNext: () => void;
}

export function WelcomeScreen({ onNext }: WelcomeScreenProps) {
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
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 60}%`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Moon illustration */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-8">
        <motion.div
          className="relative mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#E6E7F2] to-[#8E97FD] relative">
            {/* Moon face */}
            <div className="absolute top-12 left-8 w-3 h-3 bg-[#03174C] rounded-full" />
            <div className="absolute top-12 right-10 w-3 h-3 bg-[#03174C] rounded-full" />
            <div className="absolute bottom-14 left-1/2 -translate-x-1/2 w-8 h-4 border-b-2 border-[#03174C] rounded-full" />
          </div>
          {/* Clouds */}
          <div className="absolute -bottom-4 -left-8 w-24 h-12 bg-[#1F265E] rounded-full opacity-60" />
          <div className="absolute -bottom-2 -right-6 w-20 h-10 bg-[#1F265E] rounded-full opacity-50" />
        </motion.div>

        <motion.h1
          className="text-3xl font-semibold text-white text-center mb-3"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Welcome to Sleep
        </motion.h1>

        <motion.p
          className="text-[#EBEAEC] text-center text-sm leading-relaxed max-w-xs opacity-80"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Explore the new king of sleep. It uses sound and visualization to create the perfect conditions for refreshing sleep.
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
          onClick={onNext}
          className="w-full py-4 bg-[#8E97FD] text-white rounded-full text-sm font-semibold tracking-wide hover:bg-[#7C85E3] transition-colors"
        >
          GET STARTED
        </button>
      </motion.div>
    </motion.div>
  );
}
