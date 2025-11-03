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
    <div className="space-y-5">
      <div className="relative group">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyPress={handleKeyPress}
          placeholder="What is your full name?"
          className={`w-full pl-12 pr-4 py-4 text-base bg-white border-2 rounded-2xl transition-all duration-300 placeholder-gray-400 focus:outline-none font-medium ${
            isFocused
              ? 'border-blue-500 shadow-lg shadow-blue-500/20'
              : 'border-gray-300 hover:border-gray-400'
          }`}
        />
      </div>

      <button
        onClick={onSubmit}
        disabled={!value.trim()}
        className={`group w-full py-4 px-6 text-base font-semibold rounded-2xl transition-all duration-300 relative overflow-hidden ${
          !value.trim()
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-500 hover:to-teal-500 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1'
        }`}
      >
        {!value.trim() ? null : (
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