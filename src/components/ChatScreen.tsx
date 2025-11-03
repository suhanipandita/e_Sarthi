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
    <div className="h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 flex flex-col relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <div className="bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBack}
                className="p-2 hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 rounded-xl transition-all duration-200"
              >
                <ArrowLeft className="w-5 h-5 text-gray-700" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-teal-600 flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z\" />\n                  </svg>\n                </div>\n                <h1 className="text-xl font-bold text-gray-900">{mainchat}</h1>
              </div>
            </div>
            <div className="flex items-center space-x-3 px-4 py-2 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-teal-600 flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-900">{userName}</span>
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
      <div className="bg-white/80 backdrop-blur-xl border-t border-gray-200/50 p-4 flex-shrink-0 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            <button className="group px-5 py-2.5 bg-gradient-to-r from-blue-50 to-teal-50 hover:from-blue-100 hover:to-teal-100 rounded-full text-sm font-semibold text-gray-700 transition-all duration-200 border border-blue-200/50 hover:border-blue-300 hover:shadow-md transform hover:-translate-y-0.5">
              <span className="flex items-center space-x-2">
                <span>{eligible_txt}</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
            <button className="group px-5 py-2.5 bg-gradient-to-r from-blue-50 to-teal-50 hover:from-blue-100 hover:to-teal-100 rounded-full text-sm font-semibold text-gray-700 transition-all duration-200 border border-blue-200/50 hover:border-blue-300 hover:shadow-md transform hover:-translate-y-0.5">
              <span className="flex items-center space-x-2">
                <span>{apply_txt}</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
            <button className="group px-5 py-2.5 bg-gradient-to-r from-blue-50 to-teal-50 hover:from-blue-100 hover:to-teal-100 rounded-full text-sm font-semibold text-gray-700 transition-all duration-200 border border-blue-200/50 hover:border-blue-300 hover:shadow-md transform hover:-translate-y-0.5">
              <span className="flex items-center space-x-2">
                <span>{contact_txt}</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}