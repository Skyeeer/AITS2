import React, { useState } from 'react';
import { sendAudio } from '../api/audioService';

const AudioRecorder: React.FC = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
    const [audioURL, setAudioURL] = useState<string | null>(null);

    const startRecording = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const recorder = new MediaRecorder(stream);
        const audioChunks: Blob[] = [];

        recorder.ondataavailable = (e) => {
            audioChunks.push(e.data);
        };

        recorder.onstop = async () => {
            const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
            const translatedAudio = await sendAudio(audioBlob, 'sv', 'alloy');
            setAudioURL(URL.createObjectURL(translatedAudio));
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
        <div>
            <button onClick={isRecording ? stopRecording : startRecording}>
                {isRecording ? 'Stop Recording' : 'Start Recording'}
            </button>
            {audioURL && (
                <div>
                    <h3>Translated Audio:</h3>
                    <audio controls src={audioURL}></audio>
                </div>
            )}
        </div>
    );
};

export default AudioRecorder;