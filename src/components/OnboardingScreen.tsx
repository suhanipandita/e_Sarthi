import React, { useState } from 'react';
import { ProgressBar } from './ProgressBar';
import { ChatBubble } from './ChatBubble';
import { NameInput } from './NameInput';
import { OccupationInput } from './OccupationInput';

interface OnboardingScreenProps {
  onComplete: (userData: { name: string; occupation: string }) => void;
}

export function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  const [name, setName] = useState('');
  const [occupation, setOccupation] = useState('');
  const [showNameInput, setShowNameInput] = useState(true);
  const [showOccupationInput, setShowOccupationInput] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleNameSubmit = () => {
    if (name.trim()) {
      setShowNameInput(false);
      // Show occupation input after name is submitted
      setTimeout(() => {
        setShowOccupationInput(true);
      }, 1000);
    }
  };

  const handleOccupationSubmit = () => {
    if (occupation.trim()) {
      setShowOccupationInput(false);
      setIsProcessing(true);
      // Simulate processing before completing onboarding
      setTimeout(() => {
        onComplete({ name: name.trim(), occupation: occupation.trim() });
      }, 1500);
    }
  };

  const getCurrentStep = () => {
    if (showNameInput) return 7;
    if (showOccupationInput) return 8;
    return 10;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-sm mx-auto">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="px-8 py-12">
            {/* Progress Bar */}
            <ProgressBar currentStep={getCurrentStep()} totalSteps={10} />

            {/* Chat Interface */}
            <div className="space-y-4 mb-8">
              <ChatBubble 
                message="Welcome! Let's get to know you so we can help you better."
                isBot={true}
              />
              
              {!showNameInput && name && (
                <ChatBubble 
                  message={`Nice to meet you, ${name}!`}
                  isBot={false}
                />
              )}
              
              {showOccupationInput && (
                <ChatBubble 
                  message="Great! Now, what is your occupation? This helps us provide more relevant services."
                  isBot={true}
                />
              )}
              
              {!showOccupationInput && !showNameInput && occupation && !isProcessing && (
                <ChatBubble 
                  message={occupation}
                  isBot={false}
                />
              )}
            </div>

            {/* Input Fields */}
            {showNameInput ? (
              <NameInput
                value={name}
                onChange={setName}
                onSubmit={handleNameSubmit}
              />
            ) : showOccupationInput ? (
              <OccupationInput
                value={occupation}
                onChange={setOccupation}
                onSubmit={handleOccupationSubmit}
              />
            ) : (
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-8 h-8 border-2 border-gray-900 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-gray-600">Setting up your profile...</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-xs text-gray-500">
          <p>Secure government communication platform</p>
        </div>
      </div>
    </div>
  );
}