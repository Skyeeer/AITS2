import React from 'react';
import logo from './logo.svg';
import './App.css';
import AudioRecorder from './components/audioRecorder';

function App() {
  return (
    <div className='App'>
      <h1>Live Service Translation</h1>
      <AudioRecorder />
    </div>
  );
}

export default App;
