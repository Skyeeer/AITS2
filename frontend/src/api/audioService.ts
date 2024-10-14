import axios from 'axios';

export async function sendAudio(audioBlob: Blob, targetLanguage: string, voice: string): Promise<Blob> {
    const formData = new FormData();
    formData.append('audio', audioBlob);
    formData.append('targetLanguage', targetLanguage);
    formData.append('voice', voice);

    const response = await axios.post('http://localhost:3000/api/translate', formData, {
        responseType: 'blob',
    });


    return response.data;
}