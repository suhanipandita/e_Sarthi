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
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-3">
        {occupationOptions.map((option) => (
          <button
            key={option}
            onClick={() => handleOptionSelect(option)}
            className={`w-full px-4 py-4 text-left text-base rounded-2xl border-2 transition-all duration-200 ${
              selectedOption === option
                ? 'border-gray-900 bg-gray-50 text-gray-900 shadow-sm'
                : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium">{option}</span>
              {selectedOption === option && (
                <div className="w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              )}
            </div>
          </button>
        ))}
      </div>
      
      <button
        onClick={handleSubmit}
        disabled={!selectedOption}
        className={`w-full py-3 px-6 text-base font-semibold text-white rounded-xl transition-all duration-200 ${
          !selectedOption
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-gray-900 hover:bg-gray-800 active:bg-gray-700 hover:shadow-lg transform hover:-translate-y-0.5'
        }`}
      >
        Next
      </button>
    </div>
  );
}