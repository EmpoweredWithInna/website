'use client';

import { useState, useEffect, useRef } from 'react';
import { X, Send, MessageCircle, Phone } from 'lucide-react';
import { useChat } from './chatProvider';
import type { ChatSystemState, ChatMessage, ChatOption, UserData } from '../types';

interface ChatSystemProps {
  chatState: ChatSystemState;
  setChatState: (state: ChatSystemState | ((prev: ChatSystemState) => ChatSystemState)) => void;
}

const PRICING_CONFIG = {
  small: { min: 80, max: 120 },   // 0-4,500 sq ft
  medium: { min: 120, max: 180 }, // 4,501-6,500 sq ft
  large: { min: 180, max: 250 },  // 6,501-8,500 sq ft
  xl: 'contact'                   // 8,500+ sq ft
};

const AREAS = {
  austin: 'South Austin',
  buda: 'Buda, TX', 
  kyle: 'Kyle, TX',
  manchaca: 'Manchaca, TX',
  other: 'Other Austin Area'
};

const SERVICES = {
  mowing: '✂️ Lawn mowing & maintenance',
  maintenance: '🌿 Full maintenance package',
  landscaping: '🌺 Landscape design & installation',
  cleanup: '🍂 Seasonal cleanup services'
};

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
      text: `Hi! I'm here to help transform your Austin-area yard! 🌹<br><br><strong>John and the team have helped 500+ homeowners</strong> in Buda, Kyle, Manchaca, and South Austin get the beautiful lawn they want.<br><br><strong>Which service interests you most?</strong>`,
      isBot: true,
      timestamp: new Date(),
      options: [
        {
          id: 'mowing',
          text: '✂️ Lawn mowing & maintenance',
          value: 'mowing',
          featured: true
        },
        {
          id: 'maintenance', 
          text: '🌿 Full maintenance package',
          value: 'maintenance'
        },
        {
          id: 'landscaping',
          text: '🌺 Landscape design & installation', 
          value: 'landscaping'
        },
        {
          id: 'cleanup',
          text: '🍂 Seasonal cleanup services',
          value: 'cleanup'
        }
      ]
    };

    setChatState(prev => ({
      ...prev,
      messages: [welcomeMessage],
      currentStep: 'welcome'
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

  const selectService = (serviceId: string) => {
    const serviceName = SERVICES[serviceId as keyof typeof SERVICES];
    addMessage(serviceName, false);
    
    showTyping();
    setTimeout(() => {
      hideTyping();
      
      if (serviceId === 'mowing') {
        setChatState(prev => ({
          ...prev,
          currentStep: 'area',
          userData: { ...prev.userData, service: serviceId }
        }));
        
        addMessage(
          'Perfect! For lawn mowing, I can give you instant pricing. Let me get a few quick details:',
          true
        );
        
        setTimeout(() => showAreaOptions(), 1000);
      } else {
        setChatState(prev => ({
          ...prev,
          currentStep: 'contact',
          userData: { ...prev.userData, service: serviceId }
        }));
        
        addMessage(
          `Great choice! ${serviceName} requires a custom estimate based on your specific needs.<br><br>Let me connect you with John for a free consultation and personalized quote.<br><br><strong>What's the best phone number to reach you?</strong>`,
          true
        );
      }
    }, 1500);
  };

  const showAreaOptions = () => {
    const areaOptions: ChatOption[] = [
      { id: 'austin', text: '🏙️ South Austin', value: 'austin' },
      { id: 'buda', text: '🏡 Buda', value: 'buda' },
      { id: 'kyle', text: '🌳 Kyle', value: 'kyle' },
      { id: 'manchaca', text: '🏞️ Manchaca', value: 'manchaca' },
      { id: 'other', text: '📍 Other Austin area', value: 'other' }
    ];

    addMessage(
      'What area is your property in? This helps us with scheduling and routing:',
      true,
      areaOptions
    );
  };

  const selectArea = (areaId: string) => {
    const areaName = AREAS[areaId as keyof typeof AREAS];
    addMessage(areaName, false);
    
    setChatState(prev => ({
      ...prev,
      userData: { ...prev.userData, area: areaId }
    }));

    showTyping();
    setTimeout(() => {
      hideTyping();
      
      let response = 'Great! ';
      switch(areaId) {
        case 'buda':
          response += 'Buda is one of our core service areas with lots of happy customers! 🏡';
          break;
        case 'kyle':
          response += 'Kyle is growing fast and we have many satisfied customers there! 🌳';
          break;
        case 'manchaca':
          response += 'Manchaca is one of our favorite areas - beautiful properties! 🏞️';
          break;
        case 'austin':
          response += 'South Austin is where we started - tons of experience there! 🏙️';
          break;
        default:
          response += 'We serve most of the greater Austin area! 📍';
      }
      
      addMessage(response, true);
      setChatState(prev => ({ ...prev, currentStep: 'size' }));
      setTimeout(() => showSizeOptions(), 1500);
    }, 1000);
  };

  const showSizeOptions = () => {
    const sizeOptions: ChatOption[] = [
      { id: 'small', text: '🏠 Small Yard\n0-4,500 sq ft', value: 'small' },
      { id: 'medium', text: '🏡 Medium Yard\n4,501-6,500 sq ft', value: 'medium' },
      { id: 'large', text: '🏘️ Large Yard\n6,501-8,500 sq ft', value: 'large' },
      { id: 'xl', text: '🏞️ Extra Large\n8,500+ sq ft', value: 'xl' }
    ];

    addMessage(
      'What\'s your property size? This helps me give you accurate pricing:',
      true,
      sizeOptions
    );
  };

  const selectSize = (sizeId: string) => {
    const sizeLabels = {
      small: '🏠 Small yard (0-4,500 sq ft)',
      medium: '🏡 Medium yard (4,501-6,500 sq ft)', 
      large: '🏘️ Large yard (6,501-8,500 sq ft)',
      xl: '🏞️ Extra Large yard (8,500+ sq ft)'
    };

    addMessage(sizeLabels[sizeId as keyof typeof sizeLabels], false);
    
    setChatState(prev => ({
      ...prev,
      userData: { ...prev.userData, size: sizeId }
    }));

    showTyping();
    setTimeout(() => {
      hideTyping();
      
      if (sizeId === 'xl') {
        setChatState(prev => ({ ...prev, currentStep: 'contact' }));
        addMessage(
          'For extra large properties, we provide custom quotes to ensure accurate pricing. Let me connect you with John for a free estimate!<br><br><strong>What\'s the best phone number to reach you?</strong>',
          true
        );
      } else {
        setChatState(prev => ({ ...prev, currentStep: 'pricing' }));
        showPricing(sizeId);
      }
    }, 1000);
  };

  const showPricing = (size: string) => {
    const pricing = PRICING_CONFIG[size as keyof typeof PRICING_CONFIG] as { min: number; max: number };
    const areaName = AREAS[chatState.userData.area as keyof typeof AREAS] || 'Austin area';

    addMessage(
      `<div style="color: #111827 !important;">
        🎉 Here's your instant quote for lawn mowing service!<br><br>
        💰 <strong style="color: #111827 !important;">Spring Special Active:</strong> $20 OFF your first service when you book 2 services!<br><br>
        <div class="bg-gradient-to-r from-accent-green to-primary-green p-4 rounded-lg text-center mt-3" style="color: #000000 !important;">
          <div class="text-2xl font-bold" style="color: #000000 !important;">$${pricing.min} - $${pricing.max}</div>
          <div class="text-sm opacity-90" style="color: #000000 !important;">Per mowing service in ${areaName}</div>
        </div><br>
        <button style="color: #000000 !important;" class="w-full bg-warm-orange hover:bg-orange-600 text-white py-3 px-6 rounded-full font-semibold transition-all mt-3" onclick="window.chatInstance?.bookService()">
          📅 Book Service & Save $20
          <span class="ml-2 bg-white/20 px-2 py-1 rounded-full text-xs">SPRING SPECIAL</span>
        </button>
      </div>`,
      true
    );
  };

  const bookService = () => {
    addMessage('📅 Book Service & Save $20', false);
    
    showTyping();
    setTimeout(() => {
      hideTyping();
      setChatState(prev => ({ ...prev, currentStep: 'contact' }));
      addMessage(
        '🎉 Awesome! You\'re getting our Spring Special - $20 OFF your first service when you book 2 services!<br><br><strong>What\'s the best phone number for John to call you back within 2 hours?</strong><br><br>Or call us now at <strong>(512) 694-1773</strong> 📞',
        true
      );
    }, 1000);
  };

  const handleTextInput = (message: string) => {
    addMessage(message, false);
    setInputMessage('');

    if (chatState.currentStep === 'contact') {
      handleContactInput(message);
    } else {
      handleGeneralInput(message);
    }
  };

  const handleContactInput = (message: string) => {
    showTyping();
    
    if (!chatState.userData.phone) {
      setChatState(prev => ({
        ...prev,
        userData: { ...prev.userData, phone: message }
      }));
      
      setTimeout(() => {
        hideTyping();
        addMessage('Perfect! <strong>And what\'s your first name?</strong>', true);
      }, 1000);
    } else if (!chatState.userData.name) {
      setChatState(prev => ({
        ...prev,
        userData: { ...prev.userData, name: message },
        currentStep: 'complete'
      }));
      
      setTimeout(() => {
        hideTyping();
        completeContact(message);
      }, 1000);
    }
  };

  const completeContact = (name: string) => {
    const { service, area, size, phone } = chatState.userData;
    
    let serviceDescription = '';
    if (service === 'mowing' && size === 'xl') {
      serviceDescription = 'mowing service for your large property';
    } else if (service === 'mowing') {
      serviceDescription = `mowing service in ${AREAS[area as keyof typeof AREAS] || 'your area'}`;
    } else {
      const serviceMap = {
        maintenance: 'full maintenance package (save 25%!)',
        landscaping: 'landscape design & installation',
        cleanup: 'seasonal cleanup services'
      };
      serviceDescription = serviceMap[service as keyof typeof serviceMap] || 'selected service';
    }

    const actionWord = (service === 'mowing' && size !== 'xl') ? 'schedule' : 'discuss';

    addMessage(
      `Perfect, ${name}! John will personally call you at ${phone} within 2 hours to ${actionWord} your ${serviceDescription}.<br><br>You'll receive a text confirmation with details. Thanks for choosing Rosales! 🌹<br><br><strong>Questions before then? Call us at (512) 694-1773</strong>`,
      true
    );
  };

  const handleGeneralInput = (message: string) => {
    showTyping();
    
    setTimeout(() => {
      hideTyping();
      
      const lowerMsg = message.toLowerCase();
      
      if (lowerMsg.includes('mowing') || lowerMsg.includes('lawn') || lowerMsg.includes('cut')) {
        selectService('mowing');
      } else if (lowerMsg.includes('maintenance') || lowerMsg.includes('package')) {
        selectService('maintenance');
      } else if (lowerMsg.includes('landscape') || lowerMsg.includes('design')) {
        selectService('landscaping');
      } else if (lowerMsg.includes('cleanup') || lowerMsg.includes('seasonal')) {
        selectService('cleanup');
      } else if (lowerMsg.includes('price') || lowerMsg.includes('cost') || lowerMsg.includes('quote')) {
        addMessage('Great! I can provide instant pricing for lawn mowing services. For other services, I\'ll connect you with John for a custom quote.<br><br>Which service interests you?', true);
      } else if (lowerMsg.includes('call') || lowerMsg.includes('phone')) {
        setChatState(prev => ({ ...prev, currentStep: 'contact' }));
        addMessage('Perfect! John will call you within 2 hours. What\'s the best number to reach you?<br><br>Or call us right now at <strong>(512) 694-1773</strong> 📞', true);
      } else {
        addMessage('Thanks for your message! I can help you with:<br><br>✂️ <strong>Lawn mowing</strong> (instant quotes)<br>🌿 <strong>Full maintenance packages</strong><br>🌺 <strong>Landscape design</strong><br>🍂 <strong>Seasonal cleanup</strong><br><br>Which service interests you most?', true);
      }
    }, 1000);
  };

  const handleOptionClick = (option: ChatOption) => {
    switch (chatState.currentStep) {
      case 'welcome':
        selectService(option.value);
        break;
      case 'area':
        selectArea(option.value);
        break;
      case 'size':
        selectSize(option.value);
        break;
    }
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

  // Expose bookService globally for button click
  useEffect(() => {
    (window as any).chatInstance = { bookService };
    return () => {
      delete (window as any).chatInstance;
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
            <h3 className="text-2xl font-bold mb-2">🌹 Rosales Quick Quote</h3>
            <p className="text-sm opacity-90">Get your Austin yard estimate in 60 seconds!</p>
            <div className="flex items-center justify-center space-x-4 mt-3 text-xs opacity-80">
              <span className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                <span>Online now</span>
              </span>
              <span>•</span>
              <span>500+ happy customers</span>
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
              onKeyPress={(e) => e.key === 'Enter' && inputMessage.trim() && handleTextInput(inputMessage.trim())}
              placeholder="Type your message..."
              className="flex-1 px-4 py-3 border border-gray-300/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-green/50 focus:border-accent-green bg-white/80 backdrop-blur-sm shadow-light text-gray-900 placeholder-gray-500 transition-all duration-300"
            />
            <button
              onClick={() => inputMessage.trim() && handleTextInput(inputMessage.trim())}
              disabled={!inputMessage.trim()}
              className="bg-gradient-to-r from-accent-green to-primary-green hover:from-primary-green hover:to-accent-green disabled:from-gray-300 disabled:to-gray-400 text-white p-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 disabled:hover:scale-100 group"
            >
              <Send size={18} className="group-hover:translate-x-0.5 transition-transform duration-300" />
            </button>
          </div>
          <div className="flex items-center justify-center mt-3 text-xs text-gray-600">
            <span className="flex items-center space-x-1">
              <Phone size={12} className="text-gray-600" />
              <span className="text-gray-600">Or call (512) 694-1773 for immediate assistance</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}