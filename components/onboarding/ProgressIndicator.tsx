"use client";

import { motion } from "motion/react";

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export function ProgressIndicator({ currentStep, totalSteps }: ProgressIndicatorProps) {
  return (
    <div className="absolute top-0 left-0 right-0 z-50 px-6 pt-6">
      <div className="flex items-center gap-2">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div key={i} className="flex-1 h-1 bg-[#E8E8E8] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#8E97FD] rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: i < currentStep ? "100%" : "0%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
