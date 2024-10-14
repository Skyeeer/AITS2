import axios from "axios";

export async function translateText(text: string, targetLanguage: string): Promise<string> {
    try {
        const response = await axios.post(`https://translation.googleapis.com/language/translate/v2`,
            {},
            {
                params: {
                    q: text,
                    target: targetLanguage,
                    key: process.env.GOOGLE_API_KEY,
                },
            }
        );

        if (response.data && response.data.data && response.data.data.translations) {
            return response.data.data.translations[0].translatedText;
        } else {
            throw new Error('Translation response structure not as expected');
        }
    } catch (error) {
        console.log('Error during text translation:', error);
        throw error;
    }
}