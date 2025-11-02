import React from 'react';
import { ArrowLeft, User, Mic, MicOff, Volume2 } from 'lucide-react';
import { useSpeechRecognitionHook } from '../hooks/useSpeechRecognition';
import { useTranslation } from '../hooks/useTranslation'; // Import the hook

interface ChatScreenProps {
  userName: string;
  onBack: () => void;
  language: string;
}

export function ChatScreen({ userName, onBack, language }: ChatScreenProps) {

    const mainchat = useTranslation('Main Chat', language);
    const eligible_txt = useTranslation('Check eligibilty', language);
    const apply_txt = useTranslation('Apply for scheme', language);
    const contact_txt = useTranslation('Contact Support', language);

  const {
    browserSupportsSpeechRecognition
  } = useSpeechRecognitionHook();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBack}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              <h1 className="text-xl font-bold text-gray-900">{mainchat}</h1>
            </div>
            <div className="flex items-center space-x-2">
              <User className="w-5 h-5 text-gray-600" />
              <span className="text-sm font-medium text-gray-900">{userName}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Container */}
      <div className="flex-1 flex overflow-hidden">
        <div className="w-full bg-white">
          <iframe
            src="https://cdn.botpress.cloud/webchat/v3.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/09/11/18/20250911184233-SPSNT4DV.json"
            className="w-full h-full border-0"
            title="e-Sarthi Chat Bot"
            allow="microphone"
          />
        </div>
      </div>


      {/* Quick Actions Footer */}
      <div className="bg-white border-t border-gray-200 p-4 flex-shrink-0">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors">
              {eligible_txt} 
            </button>
            <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors">
              {apply_txt} 
            </button>
            <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors">
              {contact_txt}
            </button>
            </div>
        </div>
      </div>
    </div>
  );
}