"use client";

import { useState } from "react";
import { motion } from "motion/react";

interface GoalScreenProps {
  onNext: (goal: string) => void;
  onBack: () => void;
}

const times = ["5", "10", "15", "20", "25", "30"];
const hours = ["10", "11", "12", "01", "02"];
const minutes = ["00", "15", "30", "45"];
const periods = ["AM", "PM"];

const days = [
  { id: "su", label: "SU" },
  { id: "m", label: "M" },
  { id: "t", label: "T" },
  { id: "w", label: "W" },
  { id: "th", label: "TH" },
  { id: "f", label: "F" },
  { id: "s", label: "S" },
];

export function GoalScreen({ onNext, onBack }: GoalScreenProps) {
  const [selectedTime, setSelectedTime] = useState("11");
  const [selectedMinute, setSelectedMinute] = useState("30");
  const [selectedPeriod, setSelectedPeriod] = useState("AM");
  const [selectedDays, setSelectedDays] = useState<string[]>(["su", "m", "t"]);

  const toggleDay = (id: string) => {
    setSelectedDays(prev =>
      prev.includes(id) ? prev.filter(d => d !== id) : [...prev, id]
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
          What time would you
        </motion.h1>
        <motion.h1
          className="text-2xl font-bold text-[#3F414E] mb-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          like to meditate?
        </motion.h1>
        <motion.p
          className="text-[#A1A4B2] text-sm mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Any time you can choose but we recommend first thing in the morning.
        </motion.p>

        {/* Time picker */}
        <motion.div
          className="bg-[#F5F5F9] rounded-2xl p-6 mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.25 }}
        >
          <div className="flex justify-center items-center gap-2">
            <div className="flex flex-col items-center">
              {hours.map((h) => (
                <button
                  key={h}
                  onClick={() => setSelectedTime(h)}
                  className={`py-2 text-xl font-semibold transition-all ${
                    selectedTime === h ? "text-[#3F414E]" : "text-[#A1A4B2] text-sm"
                  }`}
                >
                  {h}
                </button>
              ))}
            </div>
            <span className="text-2xl font-bold text-[#3F414E]">:</span>
            <div className="flex flex-col items-center">
              {minutes.map((m) => (
                <button
                  key={m}
                  onClick={() => setSelectedMinute(m)}
                  className={`py-2 text-xl font-semibold transition-all ${
                    selectedMinute === m ? "text-[#3F414E]" : "text-[#A1A4B2] text-sm"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
            <div className="flex flex-col items-center ml-4">
              {periods.map((p) => (
                <button
                  key={p}
                  onClick={() => setSelectedPeriod(p)}
                  className={`py-2 px-3 text-sm font-semibold transition-all ${
                    selectedPeriod === p ? "text-[#3F414E]" : "text-[#A1A4B2]"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Day selection */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-lg font-bold text-[#3F414E] mb-2">Which day would you</h2>
          <h2 className="text-lg font-bold text-[#3F414E] mb-2">like to meditate?</h2>
          <p className="text-[#A1A4B2] text-sm mb-4">Everyday is best, but we recommend picking at least five.</p>

          <div className="flex justify-between gap-2">
            {days.map((day) => (
              <button
                key={day.id}
                onClick={() => toggleDay(day.id)}
                className={`w-10 h-10 rounded-full text-xs font-semibold transition-all ${
                  selectedDays.includes(day.id)
                    ? "bg-[#3F414E] text-white"
                    : "bg-[#F5F5F9] text-[#A1A4B2]"
                }`}
              >
                {day.label}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom buttons */}
      <motion.div
        className="px-6 pb-8 pt-6 space-y-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <button
          onClick={() => onNext(`${selectedTime}:${selectedMinute} ${selectedPeriod}`)}
          className="w-full py-4 bg-[#8E97FD] text-white rounded-full text-sm font-semibold tracking-wide hover:bg-[#7C85E3] transition-colors"
        >
          SAVE
        </button>
        <button
          onClick={() => onNext("skip")}
          className="w-full py-2 text-[#3F414E] text-sm font-medium"
        >
          NO THANKS
        </button>
      </motion.div>
    </motion.div>
  );
}
