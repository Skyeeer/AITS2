import axios from 'axios';

interface SendAudioResponse {
    originalText: string;
    translatedText: string;
    audioContent: string;
}

export async function sendAudio(
    audioBlob: Blob,
    targetLanguage: string,
    voice: string
): Promise<SendAudioResponse> {
    const formData = new FormData();
    formData.append('audio', audioBlob, 'audio.wav');
    formData.append('targetLanguage', targetLanguage);
    formData.append('voice', voice);

    console.log('FormData:', formData);
    console.log('Sending POST to: https://api.skyeeer.com/api/translate');

    try {
        const response = await axios.post('https://api.skyeeer.com/api/translate', formData, {
            withCredentials: false
        });
        console.log('Response:', response);
        return response.data as SendAudioResponse;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
