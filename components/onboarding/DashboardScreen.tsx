"use client";

import { motion } from "motion/react";

interface DashboardScreenProps {
  preferences: string[];
  goal: string;
}

const courses = [
  { id: 1, title: "Focus", duration: "10 MIN", color: "#AFDBC5" },
  { id: 2, title: "Happiness", duration: "5 MIN", color: "#FFCF86" },
];

const recommendations = [
  { id: 1, title: "Daily Thought", subtitle: "MEDITATION • 3-10 MIN", color: "#333242" },
];

export function DashboardScreen({ preferences, goal }: DashboardScreenProps) {
  return (
    <motion.div
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="bg-[#FFF9E5] px-6 pt-12 pb-8 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFECCC] rounded-full -translate-y-1/2 translate-x-1/2 opacity-60" />
        <div className="absolute top-20 right-8 w-16 h-16 bg-[#FFECCC] rounded-full opacity-40" />
        
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="relative z-10"
        >
          <h1 className="text-2xl font-bold text-[#3F414E] mb-1">
            Good Morning, Afsar
          </h1>
          <p className="text-[#A1A4B2] text-sm">We wish you have a good day</p>
        </motion.div>
      </div>

      {/* Quick actions */}
      <div className="px-6 -mt-4 relative z-10">
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-[#8E97FD] rounded-2xl p-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-20">
              <svg className="w-24 h-24" viewBox="0 0 100 100">
                <circle cx="80" cy="20" r="40" fill="white" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-1">Basics</h3>
            <p className="text-white/70 text-xs mb-3">COURSE</p>
            <button className="bg-white/20 text-white text-xs px-4 py-2 rounded-full font-medium">
              START
            </button>
          </div>

          <div className="bg-[#FFC97E] rounded-2xl p-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-20">
              <svg className="w-24 h-24" viewBox="0 0 100 100">
                <circle cx="80" cy="20" r="40" fill="white" />
              </svg>
            </div>
            <h3 className="text-[#3F414E] font-semibold mb-1">Relaxation</h3>
            <p className="text-[#3F414E]/60 text-xs mb-3">MUSIC</p>
            <button className="bg-[#3F414E] text-white text-xs px-4 py-2 rounded-full font-medium flex items-center gap-2">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
              PLAY
            </button>
          </div>
        </motion.div>
      </div>

      {/* Daily Thought */}
      <motion.div
        className="px-6 mt-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="bg-[#333242] rounded-2xl p-4 flex items-center justify-between">
          <div>
            <h3 className="text-white font-semibold">Daily Thought</h3>
            <p className="text-white/60 text-xs">MEDITATION • 3-10 MIN</p>
          </div>
          <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <svg className="w-4 h-4 text-[#3F414E] ml-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </button>
        </div>
      </motion.div>

      {/* Recommended */}
      <motion.div
        className="px-6 mt-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-xl font-bold text-[#3F414E] mb-4">Recommended for you</h2>
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              className="flex-shrink-0 w-40"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <div 
                className="h-28 rounded-2xl mb-3 relative overflow-hidden"
                style={{ backgroundColor: course.color }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/30" />
                </div>
              </div>
              <h3 className="text-[#3F414E] font-semibold text-sm">{course.title}</h3>
              <p className="text-[#A1A4B2] text-xs">{course.duration}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bottom navigation */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#F2F3F7] px-6 py-4"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div className="flex justify-around items-center">
          <button className="flex flex-col items-center gap-1">
            <svg className="w-6 h-6 text-[#8E97FD]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="text-xs text-[#8E97FD] font-medium">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <svg className="w-6 h-6 text-[#A1A4B2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            <span className="text-xs text-[#A1A4B2]">Sleep</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <svg className="w-6 h-6 text-[#A1A4B2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="text-xs text-[#A1A4B2]">Meditate</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <svg className="w-6 h-6 text-[#A1A4B2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
            </svg>
            <span className="text-xs text-[#A1A4B2]">Music</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <svg className="w-6 h-6 text-[#A1A4B2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-xs text-[#A1A4B2]">Afsar</span>
          </button>
        </div>
      </motion.div>

      {/* Spacer for bottom nav */}
      <div className="h-24" />
    </motion.div>
  );
}
