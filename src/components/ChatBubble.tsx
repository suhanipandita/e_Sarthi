import React from 'react';

interface ChatBubbleProps {
  message: string;
  isBot?: boolean;
}

export function ChatBubble({ message, isBot = true }: ChatBubbleProps) {
  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}>
      <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
        isBot 
          ? 'bg-gray-100 text-gray-900' 
          : 'bg-gray-900 text-white'
      }`}>
        <p className="text-sm leading-relaxed">{message}</p>
      </div>
    </div>
  );
}