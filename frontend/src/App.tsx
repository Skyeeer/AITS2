import React, { useState } from 'react';
import './App.css';
import AudioRecorder from './components/audioRecorder';
import ChatLog from './components/chatLog';
import LanguageSelector from './components/languageSelector';

function App() {
  const [targetLanguage, setTargetLanguage] = useState('sv'); // Default language
  const [chatMessages, setChatMessages] = useState<
    { originalText: string; translatedText: string }[]
  >([]);

  const addChatMessage = (originalText: string, translatedText: string) => {
    setChatMessages((prevMessages) => [...prevMessages, { originalText, translatedText }]);
  };

  return (
    <div className="app">
      <LanguageSelector
        targetLanguage={targetLanguage}
        setTargetLanguage={setTargetLanguage}
      />
      <ChatLog chatMessages={chatMessages} />
      <AudioRecorder
        targetLanguage={targetLanguage}
        addChatMessage={addChatMessage}
      />
    </div>
  );
}

export default App;
