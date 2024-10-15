import React from 'react';

interface ChatMessage {
    originalText: string;
    translatedText: string;
}

interface ChatLogProps {
    chatMessages: ChatMessage[];
}

const ChatLog: React.FC<ChatLogProps> = ({ chatMessages }) => {
    return (
        <div className="chat-log">
            {chatMessages.map((message, index) => (
                <div className="chat-message" key={index}>
                    <div className="original-text">{message.originalText}</div>
                    <div className="translated-text">{message.translatedText}</div>
                </div>
            ))}
        </div>
    );
};

export default ChatLog;
