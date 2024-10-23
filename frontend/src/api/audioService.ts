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

    const response = await axios.post('https://api.skyeeer.com/api/translate', formData);



    return response.data as SendAudioResponse;
}
