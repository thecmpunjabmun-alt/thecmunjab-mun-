'use client';
import { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type Message = {
  type: 'bot' | 'user';
  text: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [remainingMessages, setRemainingMessages] = useState<number | null>(null);
  const chatBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load history
    let history = JSON.parse(sessionStorage.getItem('munChatHistory') || '[]');
    
    // Purge old history if it contains raw HTML from the previous version
    if (history.length > 0 && history[0].text && history[0].text.includes('<br>')) {
      history = [];
      sessionStorage.removeItem('munChatHistory');
    }

    if (history.length === 0) {
      const defaultMsg: Message = { 
        type: 'bot', 
        text: 'Hello! I am the CM Punjab MUN virtual assistant. How can I help you today?\n\nYou can ask me about:\n- **Programs**\n- **Applications**\n- **Departments**\n- **Contact Info**' 
      };
      setMessages([defaultMsg]);
      sessionStorage.setItem('munChatHistory', JSON.stringify([defaultMsg]));
    } else {
      setMessages(history);
    }
    
    // Load open state
    if (sessionStorage.getItem('munChatOpen') === 'true') {
      setIsOpen(true);
    }
  }, []);

  useEffect(() => {
    // Scroll to bottom when messages change
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const toggleChat = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    sessionStorage.setItem('munChatOpen', newState.toString());
  };

  const handleSend = async () => {
    if (isTyping) return;
    const text = inputValue.trim();
    if (!text) return;

    const newMessages: Message[] = [...messages, { type: 'user', text }];
    setMessages(newMessages);
    sessionStorage.setItem('munChatHistory', JSON.stringify(newMessages));
    setInputValue('');
    setIsTyping(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      
      if (data.remaining !== undefined) {
        setRemainingMessages(data.remaining);
      }

      const botMsg: Message = { type: 'bot', text: data.response };
      const updatedMessages = [...newMessages, botMsg];
      setMessages(updatedMessages);
      sessionStorage.setItem('munChatHistory', JSON.stringify(updatedMessages));
    } catch (error) {
      console.error(error);
      const errorMsg: Message = { type: 'bot', text: "An error occurred connecting to the server." };
      const updatedMessages = [...newMessages, errorMsg];
      setMessages(updatedMessages);
      sessionStorage.setItem('munChatHistory', JSON.stringify(updatedMessages));
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="chatbot-widget">
      <button className="chat-toggle" onClick={toggleChat} aria-label="Open Chat">
        <i className="fas fa-comment-dots"></i>
      </button>
      <div className={`chat-window ${isOpen ? 'active' : ''}`} id="chatWindow">
        <div className="chat-header">
          <h3><i className="fas fa-robot"></i> MUN Support Bot</h3>
          <button className="close-chat" onClick={toggleChat} aria-label="Close Chat">
            <i className="fas fa-times"></i>
          </button>
        </div>
        {remainingMessages !== null && (
          <div style={{ fontSize: '0.8rem', textAlign: 'center', padding: '5px', backgroundColor: '#e9ecef', color: '#6c757d', borderBottom: '1px solid #dee2e6' }}>
            <i className="fas fa-bolt" style={{ color: '#ffc107', marginRight: '5px' }}></i>
            {remainingMessages} AI message{remainingMessages !== 1 ? 's' : ''} remaining today
          </div>
        )}
        <div className="chat-body" ref={chatBodyRef}>
          {messages.map((msg, idx) => (
            <div key={idx} className={`message ${msg.type === 'bot' ? 'bot-message markdown-body' : 'user-message'}`}>
              {msg.type === 'bot' ? (
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.text}</ReactMarkdown>
              ) : (
                msg.text
              )}
            </div>
          ))}
          {isTyping && (
            <div className="message bot-message">
              <div className="typing-indicator">
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
              </div>
            </div>
          )}
        </div>
        <div className="chat-footer">
          <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && !isTyping && handleSend()}
            placeholder={isTyping ? "AI is typing..." : "Type your question..."} 
            aria-label="Chat input" 
            disabled={isTyping}
          />
          <button onClick={handleSend} aria-label="Send message" disabled={isTyping}>
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
