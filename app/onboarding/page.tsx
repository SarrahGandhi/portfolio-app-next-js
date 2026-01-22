"use client";

import { useState } from "react";
import { AnimatePresence } from "motion/react";
import {
  WelcomeScreen,
  PreferencesScreen,
  GoalScreen,
  CompletionScreen,
  DashboardScreen,
  ProgressIndicator,
} from "@/components/onboarding";

type Step = "welcome" | "preferences" | "goal" | "completion" | "dashboard";

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState<Step>("welcome");
  const [preferences, setPreferences] = useState<string[]>([]);
  const [goal, setGoal] = useState<string>("");

  const steps: Step[] = ["welcome", "preferences", "goal", "completion"];
  const currentStepIndex = steps.indexOf(currentStep);

  const handlePreferencesNext = (selectedPreferences: string[]) => {
    setPreferences(selectedPreferences);
    setCurrentStep("goal");
  };

  const handleGoalNext = (selectedGoal: string) => {
    setGoal(selectedGoal);
    setCurrentStep("completion");
  };

  const handleComplete = () => {
    setCurrentStep("dashboard");
  };

  return (
    <div className="min-h-screen relative">
      {currentStep !== "welcome" && currentStep !== "dashboard" && (
        <ProgressIndicator
          currentStep={currentStepIndex}
          totalSteps={steps.length - 1}
        />
      )}

      <AnimatePresence mode="wait">
        {currentStep === "welcome" && (
          <WelcomeScreen
            key="welcome"
            onNext={() => setCurrentStep("preferences")}
          />
        )}

        {currentStep === "preferences" && (
          <PreferencesScreen
            key="preferences"
            onNext={handlePreferencesNext}
            onBack={() => setCurrentStep("welcome")}
          />
        )}

        {currentStep === "goal" && (
          <GoalScreen
            key="goal"
            onNext={handleGoalNext}
            onBack={() => setCurrentStep("preferences")}
          />
        )}

        {currentStep === "completion" && (
          <CompletionScreen
            key="completion"
            preferences={preferences}
            goal={goal}
            onComplete={handleComplete}
          />
        )}

        {currentStep === "dashboard" && (
          <DashboardScreen
            key="dashboard"
            preferences={preferences}
            goal={goal}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
