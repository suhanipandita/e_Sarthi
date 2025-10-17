require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

app.post('/translate', async (req, res) => {
  const { text, targetLang } = req.body;
  const apiKey = process.env.GOOGLE_API_KEY;
  const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

  if (!text || !targetLang) {
    return res.status(400).json({ error: 'Missing text or targetLang in request body' });
  }

  try {
    const response = await axios.post(url, {
      q: text,
      target: targetLang,
    });
    res.json(response.data);
  } catch (error) {
    console.error('Translation error:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Failed to translate text' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
}); 