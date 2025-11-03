import React, { useState } from 'react';
import { PhoneInput } from './components/PhoneInput';
import { LoginButton } from './components/LoginButton';
import { OnboardingScreen } from './components/OnboardingScreen';
import { Dashboard } from './components/Dashboard';
import { ChatScreen } from './components/ChatScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { SettingsScreen } from './components/SettingsScreen';

type AppState = 'login' | 'onboarding' | 'dashboard' | 'chat' | 'profile' | 'settings';

interface UserData {
  phoneNumber: string;
  name: string;
  occupation: string;
  isVoiceMode: boolean;
}

function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isVoiceMode, setIsVoiceMode] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [appState, setAppState] = useState<AppState>('login');
  const [userData, setUserData] = useState<UserData | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('English');

  const handleLogin = async () => {
    if (phoneNumber.length === 10) {
      setIsLoading(true);
      
      // Simulate login process
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsLoading(false);
      
      // Store initial user data and move to onboarding
      setUserData({
        phoneNumber,
        name: '',
        occupation: '',
        isVoiceMode,
      });
      setAppState('onboarding');
    }
  };

  const handleOnboardingComplete = (onboardingData: { name: string; occupation: string }) => {
    if (userData) {
      setUserData({
        ...userData,
        name: onboardingData.name,
        occupation: onboardingData.occupation
      });
    }
    setAppState('dashboard');
  };

  const handleStartChat = () => {
    setAppState('chat');
  };

  const handleBackToDashboard = () => {
    setAppState('dashboard');
  };


  const handleNavigateToProfile = () => {
    setAppState('profile');
  };

  const handleNavigateToSettings = () => {
    setAppState('settings');
  };

  const handleUpdateProfile = (profileData: { name: string; occupation: string }) => {
    if (userData) {
      setUserData({
        ...userData,
        name: profileData.name,
        occupation: profileData.occupation
      });
    }
  };

  const handleLogout = () => {
    setUserData(null);
    setPhoneNumber('');
    setAppState('login');
  };

  const handleToggleDarkMode = (enabled: boolean) => {
    setDarkMode(enabled);
  };

  const isLoginDisabled = phoneNumber.length !== 10;
  console.log(`App rendering: state is "${appState}", language is "${language}"`);
  // Render different screens based on app state
  if (appState === 'onboarding') {
    return <OnboardingScreen onComplete={handleOnboardingComplete} />;
  }

  if (appState === 'dashboard' && userData) {
    return (
      <Dashboard
        userName={userData.name} 
        onStartChat={handleStartChat}
        onNavigateToProfile={handleNavigateToProfile}
        onNavigateToSettings={handleNavigateToSettings}
        onLogout={handleLogout}
        darkMode={darkMode}
        language={language}
        onLanguageChange={setLanguage} // Add this line

      />
    );
  }

  if (appState === 'chat' && userData) {
    return <ChatScreen userName={userData.name} onBack={handleBackToDashboard} language={language} />;
  }

  if (appState === 'profile' && userData) {
    return (
      <ProfileScreen
        userName={userData.name}
        userPhone={userData.phoneNumber}
        userOccupation={userData.occupation}
        onBack={handleBackToDashboard}
        onUpdateProfile={handleUpdateProfile}
        darkMode={darkMode}
        language={language} // Add this line
      />
    );
  }

  if (appState === 'settings' && userData) {
    return (
      <SettingsScreen 
        userName={userData.name} 
        onBack={handleBackToDashboard} 
        onLogout={handleLogout}
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
        language={language} // Add this line

      />
    );
  }

  // Default login screen
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-teal-50'} flex items-center justify-center p-4 relative overflow-hidden`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 left-10 w-72 h-72 ${darkMode ? 'bg-blue-500/10' : 'bg-blue-200/30'} rounded-full blur-3xl`}></div>
        <div className={`absolute bottom-20 right-10 w-96 h-96 ${darkMode ? 'bg-teal-500/10' : 'bg-teal-200/30'} rounded-full blur-3xl`}></div>
      </div>

      <div className="w-full max-w-md mx-auto relative z-10">
        {/* Mobile Frame Effect */}
        <div className={`${darkMode ? 'bg-gray-800/90 border-gray-700/50 backdrop-blur-xl' : 'bg-white/90 border-white/50 backdrop-blur-xl'} rounded-3xl shadow-2xl border overflow-hidden transform transition-all hover:scale-[1.01] duration-300`}>
          <div className="px-8 py-12">
            {/* Header */}
            <div className="text-center mb-10">
              <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-xl ${darkMode ? 'bg-gradient-to-br from-blue-500 to-teal-500' : 'bg-gradient-to-br from-blue-600 to-teal-600'}`}>
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2 tracking-tight`}>
                e-Sarthi
              </h1>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Your AI Government Assistant</p>
            </div>

            {/* Phone Input */}
            <div className="mb-8">
              <PhoneInput
                value={phoneNumber}
                onChange={setPhoneNumber}
                placeholder="Enter your 10-digit number"
                darkMode={darkMode}
              />
            </div>


            {/* Login Button */}
            <div className="mb-8">
              <LoginButton
                onClick={handleLogin}
                disabled={isLoginDisabled}
                isLoading={isLoading}
                darkMode={darkMode}
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`text-center mt-8 text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
          <div className="flex items-center justify-center space-x-2 mb-2">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span>Secure & Trusted Platform</span>
          </div>
          <p className={darkMode ? 'text-gray-600' : 'text-gray-400'}>Government of India</p>
        </div>
      </div>
    </div>
  );
}

export default App;