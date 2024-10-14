import axios from "axios";
import FormData from "form-data";

export async function transcribeSpeech(audio: Buffer, fileExtension: string): Promise<string> {
    try {
        const contentType = `audio/${fileExtension}`;
        const formData = new FormData();
        formData.append('file', audio, {
            filename: `audio.${fileExtension}`,
            contentType: 'contentType',
        });
        formData.append('model', 'whisper-1');

        const response = await axios.post(
            'https://api.openai.com/v1/audio/transcriptions',
            formData,
            {
                headers: {
                    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
                    ...formData.getHeaders(),
                },
            }
        );
        console.log('Full response data:', response.data);

        if (response.data && response.data.text) {
            return response.data.text;
        } else {
            throw new Error('Transcription text not found in the response');
        }
    } catch (error) {
        console.error('Error during speach transcription:', error);
        throw error;
    }
}