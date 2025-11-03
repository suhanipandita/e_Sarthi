import React, { useState } from 'react';

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  darkMode?: boolean;
}

export function PhoneInput({ value, onChange, placeholder, darkMode = false }: PhoneInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    // Allow only digits and limit to 10 characters
    const digitsOnly = input.replace(/\D/g, '').slice(0, 10);
    onChange(digitsOnly);
  };

  return (
    <div className="space-y-3">
      <label className={`block text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        Phone Number
      </label>
      <div className="relative group">
        <div className={`absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="font-medium">+91</span>
        </div>
        <input
          type="tel"
          value={value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className={`w-full pl-24 pr-16 py-4 text-base border-2 rounded-xl transition-all duration-300 focus:outline-none font-medium ${
            darkMode
              ? `bg-gray-700/50 border-gray-600 text-white placeholder-gray-500 ${
                  isFocused ? 'border-blue-500 bg-gray-700 shadow-lg shadow-blue-500/20' : 'hover:border-gray-500'
                }`
              : `bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 ${
                  isFocused ? 'border-blue-500 bg-white shadow-lg shadow-blue-500/20' : 'hover:border-gray-300'
                }`
          }`}
          maxLength={10}
        />
        {value.length > 0 && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <div className={`flex items-center space-x-2 px-3 py-1 rounded-full ${
              value.length === 10
                ? 'bg-green-100 text-green-700'
                : darkMode ? 'bg-gray-600 text-gray-400' : 'bg-gray-200 text-gray-600'
            }`}>
              {value.length === 10 && (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              )}
              <span className="text-xs font-bold">{value.length}/10</span>
            </div>
          </div>
        )}
      </div>
      {value.length > 0 && value.length < 10 && (
        <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} flex items-center space-x-1`}>
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <span>Enter {10 - value.length} more digit{10 - value.length !== 1 ? 's' : ''}</span>
        </p>
      )}
    </div>
  );
}