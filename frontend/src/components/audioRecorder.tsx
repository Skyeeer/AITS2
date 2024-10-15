import React, { useState } from 'react';
import { sendAudio } from '../api/audioService';

interface AudioRecorderProps {
    targetLanguage: string;
    addChatMessage: (originalText: string, translatedText: string) => void;
}

const AudioRecorder: React.FC<AudioRecorderProps> = ({
    targetLanguage,
    addChatMessage,
}) => {
    const [isRecording, setIsRecording] = useState(false);
    const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);

    const startRecording = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const recorder = new MediaRecorder(stream);
        const audioChunks: Blob[] = [];

        recorder.ondataavailable = (e) => {
            audioChunks.push(e.data);
        };

        recorder.onstop = async () => {
            const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
            const response = await sendAudio(audioBlob, targetLanguage, 'alloy');

            const { originalText, translatedText, audioContent } = response;

            addChatMessage(originalText, translatedText);

            const translatedAudioBlob = base64ToBlob(audioContent, 'audio/mpeg');
            const audioURL = URL.createObjectURL(translatedAudioBlob);

            const audio = new Audio(audioURL);
            audio.play();
        };

        setMediaRecorder(recorder);
        recorder.start();
        setIsRecording(true);
    };

    const stopRecording = () => {
        mediaRecorder?.stop();
        setIsRecording(false);
    };

    return (
        <div className={`audio-recorder ${isRecording ? 'recording' : ''}`}>
            <button
                className="record-button"
                onClick={isRecording ? stopRecording : startRecording}
            >
                {/* Button content remains empty */}
            </button>
        </div>
    );
};

// Utility function to convert base64 string to Blob
function base64ToBlob(base64: string, contentType: string): Blob {
    const byteCharacters = atob(base64);
    const byteArrays = [];

    const sliceSize = 512;
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);

        const byteNumbers = new Array(slice.length)
            .fill(0)
            .map((_, i) => slice.charCodeAt(i));
        const byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, { type: contentType });
}

export default AudioRecorder;
