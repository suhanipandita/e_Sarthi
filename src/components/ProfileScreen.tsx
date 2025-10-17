import React, { useState } from 'react';
import { ArrowLeft, User, Phone, Briefcase, MapPin, Calendar, Edit3, Save, X } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation'; // Import the hook

interface ProfileScreenProps {
  userName: string;
  userPhone: string;
  userOccupation: string;
  onBack: () => void;
  onUpdateProfile: (data: { name: string; occupation: string }) => void;
  darkMode: boolean;
  language: string; 
}

export function ProfileScreen({ userName, userPhone, userOccupation, onBack, onUpdateProfile, darkMode, language }: ProfileScreenProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(userName);
  const [editOccupation, setEditOccupation] = useState(userOccupation);

  const profileTitle = useTranslation('Profile', language);
  const personalInfoTitle = useTranslation('Personal Information', language);
  const phoneLabel = useTranslation('Phone Number', language);
  const occupationLabel = useTranslation('Occupation', language);
  const memberSinceLabel = useTranslation('Member Since', language);
  const textmem = useTranslation('January 2024',language)
  const locationLabel = useTranslation('Location', language);
  const locationtxt = useTranslation('India', language);
  const servicesUsedLabel = useTranslation('Services Used', language);
  const activeAppsLabel = useTranslation('Active Applications', language);
  const chatSessionsLabel = useTranslation('Chat Sessions', language);
    
  const handleSave = () => {
    onUpdateProfile({ name: editName, occupation: editOccupation });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditName(userName);
    setEditOccupation(userOccupation);
    setIsEditing(false);
  };

  const occupationOptions = [
    'Student',
    'Working Professional',
    'Unemployed',
    'Self-employed',
    'Retired',
    'Homemaker',
    'Other'
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-sm border-b`}>
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBack}
                className={`p-2 rounded-lg transition-colors ${
                  darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                }`}
              >
                <ArrowLeft className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
              </button>
              <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{profileTitle}</h1>
            </div>
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                  darkMode 
                    ? 'text-blue-400 hover:bg-blue-900/20' 
                    : 'text-blue-600 hover:bg-blue-50'
                }`}
              >
                <Edit3 className="w-4 h-4" />
                <span className="text-sm font-medium">Edit</span>
              </button>
            ) : (
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleCancel}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                    darkMode 
                      ? 'text-gray-400 hover:bg-gray-700' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <X className="w-4 h-4" />
                  <span className="text-sm font-medium">Cancel</span>
                </button>
                <button
                  onClick={handleSave}
                  className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Save className="w-4 h-4" />
                  <span className="text-sm font-medium">Save</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border p-8 mb-6`}>
          <div className="flex items-center space-x-6">
            <div className={`w-20 h-20 rounded-full flex items-center justify-center ${
              darkMode ? 'bg-blue-500' : 'bg-blue-600'
            }`}>
              <User className="w-10 h-10 text-white" />
            </div>
            <div className="flex-1">
              {!isEditing ? (
                <>
                  <h2 className={`text-2xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{userName}</h2>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{userOccupation}</p>
                </>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Full Name</label>
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Occupation</label>
                    <select
                      value={editOccupation}
                      onChange={(e) => setEditOccupation(e.target.value)}
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    >
                      {occupationOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border p-6`}>
          <h3 className={`text-lg font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{personalInfoTitle}</h3>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <Phone className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
              </div>
              <div>
                <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{phoneLabel}</p>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>+91 {userPhone}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <Briefcase className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
              </div>
              <div>
                <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{occupationLabel}</p>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{userOccupation}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <Calendar className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
              </div>
              <div>
                <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{memberSinceLabel}</p>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{textmem}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <MapPin className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
              </div>
              <div>
                <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{locationLabel}</p>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{locationtxt}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Account Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border p-6 text-center`}>
            <div className="text-2xl font-bold text-green-600 mb-1">12</div>
            <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{servicesUsedLabel}</div>
          </div>
          <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border p-6 text-center`}>
            <div className="text-2xl font-bold text-purple-600 mb-1">3</div>
            <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{activeAppsLabel}</div>
          </div>
          <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border p-6 text-center`}>
            <div className="text-2xl font-bold text-orange-600 mb-1">8</div>
            <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{chatSessionsLabel}</div>
          </div>
        </div>
      </div>
    </div>
  );
}