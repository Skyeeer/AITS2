import express from 'express';
import multer from 'multer';
import { transcribeSpeech } from '../services/speechToText';
import { translateText } from '../services/translation';
import { textToSpeech, VoiceType } from '../services/textToSpeech';


const router = express.Router();
const upload = multer();

router.post('/translate', upload.single('audio'), async (req, res) => {
    try {
        const audioBuffer = req.file?.buffer;
        const fileExtension = req.file?.mimetype.split('/')[1];
        const { targetLanguage, voice } = req.body;

        if (!audioBuffer) {
            return res.status(400).json({ error: 'Audio file is required.' });
        }
        if (!targetLanguage) {
            return res.status(400).json({ error: 'Target language is required.' });
        }
        if (!fileExtension) {
            return res.status(400).json({ error: 'Unsupported or missing audio file type.' });
        }

        const transcribedText = await transcribeSpeech(audioBuffer, fileExtension);
        const translatedText = await translateText(transcribedText, targetLanguage);

        const allowedVoices: VoiceType[] = ['alloy', 'echo', 'fable', 'onyx', 'nova', 'shimmer'];
        let selectedVoice: VoiceType = 'alloy'; // Default voice

        if (voice) {
            if (allowedVoices.includes(voice)) {
                selectedVoice = voice;
            } else {
                return res.status(400).json({ error: 'Invalid voice parameter.' });
            }
        }

        const audioContent = await textToSpeech(translatedText, selectedVoice);

        res.set('Content-Type', 'audio/mpeg');
        res.send(audioContent);
    } catch (error: any) {
        console.error('Error during translation:', error);
        res.status(500).json({ error: 'An error occurred during translation processing.' });
    }
});


export default router;