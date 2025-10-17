import React, { useState } from 'react';
import { MessageCircle, Settings, User, ChevronDown, LogOut, CheckCircle } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

interface DashboardProps {
  userName: string;
  onStartChat: () => void;
  onNavigateToProfile: () => void;
  onNavigateToSettings: () => void;
  onLogout: () => void;
  darkMode: boolean;
  language: string;
  onLanguageChange: (language: string) => void; // Add this
}

export function Dashboard({ userName, onStartChat, onNavigateToProfile, onNavigateToSettings, onLogout, darkMode, language, onLanguageChange }: DashboardProps) {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // State for the popup
  const languages = ['English', 'हिंदी', 'বাংলা', 'தமிழ்', 'తెలుగు', 'ગુજરાતી', 'ಕನ್ನಡ', 'മലയാളം'];
  
  const appname = useTranslation('Sahayak', language);
  const welcomeText = useTranslation('Welcome', language);
  const assistantText = useTranslation('Your AI-powered government services assistant', language);
  const startConversationText = useTranslation('Start Conversation', language);
  const helpText = useTranslation('Get instant help with government services', language);
  const services = useTranslation('Quick Services', language);
  const appstatus = useTranslation('Check application status', language);
  const applysch = useTranslation('Apply for scheme', language);
  const nearoff = useTranslation('Find nearest office', language);
  const poptop = useTranslation('Popular Topics',language)
  const aadhservice = useTranslation('Aadhaar services',language)
  const pan = useTranslation('PAN card issues',language)
  const pass = useTranslation('Passport services',language)
  const act = useTranslation('Recent Activity',language)
  const acttxt = useTranslation('No Recent Activity',language)
  const help = useTranslation('Need Help Getting Started?',language)
  const start = useTranslation('Click the Start Conversation button above to begin chatting with our AI assistant.',language)
  const snow = useTranslation('Start Now',language)

  // This handler now updates the language and shows the popup
  const handleLanguageChange = (newLanguage: string) => {
    onLanguageChange(newLanguage);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000); // Hide popup after 2 seconds
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-sm border-b`}>
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{appname}</h1>
              
              {/* START: Add this section */}
            <div className="flex items-center space-x-4">
              <select
                value={language}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className={`px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${darkMode
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                  }`}
              >
                {languages.map((lang) => (
                  <option key={lang} value={lang}>{lang}</option>
                ))}
              </select>
              {/* END: Add this section */}

              <div className="relative">
                <button
                  onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                  className={`flex items-center space-x-2 rounded-lg px-3 py-2 transition-colors ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                    }`}
                >
                  <User className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                  <span className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{userName}</span>
                  <ChevronDown className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                </button>

                {/* Profile Dropdown */}
                {showProfileDropdown && (
                  <div className={`absolute right-0 mt-2 w-48 rounded-lg shadow-lg border z-50 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                    }`}>
                    <div className="py-1">
                      <button
                        onClick={() => {
                          setShowProfileDropdown(false);
                          onNavigateToProfile();
                        }}
                        className={`flex items-center space-x-3 w-full px-4 py-2 text-left transition-colors ${darkMode ? 'hover:bg-gray-700 text-white' : 'hover:bg-gray-50 text-gray-900'
                          }`}
                      >
                        <User className="w-4 h-4" />
                        <span>Profile</span>
                      </button>
                      <button
                        onClick={() => {
                          setShowProfileDropdown(false);
                          onNavigateToSettings();
                        }}
                        className={`flex items-center space-x-3 w-full px-4 py-2 text-left transition-colors ${darkMode ? 'hover:bg-gray-700 text-white' : 'hover:bg-gray-50 text-gray-900'
                          }`}
                      >
                        <Settings className="w-4 h-4" />
                        <span>Settings</span>
                      </button>
                      <hr className={`my-1 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`} />
                      <button
                        onClick={() => {
                          setShowProfileDropdown(false);
                          onLogout();
                        }}
                        className="flex items-center space-x-3 w-full px-4 py-2 text-left text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Welcome Section */}
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {welcomeText}, {userName}!
            </h2>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-8`}>
              {assistantText}
            </p>

            {/* Primary Chat Button */}
            <div
              onClick={onStartChat}
              className={`inline-flex items-center space-x-4 px-8 py-6 rounded-2xl cursor-pointer transition-all duration-200 transform hover:scale-105 ${darkMode
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg hover:shadow-xl'
                }`}
            >
              <MessageCircle className="w-8 h-8" />
              <div className="text-left">
                <h3 className="text-xl font-semibold">{startConversationText}</h3>
                <p className="text-sm opacity-90">{helpText}</p>
              </div>
            </div>
          </div>

          {/* Quick Actions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border p-6`}>
              <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{services}</h3>
              <div className="space-y-3">
                <button className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-50 text-gray-900'
                  }`}>
                  <span className="font-medium">{appstatus}</span>
                </button>
                <button className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-50 text-gray-900'
                  }`}>
                  <span className="font-medium">{applysch}</span>
                </button>
                <button className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-50 text-gray-900'
                  }`}>
                  <span className="font-medium">{nearoff}</span>
                </button>
              </div>
            </div>

            <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border p-6`}>
              <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{poptop}</h3>
              <div className="space-y-3">
                <button className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-50 text-gray-900'
                  }`}>
                  <span className="font-medium">{aadhservice}</span>
                </button>
                <button className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-50 text-gray-900'
                  }`}>
                  <span className="font-medium">{pan}</span>
                </button>
                <button className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-50 text-gray-900'
                  }`}>
                  <span className="font-medium">{pass}</span>
                </button>
              </div>
            </div>

            <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border p-6`}>
              <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{act}</h3>
              <div className="space-y-3">
                <div className={`px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>{acttxt}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Help Section */}
          <div className={`mt-8 text-center p-6 rounded-xl ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-blue-50 border-blue-200'} border`}>
            <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-blue-900'}`}>
              {help}
            </h3>
            <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-blue-700'}`}>
              {start}
            </p>
            <button
              onClick={onStartChat}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${darkMode
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
            >
              {snow}
            </button>
          </div>
        </div>

        {/* Click outside to close dropdown */}
        {showProfileDropdown && (
          <div
            className="fixed inset-0 z-40"
            onClick={() => setShowProfileDropdown(false)}
          />
        )}
      </div>
    </div>
      );
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-full flex items-center space-x-2 shadow-lg">
          <CheckCircle className="w-5 h-5 text-green-400" />
          <span>Language changed to {language}</span>
        </div>
}