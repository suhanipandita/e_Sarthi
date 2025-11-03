import React, { useState } from 'react';

interface OccupationInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

const occupationOptions = [
  'Student',
  'Working Professional',
  'Unemployed',
  'Self-employed',
  'Retired',
  'Homemaker',
  'Other'
];

export function OccupationInput({ value, onChange, onSubmit }: OccupationInputProps) {
  const [selectedOption, setSelectedOption] = useState(value);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    onChange(option);
  };

  const handleSubmit = () => {
    if (selectedOption) {
      onSubmit();
    }
  };

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-3 max-h-80 overflow-y-auto pr-2 custom-scrollbar">
        {occupationOptions.map((option) => (
          <button
            key={option}
            onClick={() => handleOptionSelect(option)}
            className={`group w-full px-5 py-4 text-left text-base rounded-xl border-2 transition-all duration-300 ${
              selectedOption === option
                ? 'border-blue-500 bg-gradient-to-r from-blue-50 to-teal-50 text-gray-900 shadow-lg'
                : 'border-gray-300 bg-white text-gray-700 hover:border-blue-300 hover:bg-gray-50 hover:shadow-md'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold">{option}</span>
              {selectedOption === option ? (
                <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              ) : (
                <div className="w-6 h-6 border-2 border-gray-300 rounded-full group-hover:border-blue-400 transition-colors"></div>
              )}
            </div>
          </button>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        disabled={!selectedOption}
        className={`group w-full py-4 px-6 text-base font-semibold rounded-2xl transition-all duration-300 relative overflow-hidden ${
          !selectedOption
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-500 hover:to-teal-500 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1'
        }`}
      >
        {selectedOption && (
          <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        )}
        <span className="relative z-10 flex items-center justify-center space-x-2">
          <span>Continue</span>
          <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </span>
      </button>
    </div>
  );
}