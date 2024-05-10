import { FromLanguage, Language } from '../types';

export async function translate({
  text,
  fromLanguage,
  toLanguage
  }: {
    text: string
    fromLanguage: FromLanguage
    toLanguage: Language
  }): Promise<string> {
    const response = await fetch('http://localhost:3000/translate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, fromLanguage, toLanguage }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.translatedText;
}