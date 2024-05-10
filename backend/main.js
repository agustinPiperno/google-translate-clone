import express from 'express';
import deepl from 'deepl-node';
import process from 'process';
import dotenv from 'dotenv'
import cors from 'cors';

dotenv.config()

const authKey = process.env.DEEPL_API_KEY; // Replace with your key
const translator = new deepl.Translator(authKey);

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); // for parsing application/json

app.post('/translate', async (req, res) => {
  const { text, fromLanguage, toLanguage } = req.body;
  
  let fromLang = fromLanguage
  if(fromLanguage === 'auto') fromLang = null 
  if(fromLanguage === 'en') fromLang = 'en-US'

  let toLang = toLanguage
  if(toLanguage === 'en') toLang = 'en-US';

  try {
    const translationResult = await translator.translateText(
      text, 
      fromLang,
      toLang
    );
    res.json({ translatedText: translationResult.text });
  } catch (error) {
    console.error('Translation error:', error);
    res.status(500).json({ error: 'Translation error' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


