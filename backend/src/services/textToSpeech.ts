import axios from 'axios';

export type VoiceType = 'alloy' | 'echo' | 'fable' | 'onyx' | 'nova' | 'shimmer';

export async function textToSpeech(text: string, voice: VoiceType): Promise<Buffer> {
    try {
        const response = await axios.post(
            'https://api.openai.com/v1/audio/speech',
            {
                model: 'tts-1',
                input: text,
                voice: voice,
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                    'Content-Type': 'application/json',
                },
                responseType: 'arraybuffer',
            }
        );

        const audioBuffer = Buffer.from(response.data);

        return audioBuffer;
    } catch (error: any) {
        console.error('Error during text-to-speech:', error.response?.data || error.message);
        throw error;
    }
}
