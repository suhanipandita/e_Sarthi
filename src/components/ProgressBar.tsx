import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const percentage = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full max-w-md mx-auto mb-10">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold text-gray-600">Setup Progress</span>
        <span className="text-xs font-bold text-blue-600">{Math.round(percentage)}%</span>
      </div>
      <div className="bg-gray-200 rounded-full h-2.5 overflow-hidden shadow-inner">
        <div
          className="bg-gradient-to-r from-blue-600 to-teal-600 h-full transition-all duration-500 ease-out rounded-full shadow-lg"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}