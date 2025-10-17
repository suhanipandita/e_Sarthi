import { useState, useEffect } from 'react';
import { translateText } from '../services/translationService';

// A map to convert full language names to their two-letter codes
const languageCodeMap: { [key: string]: string } = {
  'English': 'en',
  'हिंदी': 'hi',
  'বাংলা': 'bn',
  'தமிழ்': 'ta',
  'తెలుగు': 'te',
  'ગુજરાતી': 'gu',
  'ಕನ್ನಡ': 'kn',
  'മലയാളം': 'ml',
};

export const useTranslation = (text: string, language: string) => {
  const [translatedText, setTranslatedText] = useState(text);

  useEffect(() => {
        console.log(`Translating "${text}" to language: ${language}`);

    // Find the two-letter code for the selected language
    const targetLang = languageCodeMap[language] || 'en';

    // We don't need to call the API if the selected language is English
    if (targetLang !== 'en') {
      translateText(text, targetLang).then(setTranslatedText);
    } else {
      // If it is English, just set the text to the original
      setTranslatedText(text);
    }
  }, [text, language]); // This effect re-runs whenever the text or language changes

  return translatedText;
};