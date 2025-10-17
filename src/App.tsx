import React, { useState } from 'react';
import { PhoneInput } from './components/PhoneInput';
import { LoginButton } from './components/LoginButton';
import { ToggleSwitch } from './components/ToggleSwitch';
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
    return <ChatScreen userName={userData.name} onBack={handleBackToDashboard} />;
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
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} flex items-center justify-center p-4`}>
      <div className="w-full max-w-sm mx-auto">
        {/* Mobile Frame Effect */}
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-3xl shadow-xl border overflow-hidden`}>
          <div className="px-8 py-12">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                Welcome to
              </h1>
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Sahayak
              </h2>
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

            {/* Input Mode Toggle */}
            <ToggleSwitch
              isVoiceMode={isVoiceMode}
              onToggle={() => setIsVoiceMode(!isVoiceMode)}
              darkMode={darkMode}
            />
          </div>
        </div>

        {/* Footer */}
        <div className={`text-center mt-6 text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          <p>Secure government communication platform</p>
        </div>
      </div>
    </div>
  );
}

export default App;