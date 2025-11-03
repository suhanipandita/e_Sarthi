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
      className={`w-full py-4 px-6 text-base font-semibold rounded-xl transition-all duration-300 relative overflow-hidden group ${
        disabled || isLoading
          ? darkMode
            ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          : darkMode
            ? 'bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-500 hover:to-teal-500 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1'
            : 'bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-500 hover:to-teal-500 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1'
      }`}
    >
      {!disabled && !isLoading && (
        <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
      )}
      <span className="relative z-10">
        {isLoading ? (
          <div className="flex items-center justify-center space-x-2">
            <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
            <span>Authenticating...</span>
          </div>
        ) : (
          <div className="flex items-center justify-center space-x-2">
            <span>Continue</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        )}
      </span>
    </button>
  );
}