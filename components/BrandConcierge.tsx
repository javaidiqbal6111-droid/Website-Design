
import React, { useState, useRef, useEffect } from 'react';
import { getConciergeResponse } from '../services/gemini';

interface Message {
  role: 'concierge' | 'user';
  text: string;
}

interface BrandConciergeProps {
  isOpen: boolean;
  onClose: () => void;
}

const BrandConcierge: React.FC<BrandConciergeProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'concierge', text: "Greetings. I am your personal curator at L'ESSENCE. How may I assist you in crafting your next ritual?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    const response = await getConciergeResponse(userMsg);
    setMessages(prev => [...prev, { role: 'concierge', text: response || "I seem to have lost my way for a moment." }]);
    setIsTyping(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-espresso/40 backdrop-blur-sm" 
        onClick={onClose}
      />
      <div className="relative bg-parchment w-full max-w-2xl h-[80vh] flex flex-col rounded-[40px] shadow-2xl overflow-hidden border border-espresso/5">
        {/* Header */}
        <div className="p-8 border-b border-espresso/5 flex justify-between items-center bg-almond">
          <div>
            <h2 className="font-serif text-3xl tracking-tighter">Concierge</h2>
            <p className="text-[10px] uppercase tracking-widest text-copper font-bold">Curating your sensory journey</p>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center hover:bg-parchment rounded-full transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 5L5 15M5 5L15 15" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-hide"
        >
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[85%] ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                {msg.role === 'concierge' && (
                  <p className="text-[10px] uppercase tracking-widest text-copper font-bold mb-2">L'ESSENCE</p>
                )}
                <div className={`text-lg leading-relaxed ${
                  msg.role === 'user' 
                    ? 'font-serif italic text-espresso' 
                    : 'font-light text-ink/80'
                }`}>
                  {msg.text}
                </div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-copper/40 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-copper/40 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-1.5 h-1.5 bg-copper/40 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-8 bg-almond border-t border-espresso/5">
          <div className="relative">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Inquire about a skincare ritual..."
              className="w-full bg-transparent border-b border-espresso/20 py-4 pr-12 text-lg focus:outline-none focus:border-copper transition-colors placeholder:text-espresso/30"
            />
            <button 
              type="submit"
              disabled={isTyping || !input.trim()}
              className={`absolute right-0 top-1/2 -translate-y-1/2 p-2 ${
                isTyping || !input.trim() ? 'opacity-20 cursor-not-allowed' : 'opacity-100'
              }`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12H19M19 12L13 6M19 12L13 18" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BrandConcierge;
