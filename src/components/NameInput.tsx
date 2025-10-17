import React, { useState } from 'react';

interface NameInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

export function NameInput({ value, onChange, onSubmit }: NameInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && value.trim()) {
      onSubmit();
    }
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyPress={handleKeyPress}
          placeholder="What is your full name?"
          className={`w-full px-4 py-4 text-base bg-white border-2 rounded-2xl transition-all duration-200 placeholder-gray-400 focus:outline-none ${
            isFocused 
              ? 'border-gray-900 shadow-sm' 
              : 'border-gray-300 hover:border-gray-400'
          }`}
        />
      </div>
      
      <button
        onClick={onSubmit}
        disabled={!value.trim()}
        className={`w-full py-3 px-6 text-base font-semibold text-white rounded-xl transition-all duration-200 ${
          !value.trim()
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-gray-900 hover:bg-gray-800 active:bg-gray-700 hover:shadow-lg transform hover:-translate-y-0.5'
        }`}
      >
        Next
      </button>
    </div>
  );
}