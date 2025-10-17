import React from 'react';

interface ToggleSwitchProps {
  isVoiceMode: boolean;
  onToggle: () => void;
  darkMode?: boolean;
}

export function ToggleSwitch({ isVoiceMode, onToggle, darkMode = false }: ToggleSwitchProps) {
  return (
    <div className="flex items-center justify-center space-x-4 mt-8">
      <div className="flex items-center space-x-3">
        <span className={`text-sm font-medium transition-colors ${
          isVoiceMode 
            ? darkMode ? 'text-white' : 'text-gray-900'
            : darkMode ? 'text-gray-400' : 'text-gray-500'
        }`}>
          Voice Input
        </span>
        
        <button
          onClick={onToggle}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            isVoiceMode 
              ? darkMode ? 'bg-blue-600 focus:ring-blue-500' : 'bg-gray-900 focus:ring-indigo-500'
              : darkMode ? 'bg-gray-600 focus:ring-blue-500' : 'bg-gray-300 focus:ring-indigo-500'
          } ${darkMode ? 'focus:ring-offset-gray-800' : 'focus:ring-offset-white'}`}
          role="switch"
          aria-checked={isVoiceMode}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              isVoiceMode ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
        
        <span className={`text-sm font-medium transition-colors ${
          !isVoiceMode 
            ? darkMode ? 'text-white' : 'text-gray-900'
            : darkMode ? 'text-gray-400' : 'text-gray-500'
        }`}>
          Text Input
        </span>
      </div>
    </div>
  );
}