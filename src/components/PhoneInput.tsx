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
    <div className="space-y-2">
      <label className={`block text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>
        Phone Number
      </label>
      <div className="relative">
        <input
          type="tel"
          value={value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className={`w-full px-4 py-3 text-base border rounded-xl transition-all duration-200 focus:outline-none ${
            darkMode 
              ? `bg-gray-700 border-gray-600 text-white placeholder-gray-400 ${
                  isFocused ? 'border-gray-400 bg-gray-600' : 'hover:border-gray-500'
                }`
              : `bg-gray-50 border-gray-200 placeholder-gray-400 ${
                  isFocused ? 'border-gray-900 bg-white shadow-sm' : 'hover:border-gray-300'
                }`
          }`}
          maxLength={10}
        />
        {value.length > 0 && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <span className={`text-xs font-medium ${
              value.length === 10 
                ? 'text-green-600' 
                : darkMode ? 'text-gray-500' : 'text-gray-400'
            }`}>
              {value.length}/10
            </span>
          </div>
        )}
      </div>
    </div>
  );
}