import React from 'react';

interface LoginButtonProps {
  onClick: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  darkMode?: boolean;
}

export function LoginButton({ onClick, disabled, isLoading, darkMode = false }: LoginButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`w-full py-3 px-4 text-base font-semibold rounded-xl transition-all duration-200 ${
        disabled || isLoading
          ? darkMode 
            ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
            : 'bg-gray-400 text-white cursor-not-allowed'
          : darkMode
            ? 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white hover:shadow-lg transform hover:-translate-y-0.5'
            : 'bg-gray-900 hover:bg-gray-800 active:bg-gray-700 text-white hover:shadow-lg transform hover:-translate-y-0.5'
      }`}
    >
      {isLoading ? (
        <div className="flex items-center justify-center space-x-2">
          <div className={`w-4 h-4 border-2 border-t-transparent rounded-full animate-spin ${
            darkMode ? 'border-white' : 'border-white'
          }`}></div>
          <span>Logging in...</span>
        </div>
      ) : (
        'Login'
      )}
    </button>
  );
}