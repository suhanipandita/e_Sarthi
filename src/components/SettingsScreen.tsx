import React, { useState } from 'react';
import { ArrowLeft, User, Bell, Shield, HelpCircle, LogOut, Smartphone, Globe, Moon } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation'; // Import the hook

interface SettingsScreenProps {
  userName: string;
  onBack: () => void;
  onLogout: () => void;
  darkMode: boolean;
  onToggleDarkMode: (enabled: boolean) => void;
  language: string;
}

export function SettingsScreen({ userName, onBack, onLogout, darkMode, onToggleDarkMode, language }: SettingsScreenProps) {
  const [notifications, setNotifications] = useState(true);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const suser = useTranslation('Sahayak User', language);
  const settingsTitle = useTranslation('Settings', language);
  const accountTitle = useTranslation('Account', language);
  const signOutText = useTranslation('Sign Out', language);
  const preferencesTitle = useTranslation('Preferences', language);
  const notificationsLabel = useTranslation('Notifications', language);
  const notificationsDesc = useTranslation('Receive updates and alerts', language);
  const darkModeLabel = useTranslation('Dark Mode', language);
  const darkModeDesc = useTranslation('Switch to dark theme', language);
  const securityTitle = useTranslation('Security & Privacy', language);
  const privacyLabel = useTranslation('Privacy Settings', language);
  const privacyDesc = useTranslation('Manage your data and privacy', language);
  const twoFactorLabel = useTranslation('Two-Factor Authentication', language);
  const twoFactorDesc = useTranslation('Add extra security to your account', language);
  const supportTitle = useTranslation('Support', language);
  const helpLabel = useTranslation('Help & Support', language);
  const helpDesc = useTranslation('Get help with using Sahayak', language);
  const logoutlabel = useTranslation('Sign Out', language);
  const logoutdesc = useTranslation('Are you sure you want to sign out of your account?', language);
  const cancelbutton = useTranslation('Cancel', language);


  const handleLogout = () => {
    setShowLogoutConfirm(false);
    onLogout();
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-sm border-b`}>
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={onBack}
              className={`p-2 rounded-lg transition-colors ${
                darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
              }`}
            >
              <ArrowLeft className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
            </button>
            <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{settingsTitle}</h1>
          </div>
        </div>
      </div>

      {/* Settings Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Account Section */}
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border mb-6`}>
          <div className={`p-6 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <h2 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{accountTitle}</h2>
          </div>
          <div className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                darkMode ? 'bg-blue-500' : 'bg-blue-600'
              }`}>
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{userName}</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{suser}</p>
              </div>
            </div>
            <button
              onClick={() => setShowLogoutConfirm(true)}
              className={`flex items-center space-x-3 w-full px-4 py-3 text-left text-red-600 rounded-lg transition-colors ${
                darkMode ? 'hover:bg-red-900/20' : 'hover:bg-red-50'
              }`}
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium">{signOutText}</span>
            </button>
          </div>
        </div>

        {/* Preferences Section */}
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border mb-6`}>
          <div className={`p-6 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <h2 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{preferencesTitle}</h2>
          </div>
          <div className="p-6 space-y-4">
            {/* Notifications */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Bell className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                <div>
                  <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{notificationsLabel}</p>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{notificationsDesc}</p>
                </div>
              </div>
              <button
                onClick={() => setNotifications(!notifications)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  notifications 
                    ? 'bg-blue-600' 
                    : darkMode ? 'bg-gray-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    notifications ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Dark Mode */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Moon className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                <div>
                  <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{darkModeLabel}</p>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{darkModeDesc}</p>
                </div>
              </div>
              <button
                onClick={() => onToggleDarkMode(!darkMode)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  darkMode 
                    ? 'bg-blue-600' 
                    : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    darkMode ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Security Section */}
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border mb-6`}>
          <div className={`p-6 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <h2 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{securityTitle}</h2>
          </div>
          <div className="p-6 space-y-4">
            <button className={`flex items-center space-x-3 w-full px-4 py-3 text-left rounded-lg transition-colors ${
              darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
            }`}>
              <Shield className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
              <div>
                <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{privacyLabel}</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{privacyDesc}</p>
              </div>
            </button>
            <button className={`flex items-center space-x-3 w-full px-4 py-3 text-left rounded-lg transition-colors ${
              darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
            }`}>
              <Smartphone className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
              <div>
                <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{twoFactorLabel}</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{twoFactorDesc}</p>
              </div>
            </button>
          </div>
        </div>

        {/* Support Section */}
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border`}>
          <div className={`p-6 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <h2 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{supportTitle}</h2>
          </div>
          <div className="p-6 space-y-4">
            <button className={`flex items-center space-x-3 w-full px-4 py-3 text-left rounded-lg transition-colors ${
              darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
            }`}>
              <HelpCircle className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
              <div>
                <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{helpLabel}</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{helpDesc}</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50`}>
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-xl max-w-sm w-full p-6`}>
            <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>{logoutlabel}</h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>{logoutdesc}</p>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className={`flex-1 px-4 py-2 rounded-lg transition-colors ${
                  darkMode 
                    ? 'text-gray-300 bg-gray-700 hover:bg-gray-600' 
                    : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {cancelbutton}
              </button>
              <button
                onClick={handleLogout}
                className="flex-1 px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
              >
                {signOutText}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}