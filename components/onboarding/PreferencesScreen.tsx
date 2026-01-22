"use client";

import { useState } from "react";
import { motion } from "motion/react";

interface PreferencesScreenProps {
  onNext: (preferences: string[]) => void;
  onBack: () => void;
}

const topics = [
  { id: "reduce-stress", label: "Reduce Stress", icon: "🧘" },
  { id: "improve-performance", label: "Improve Performance", icon: "📈" },
  { id: "increase-happiness", label: "Increase Happiness", icon: "😊" },
  { id: "reduce-anxiety", label: "Reduce Anxiety", icon: "🌿" },
  { id: "better-sleep", label: "Better Sleep", icon: "😴" },
  { id: "personal-growth", label: "Personal Growth", icon: "🌱" },
];

export function PreferencesScreen({ onNext, onBack }: PreferencesScreenProps) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleTopic = (id: string) => {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  return (
    <motion.div
      className="min-h-screen bg-white flex flex-col"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
    >
      {/* Header */}
      <div className="px-6 pt-6">
        <button
          onClick={onBack}
          className="w-10 h-10 rounded-full bg-[#F2F3F7] flex items-center justify-center"
        >
          <svg className="w-5 h-5 text-[#3F414E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 pt-8">
        <motion.h1
          className="text-2xl font-bold text-[#3F414E] mb-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          What Brings you
        </motion.h1>
        <motion.h1
          className="text-2xl font-bold text-[#3F414E] mb-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          to Silent Moon?
        </motion.h1>
        <motion.p
          className="text-[#A1A4B2] text-sm mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          choose a topic to focus on:
        </motion.p>

        <div className="grid grid-cols-2 gap-4">
          {topics.map((topic, index) => (
            <motion.button
              key={topic.id}
              onClick={() => toggleTopic(topic.id)}
              className={`relative rounded-2xl p-4 text-left transition-all overflow-hidden ${
                selected.includes(topic.id)
                  ? "bg-[#8E97FD]"
                  : "bg-[#AFDBC5]"
              } ${index === 1 ? "bg-[#FFCF86]" : ""} ${index === 2 ? "bg-[#6CB28E]" : ""} ${index === 3 ? "bg-[#FA6E5A]" : ""} ${index === 4 ? "bg-[#8E97FD]" : ""} ${index === 5 ? "bg-[#FFCF86]" : ""}`}
              style={{
                backgroundColor: selected.includes(topic.id) ? "#8E97FD" : 
                  index === 0 ? "#AFDBC5" :
                  index === 1 ? "#FFCF86" :
                  index === 2 ? "#6CB28E" :
                  index === 3 ? "#FA6E5A" :
                  index === 4 ? "#8E97FD" :
                  "#FFCF86"
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="h-20 flex items-end">
                <span className={`text-sm font-semibold ${index === 3 || index === 4 ? "text-white" : "text-[#3F414E]"}`}>
                  {topic.label}
                </span>
              </div>
              {selected.includes(topic.id) && (
                <motion.div
                  className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                >
                  <svg className="w-4 h-4 text-[#8E97FD]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </motion.div>
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Bottom button */}
      <motion.div
        className="px-6 pb-8 pt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <button
          onClick={() => onNext(selected)}
          disabled={selected.length === 0}
          className="w-full py-4 bg-[#8E97FD] text-white rounded-full text-sm font-semibold tracking-wide disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#7C85E3] transition-colors"
        >
          CONTINUE
        </button>
      </motion.div>
    </motion.div>
  );
}
