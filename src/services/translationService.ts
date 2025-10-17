import axios from 'axios';

const API_URL = 'http://localhost:3001/translate';

// This function takes a string of text and a target language code (e.g., 'hi' for Hindi)
// and asks our backend to translate it.
export const translateText = async (text: string, targetLang: string) => {
  try {
    const response = await axios.post(API_URL, { text, targetLang });
    // The actual translated text is nested inside the response data
    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error('Error translating text:', error);
    return text; // If translation fails, return the original text
  }
};