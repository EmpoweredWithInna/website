'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm here to help you understand how functional nutrition can transform your health. What symptoms are you struggling with?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('fatigue') || input.includes('tired') || input.includes('energy')) {
      return "Chronic fatigue is often a sign of underlying imbalances like adrenal dysfunction, nutrient deficiencies, or gut issues. Our HTMA and comprehensive testing can identify the root causes. Would you like to learn more about our Root-Cause Nutrition Program?";
    } else if (input.includes('bloating') || input.includes('digestive') || input.includes('gut') || input.includes('ibs')) {
      return "Digestive issues like bloating often stem from gut dysbiosis, food sensitivities, or digestive enzyme deficiencies. Our GI-MAP test can reveal exactly what's happening in your gut. Many clients see 60-90% improvement in symptoms. Interested in learning more?";
    } else if (input.includes('anxiety') || input.includes('mood') || input.includes('depression')) {
      return "The gut-brain connection is real! Anxiety and mood issues are often linked to gut imbalances, nutrient deficiencies, or hormone disruption. Our comprehensive approach addresses all these factors. Would you like to schedule a discovery call?";
    } else if (input.includes('hormone') || input.includes('period') || input.includes('pms')) {
      return "Hormonal imbalances affect so many women! Our DUTCH hormone test reveals how your body processes hormones, not just levels. We can identify why you're experiencing symptoms and create a personalized protocol. Ready to get started?";
    } else if (input.includes('weight') || input.includes('metabolism')) {
      return "Weight struggles often indicate metabolic dysfunction, insulin resistance, or thyroid issues. We look at the whole picture - hormones, gut health, and metabolism. Our approach helps restore natural weight balance. Want to learn about our programs?";
    } else if (input.includes('test') || input.includes('lab') || input.includes('htma') || input.includes('gi-map')) {
      return "Great question! We use advanced functional tests like HTMA (mineral analysis), GI-MAP (comprehensive stool test), and DUTCH (hormone testing) that reveal imbalances standard labs miss. These tests guide your personalized protocol. Ready to dive deeper?";
    } else if (input.includes('price') || input.includes('cost') || input.includes('program')) {
      return "Our Root-Cause Nutrition Program is $2,997 for 6 months and includes comprehensive testing, personalized protocols, and monthly consultations. We also offer payment plans. Would you like to schedule a free discovery call to see if it's right for you?";
    } else {
      return "I understand how frustrating chronic symptoms can be. The good news is that most symptoms have root causes that can be identified and addressed through functional testing and personalized nutrition. Would you like to schedule a free 15-minute discovery call with our team?";
    }
  };

  const quickReplies = [
    "I'm struggling with fatigue",
    "Digestive issues",
    "Hormonal imbalances",
    "Tell me about testing"
  ];

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <div className="fixed bottom-8 left-8 z-50">
          <button
            onClick={() => setIsOpen(true)}
            className="group bg-gradient-to-r from-green-700 to-emerald-700 text-white p-4 rounded-2xl shadow-2xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 hover:scale-110"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div className="hidden sm:block text-left">
                <div className="font-bold text-sm">Chat with us</div>
                <div className="text-xs opacity-90">Get health guidance</div>
              </div>
            </div>
            
            {/* Pulse animation */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-700 to-emerald-700 animate-ping opacity-20"></div>
          </button>
        </div>
      )}

      {/* Chat Widget */}
      {isOpen && (
        <div className={`fixed bottom-8 left-8 w-96 bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col z-50 transition-all duration-300 ${
          isMinimized ? 'h-16' : 'h-[32rem]'
        }`}>
          {/* Header */}
          <div className="bg-gradient-to-r from-green-700 to-emerald-700 text-white p-6 rounded-t-3xl flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg">Health Assistant</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse"></div>
                  <p className="text-sm opacity-90">Online now</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <svg className={`w-4 h-4 transition-transform duration-300 ${isMinimized ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-gray-50 to-white">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-end space-x-2 max-w-[85%] ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      {!message.isUser && (
                        <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </div>
                      )}
                      <div
                        className={`p-4 rounded-2xl ${
                          message.isUser
                            ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-br-md shadow-lg'
                            : 'bg-white border border-gray-200 text-gray-800 rounded-bl-md shadow-sm'
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{message.text}</p>
                        <p className={`text-xs mt-2 ${
                          message.isUser ? 'text-white/70' : 'text-gray-500'
                        }`}>
                          {message.timestamp.toLocaleTimeString([], { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-end space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-md p-4 shadow-sm">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce delay-100"></div>
                          <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce delay-200"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Quick Replies */}
                {messages.length === 1 && (
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600 font-medium">Quick options:</p>
                    <div className="flex flex-wrap gap-2">
                      {quickReplies.map((reply, index) => (
                        <button
                          key={index}
                          onClick={() => setInputValue(reply)}
                          className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium hover:bg-green-200 transition-colors"
                        >
                          {reply}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-6 bg-white border-t border-gray-100 rounded-b-3xl">
                <form onSubmit={handleSendMessage} className="space-y-4">
                  <div className="flex space-x-3">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Describe your symptoms or ask a question..."
                      className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-600/20 focus:border-green-600 text-sm transition-colors"
                    />
                    <button
                      type="submit"
                      disabled={!inputValue.trim()}
                      className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl hover:from-green-500 hover:to-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 text-center">
                    💬 Get personalized health guidance • 🔒 Your privacy is protected
                  </p>
                </form>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}