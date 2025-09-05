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
    type: 'bot',
    message: "Hi! I'm Inna's health assistant. I'm here to help you discover if functional nutrition could be the solution you've been searching for. What's your first name?",
    inputType: 'text'
  },
  {
    type: 'bot',
    message: "Nice to meet you, {name}! I'd love to learn more about your health journey. What's the main challenge you're facing right now?",
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
    type: 'bot',
    message: "I hear you on {issue}. That can be so frustrating. How long have you been dealing with this?",
    options: [
      "Less than 6 months",
      "6 months to 2 years", 
      "2-5 years",
      "More than 5 years"
    ]
  },
  {
    type: 'bot',
    message: "And have you tried working with other healthcare providers for this issue?",
    options: [
      "Yes, but haven't found answers",
      "Yes, but treatments didn't work long-term",
      "Some improvement but not enough",
      "This is my first time seeking help"
    ]
  },
  {
    type: 'bot',
    message: "I completely understand, {name}. You're definitely not alone - 88% of our clients have been exactly where you are. Based on what you've shared, you could be a great fit for Inna's functional nutrition approach. Would you like to schedule a free 15-minute consultation to discuss your specific situation?",
    options: [
      "Yes, I'd love to schedule a call",
      "Tell me more about the approach first",
      "What would we discuss in the consultation?",
      "How much do your programs cost?",
      "I need to think about it"
    ]
  }
];

export function ChatSystem({ chatState, setChatState }: ChatSystemProps) {
  const { closeChat } = useChat();
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
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
      text: CHAT_FLOW[0].message,
      isBot: true,
      timestamp: new Date(),
      options: CHAT_FLOW[0].options ? CHAT_FLOW[0].options.map((option, index) => ({
        id: `option_${index}`,
        text: option,
        value: option
      })) : undefined
    };

    setChatState(prev => ({
      ...prev,
      messages: [welcomeMessage],
      currentStep: 'name_input',
      chatStep: 0
    }));
  };

  const addMessage = (text: string, isBot: boolean = false, options?: ChatOption[]) => {
    const message: ChatMessage = {
      id: Date.now().toString(),
      text,
      isBot,
      timestamp: new Date(),
      options
    };

    setChatState(prev => ({
      ...prev,
      messages: [...prev.messages, message],
      isTyping: false
    }));
  };

  const showTyping = () => {
    setChatState(prev => ({ ...prev, isTyping: true }));
  };

  const hideTyping = () => {
    setChatState(prev => ({ ...prev, isTyping: false }));
  };

  const selectOption = (option: string) => {
    // Add user message immediately
    addMessage(option, false);
    
    const currentStep = chatState.chatStep || 0;
    
    showTyping();
    setTimeout(() => {
      hideTyping();
      
      // Store user data based on current step
      let updatedUserData = { ...chatState.userData };
      
      if (currentStep === 1) {
        updatedUserData.issue = option;
      } else if (currentStep === 2) {
        updatedUserData.duration = option;
      } else if (currentStep === 3) {
        updatedUserData.previousTreatments = option;
      } else if (currentStep === 4) {
        handleFinalStepResponse(option, updatedUserData);
        return;
      }
      
      const nextStep = currentStep + 1;
      
      if (nextStep < CHAT_FLOW.length) {
        let nextMessage = CHAT_FLOW[nextStep].message;
        
        // Replace placeholders
        if (updatedUserData.name) {
          nextMessage = nextMessage.replace('{name}', updatedUserData.name);
        }
        if (updatedUserData.issue) {
          nextMessage = nextMessage.replace('{issue}', updatedUserData.issue.toLowerCase());
        }
        
        const nextOptions = CHAT_FLOW[nextStep].options ? CHAT_FLOW[nextStep].options.map((opt, index) => ({
          id: `option_${index}`,
          text: opt,
          value: opt
        })) : undefined;
        
        setChatState(prev => ({
          ...prev,
          userData: updatedUserData,
          chatStep: nextStep
        }));
        
        addMessage(nextMessage, true, nextOptions);
      }
    }, 1000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleTextInput(inputMessage.trim());
  };
  
  const handleTextInput = (message: string) => {
    if (!message) return;
    
    addMessage(message, false);
    setInputMessage('');
    
    const currentStep = chatState.chatStep || 0;
    
    // Handle name input (first step)
    if (currentStep === 0) {
      showTyping();
      setTimeout(() => {
        hideTyping();
        
        const updatedUserData = { ...chatState.userData, name: message };
        const nextStep = 1;
        let nextMessage = CHAT_FLOW[nextStep].message.replace('{name}', message);
        
        const nextOptions = CHAT_FLOW[nextStep].options?.map((opt, index) => ({
          id: `option_${index}`,
          text: opt,
          value: opt
        }));
        
        setChatState(prev => ({
          ...prev,
          userData: updatedUserData,
          chatStep: nextStep
        }));
        
        addMessage(nextMessage, true, nextOptions);
      }, 1000);
    } else if (chatState.currentStep === 'email_capture') {
      // Handle email capture
      showTyping();
      setTimeout(() => {
        hideTyping();
        const updatedUserData = { ...chatState.userData, email: message };
        setChatState(prev => ({
          ...prev,
          userData: updatedUserData,
          currentStep: 'complete'
        }));
        
        addMessage(`Perfect! I've got ${message}. You'll receive some valuable gut health tips over the next week, and I'll personally follow up to see how you're feeling and answer any questions that come up. In the meantime, feel free to check out Inna's resources or just reach out if anything changes!\n\n📧 **Stay in Touch**\n\n✅ Get Weekly Tips & Follow-up\nI'll check in with you next week, plus you'll get valuable gut health insights!`, true);
      }, 1000);
    }
  };


  const handleOptionClick = (option: ChatOption) => {
    selectOption(option.value);
  };

  const handleFinalStepResponse = (option: string, userData: any) => {
    if (option === "Yes, I'd love to schedule a call") {
      handleBooking(userData);
    } else if (option === "Tell me more about the approach first") {
      addMessage("Great question! Inna uses functional lab testing like GI-MAP and DUTCH hormone panels to uncover root causes that standard tests miss. Then she creates personalized nutrition protocols that address YOUR specific imbalances. 92% of her clients find answers where conventional medicine couldn't help. Ready to schedule your consultation?", true, [
        { id: 'schedule_yes', text: "Yes, let's schedule the call", value: "Yes, let's schedule the call" },
        { id: 'consultation_info', text: "What would we discuss in the consultation?", value: "What would we discuss in the consultation?" }
      ]);
    } else if (option === "What would we discuss in the consultation?") {
      addMessage("In your free consultation, Inna will review your health history, discuss your main concerns, and explain which functional tests might be most helpful for your situation. There's no pressure - it's simply a chance to see if this approach feels right for you. Should we get that scheduled?", true, [
        { id: 'schedule_now', text: "Yes, let's schedule now", value: "Yes, let's schedule now" },
        { id: 'think_about_it', text: "I need to think about it", value: "I need to think about it" }
      ]);
    } else if (option === "How much do your programs cost?") {
      addMessage("Investment ranges from functional lab testing to comprehensive coaching programs. Most clients find the testing alone provides huge insights. In your consultation, Inna will recommend the best starting point for your budget and needs. Ready to learn what might work for you?", true, [
        { id: 'schedule_consultation', text: "Yes, let's schedule the consultation", value: "Yes, let's schedule the consultation" },
        { id: 'testing_info', text: "Tell me about just the testing first", value: "Tell me about just the testing first" }
      ]);
    } else if (option === "I need to think about it") {
      handleThinkingAboutIt(userData);
    }
  };

  const handleBooking = (userData: any) => {
    addMessage("Wonderful! I'm so excited for you to connect with Inna. Let me get your email so we can send you the booking link and some helpful resources to prepare for your consultation.", true);
    
    setChatState(prev => ({
      ...prev,
      currentStep: 'email_capture'
    }));
  };

  const handleThinkingAboutIt = (userData: any) => {
    addMessage(`I completely understand, ${userData.name}. This is an important decision and I respect that you want to think it through. Can I get your email so I can follow up with you in a week? I'll also send you some helpful gut health tips in the meantime - no pressure at all.`, true);
    
    setChatState(prev => ({
      ...prev,
      currentStep: 'email_capture'
    }));
  };

  const handleCloseChat = () => {
    // Reset local chat state
    setChatState(prev => ({
      ...prev,
      messages: [],
      currentStep: 'welcome',
      userData: {},
      isTyping: false
    }));
    console.log("Chat closed")
    // Close chat in provider
    closeChat();
  };

  // Cleanup effect
  useEffect(() => {
    return () => {
      // Cleanup if needed
    };
  }, []);

  if (!chatState.isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="w-full max-w-lg h-[85vh] max-h-[600px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-white/20">
        {/* Header */}
        <div className="bg-gradient-to-r from-accent-green via-primary-green to-accent-green text-white p-4 text-center relative overflow-hidden">
          {/* Background pattern */}
          
          <button
            onClick={handleCloseChat}
            className="absolute cursor-pointer top-4 right-4 p-2 hover:bg-white/20 rounded-xl transition-all duration-300 group z-100"
            aria-label="Close chat"
          >
            <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
          </button>
          
          <div className="">
            <h3 className="text-2xl font-bold mb-2">💚 Inna's Health Assistant</h3>
            <p className="text-sm opacity-90">Discover if functional nutrition is right for you!</p>
            <div className="flex items-center justify-center space-x-4 mt-3 text-xs opacity-80">
              <span className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                <span>Online now</span>
              </span>
              <span>•</span>
              <span>500+ clients helped</span>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-gray-50/50 to-white">
          {chatState.messages.map((message) => (
            <div key={message.id} className="animate-slide-in">
              <div className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                <div
                  className={`chat-message ${
                    message.isBot ? 'bot-message' : 'user-message'
                  }`}
                  dangerouslySetInnerHTML={{ __html: message.text }}
                />
              </div>
              
              {message.options && (
                <div className="mt-3 space-y-2">
                  {message.options.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleOptionClick(option)}
                      className={`chat-option w-full ${
                        option.featured ? 'featured' : ''
                      }`}
                    >
                      {option.text}
                      {option.featured && (
                        <span className="ml-2 bg-white/20 px-2 py-1 rounded-full text-xs">
                          MOST COMMON
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          {chatState.isTyping && (
            <div className="flex justify-start">
              <div className="bot-message flex items-center space-x-2">
                <span className="text-gray-700">Rosales is typing</span>
                <div className="flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-accent-green rounded-full animate-typing" />
                  <div className="w-1.5 h-1.5 bg-accent-green rounded-full animate-typing" style={{ animationDelay: '0.2s' }} />
                  <div className="w-1.5 h-1.5 bg-accent-green rounded-full animate-typing" style={{ animationDelay: '0.4s' }} />
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-200/50 bg-white/80 backdrop-blur-sm">
          <div className="flex space-x-3">
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && inputMessage.trim() && handleSubmit(e)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-3 border border-gray-300/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-green/50 focus:border-accent-green bg-white/80 backdrop-blur-sm shadow-light text-gray-900 placeholder-gray-500 transition-all duration-300"
            />
            <button
              onClick={handleSubmit}
              disabled={!inputMessage.trim()}
              className="bg-gradient-to-r from-accent-green to-primary-green hover:from-primary-green hover:to-accent-green disabled:from-gray-300 disabled:to-gray-400 text-white p-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 disabled:hover:scale-100 group"
            >
              <Send size={18} className="group-hover:translate-x-0.5 transition-transform duration-300" />
            </button>
          </div>
          <div className="flex items-center justify-center mt-3 text-xs text-gray-600">
            <span className="flex items-center space-x-1">
              <MessageCircle size={12} className="text-gray-600" />
              <span className="text-gray-600">Free 15-minute consultation available</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}