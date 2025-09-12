'use client';

import { useState, useEffect, useRef } from 'react';
import { X, Send, MessageCircle, Phone } from 'lucide-react';
import { useChat } from './chatProvider';
import type { ChatSystemState, ChatMessage, ChatOption, UserData } from '../types';

interface ChatSystemProps {
  chatState: ChatSystemState;
  setChatState: (state: ChatSystemState | ((prev: ChatSystemState) => ChatSystemState)) => void;
}

const CHAT_FLOW = [
  {
    question: "Hi! I'm Inna's health assistant. I'm here to help you discover if functional nutrition could be the solution you've been searching for. What's your first name?",
    options: [],
    inputType: 'text'
  },
  {
    question: "Nice to meet you, {name}! I'd love to learn more about your health journey. What's the main challenge you're facing right now?",
    options: [
      "Chronic fatigue that doesn't improve with sleep",
      "Persistent anxiety or mood swings",
      "Digestive issues (bloating, IBS, food sensitivities)",
      "Brain fog and concentration problems",
      "Perimenopause/hormone-related symptoms",
      "Multiple symptoms with no clear diagnosis"
    ]
  },
  {
    question: "I hear you on {issue}. That can be so frustrating. How long have you been dealing with this?",
    options: [
      "Less than 6 months",
      "6 months to 2 years",
      "2-5 years",
      "More than 5 years"
    ]
  },
  {
    question: "And have you tried working with other healthcare providers for this issue?",
    options: [
      "Yes, but haven't found answers",
      "Yes, but treatments didn't work long-term",
      "Some improvement but not enough",
      "This is my first time seeking help"
    ]
  },
  {
    question: "I completely understand, {name}. You're definitely not alone - 88% of our clients have been exactly where you are. Based on what you've shared, you could be a great fit for Inna's functional nutrition approach. Would you like to schedule a free 15-minute consultation to discuss your specific situation?",
    options: [
      "Yes, I'd love to schedule a call",
      "Tell me more about the approach first",
      "What would we discuss in the consultation?",
      "How much do your programs cost?",
      "I need to think about it"
    ]
  },
  {
    question: "Great question! Inna uses functional lab testing like GI-MAP and DUTCH hormone panels to uncover root causes that standard tests miss. Then she creates personalized nutrition protocols that address YOUR specific imbalances. 92% of her clients find answers where conventional medicine couldn't help. Ready to schedule your consultation?",
    options: [
      "Yes, let's schedule the call",
      "What would we discuss in the consultation?"
    ]
  },
  {
    question: "In your free consultation, Inna will review your health history, discuss your main concerns, and explain which functional tests might be most helpful for your situation. There's no pressure - it's simply a chance to see if this approach feels right for you. Should we get that scheduled?",
    options: [
      "Yes, let's schedule now",
      "I need to think about it"
    ]
  },
  {
    question: "Investment ranges from functional lab testing to comprehensive coaching programs. Most clients find the testing alone provides huge insights. In your consultation, Inna will recommend the best starting point for your budget and needs. Ready to learn what might work for you?",
    options: [
      "Yes, let's schedule the consultation",
      "Tell me about just the testing first"
    ]
  },
  {
    question: "Perfect! I'll connect you with our booking system. You'll be able to choose a time that works best for you.",
    options: [
      "📅 Book Your Call Now"
    ]
  },
  {
    question: "I completely understand, {name}. This is an important decision and I respect that you want to think it through. Can I get your email so I can follow up with you in a week? I'll also send you some helpful gut health tips in the meantime - no pressure at all.",
    options: [
      "📧 Stay in Touch (email capture field)"
    ],
    inputType: 'email'
  },
  {
    question: "Perfect! I've got {email}. You'll receive some valuable gut health tips over the next week, and I'll personally follow up to see how you're feeling and answer any questions that come up. In the meantime, feel free to check out Inna's resources or just reach out if anything changes!",
    options: []
  }
];

export default function ChatSystem({ chatState, setChatState }: ChatSystemProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [userData, setUserData] = useState<UserData>({});
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Call-to-action handlers
  const handleBookCall = () => {
    window.open('https://calendly.com/inna-ntp/free-15-minutes-discovery-call-via-phone', '_blank');
  };

  const handleStayInTouch = () => {
    // This will be handled by the email input flow
    console.log('Stay in touch clicked');
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const interpolateMessage = (message: string, userData: UserData): string => {
    let interpolatedMessage = message;
    
    if (userData.name) {
      interpolatedMessage = interpolatedMessage.replace('{name}', userData.name);
    }
    if (userData.issue) {
      interpolatedMessage = interpolatedMessage.replace('{issue}', userData.issue.toLowerCase());
    }
    if (userData.email) {
      interpolatedMessage = interpolatedMessage.replace('{email}', userData.email);
    }
    
    return interpolatedMessage;
  };

  useEffect(() => {
    if (chatState.isOpen && chatState.messages.length === 0) {
      initializeChat();
    }
  }, [chatState.isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [chatState.messages]);

  const initializeChat = () => {
    const welcomeMessage: ChatMessage = {
      id: '1',
      text: CHAT_FLOW[0].question,
      isBot: true,
      timestamp: new Date(),
      options: CHAT_FLOW[0].options.length > 0 ? CHAT_FLOW[0].options.map((option, index) => ({
        id: `option_${index}`,
        text: option,
        value: option
      })) : undefined
    };

    setChatState(prev => ({
      ...prev,
      messages: [welcomeMessage],
      currentStep: 0
    }));
    setCurrentStep(0);
  };

  const addMessage = (text: string, isBot: boolean, options?: string[]) => {
    const newMessage: ChatMessage = {
      id: `msg_${Date.now()}`,
      text,
      isBot,
      timestamp: new Date(),
      options: options?.map((opt, idx) => ({
        id: `option_${idx}`,
        text: opt,
        value: opt,
        featured: false
      }))
    };

    setChatState(prev => ({
      ...prev,
      messages: [...prev.messages, newMessage],
      isTyping: false
    }));
  };

  const handleTextInput = (text: string) => {
    if (!text.trim()) return;
    
    addMessage(text, false);
    setInputValue('');

    let updatedUserData = { ...userData };

    // Handle different input types
    if (CHAT_FLOW[currentStep]?.inputType === 'text') {
      updatedUserData.name = text;
    } else if (CHAT_FLOW[currentStep]?.inputType === 'email') {
      updatedUserData.email = text;
    }

    setUserData(updatedUserData);
    setCurrentStep(prev => prev + 1);
    setIsTyping(true);

    // Show next question after delay
    setTimeout(() => {
      const nextStep = currentStep + 1;
      if (nextStep < CHAT_FLOW.length) {
        let nextMessage = CHAT_FLOW[nextStep].question;
        
        // Replace placeholders
        if (updatedUserData.name) {
          nextMessage = nextMessage.replace('{name}', updatedUserData.name);
        }
        if (updatedUserData.issue) {
          nextMessage = nextMessage.replace('{issue}', updatedUserData.issue.toLowerCase());
        }
        if (updatedUserData.email) {
          nextMessage = nextMessage.replace('{email}', updatedUserData.email);
        }
        
        const nextOptions = CHAT_FLOW[nextStep].options;
        addMessage(nextMessage, true, nextOptions);
        setIsTyping(false);
      }
    }, 1500);
  };

  const handleOptionClick = (option: string, index: number) => {
    // Add user message
    addMessage(option, false);

    // Handle special cases
    if (option.includes('📅 Book Your Call Now')) {
      handleBookCall();
      return;
    }
    
    if (option.includes('📧 Stay in Touch')) {
      handleStayInTouch();
      // Continue with email input flow
    }

    let updatedUserData = { ...userData };

    // Store user data based on current step
    if (currentStep === 1) {
      updatedUserData.issue = option;
    } else if (currentStep === 2) {
      updatedUserData.duration = option;
    } else if (currentStep === 3) {
      updatedUserData.previousTreatments = option;
    }

    setUserData(updatedUserData);
    let nextStep = currentStep + 1;

    // Handle navigation logic
    if (currentStep === 4) { // Main consultation question
      if (option === "Tell me more about the approach first") {
        nextStep = 5; // Go to approach explanation
      } else if (option === "What would we discuss in the consultation?") {
        nextStep = 6; // Go to consultation details
      } else if (option === "How much do your programs cost?") {
        nextStep = 7; // Go to pricing info
      } else if (option === "Yes, I'd love to schedule a call") {
        nextStep = 8; // Go to booking
      } else if (option === "I need to think about it") {
        nextStep = 9; // Go to email capture
      }
    } else if (currentStep === 5) { // After approach explanation
      if (option === "Yes, let's schedule the call") {
        nextStep = 8; // Go to booking
      } else if (option === "What would we discuss in the consultation?") {
        nextStep = 6; // Go to consultation details
      }
    } else if (currentStep === 6) { // After consultation details
      if (option === "Yes, let's schedule now") {
        nextStep = 8; // Go to booking
      } else if (option === "I need to think about it") {
        nextStep = 9; // Go to email capture
      }
    } else if (currentStep === 7) { // After pricing info
      if (option === "Yes, let's schedule the consultation") {
        nextStep = 8; // Go to booking
      }
    } else if (currentStep === 8) { // Booking step
      if (option === "📅 Book Your Call Now") {
        // Open booking system
        window.open('https://calendly.com/inna-ntp/free-15-minutes-discovery-call-via-phone', '_blank');
        return; // Don't proceed to next step
      }
    } else if (currentStep === 9) { // Email capture step
      if (option === "📧 Stay in Touch (email capture field)") {
        // Show email input - this will be handled by the input field
        return;
      }
    }

    setCurrentStep(nextStep);
    setIsTyping(true);

    // Show next question after delay
    setTimeout(() => {
      if (nextStep < CHAT_FLOW.length) {
        let nextMessage = CHAT_FLOW[nextStep].question;
        
        // Replace placeholders
        if (updatedUserData.name) {
          nextMessage = nextMessage.replace('{name}', updatedUserData.name);
        }
        if (updatedUserData.issue) {
          nextMessage = nextMessage.replace('{issue}', updatedUserData.issue.toLowerCase());
        }
        if (updatedUserData.email) {
          nextMessage = nextMessage.replace('{email}', updatedUserData.email);
        }
        
        const nextOptions = CHAT_FLOW[nextStep].options;
        addMessage(nextMessage, true, nextOptions);
        setIsTyping(false);
      }
    }, 1500);
  };

  const handleInputSubmit = () => {
    if (!inputValue.trim()) return;
    handleTextInput(inputValue.trim());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleInputSubmit();
  };

  const handleCloseChat = () => {
    // Reset local chat state
    setChatState(prev => ({
      ...prev,
      isOpen: false,
      messages: []
    }));
    setCurrentStep(0);
    setUserData({});
    setIsTyping(false);
    setInputValue('');
  };

  // Cleanup effect
  useEffect(() => {
    return () => {
      // Cleanup if needed
    };
  }, []);

  if (!chatState.isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end justify-end p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[calc(100vh-2rem)] h-[600px] flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b" style={{ borderColor: 'var(--primary-green)', background: 'linear-gradient(135deg, var(--primary-green), var(--dark-green))' }}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'var(--accent-yellow)' }}>
              <MessageCircle className="w-5 h-5" style={{ color: 'var(--primary-green)' }} />
            </div>
            <div>
              <h3 className="font-semibold text-white">Inna's Health Assistant</h3>
              <p className="text-sm" style={{ color: 'var(--accent-yellow)' }}>Usually replies instantly</p>
            </div>
          </div>
          <button
            onClick={handleCloseChat}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ backgroundColor: '#f8f9fa' }}>
          {chatState.messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-2xl shadow-sm ${
                  message.isBot
                    ? 'text-gray-800'
                    : 'text-white'
                }`}
                style={{
                  backgroundColor: message.isBot ? 'white' : 'var(--primary-green)',
                  border: message.isBot ? '1px solid var(--accent-yellow)' : 'none'
                }}
              >
                {message.text}
              </div>
            </div>
          ))}
          
          {/* Typing indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white p-3 rounded-2xl shadow-sm" style={{ border: '1px solid var(--accent-yellow)' }}>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full animate-typing" style={{ backgroundColor: 'var(--primary-green)' }}></div>
                  <div className="w-2 h-2 rounded-full animate-typing" style={{ backgroundColor: 'var(--primary-green)', animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 rounded-full animate-typing" style={{ backgroundColor: 'var(--primary-green)', animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
          
          {/* Options for the last bot message */}
          {!isTyping && chatState.messages.length > 0 && chatState.messages[chatState.messages.length - 1].isBot && currentStep < CHAT_FLOW.length && CHAT_FLOW[currentStep].options.length > 0 && (
            <div className="space-y-2">
              {CHAT_FLOW[currentStep].options.map((option, index) => {
                const isCallToAction = option.includes('📅 Book Your Call Now') || option.includes('📧 Stay in Touch');
                return (
                  <button
                    key={index}
                    onClick={() => handleOptionClick(option, index)}
                    className={`w-full text-left p-3 rounded-xl transition-all duration-300 text-sm font-medium shadow-sm hover:shadow-md transform hover:-translate-y-0.5 ${
                      isCallToAction ? 'text-white' : 'text-gray-800'
                    }`}
                    style={{
                      backgroundColor: isCallToAction ? 'var(--accent-coral)' : 'white',
                      border: isCallToAction ? 'none' : '2px solid var(--primary-green)',
                      background: isCallToAction ? 'linear-gradient(135deg, var(--accent-coral), var(--accent-pink))' : 'white'
                    }}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        {currentStep < CHAT_FLOW.length && CHAT_FLOW[currentStep].inputType && (
          <div className="p-4" style={{ borderTop: '1px solid var(--accent-yellow)', backgroundColor: 'white' }}>
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type={CHAT_FLOW[currentStep].inputType}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleInputSubmit()}
                placeholder={CHAT_FLOW[currentStep].inputType === 'email' ? 'Enter your email...' : 'Type your answer...'}
                className="flex-1 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                style={{
                  border: '2px solid var(--primary-green)'
                }}
              />
              <button
                onClick={handleInputSubmit}
                disabled={!inputValue.trim()}
                className="px-4 py-3 text-white rounded-xl transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, var(--accent-coral), var(--accent-pink))'
                }}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}