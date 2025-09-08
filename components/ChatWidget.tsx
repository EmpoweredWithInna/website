'use client';

import { useState } from 'react';
import { useChat } from './chatProvider';
import ChatSystem from './chatSystem';
import type { ChatSystemState } from '../types';

export function ChatWidget() {
  const { isOpen, openChat } = useChat();
  
  const [localChatState, setLocalChatState] = useState<ChatSystemState>({
    isOpen: false,
    messages: [],
    currentStep: 0,
    userData: {},
    isTyping: false
  });

  const handleOpenChat = () => {
    setLocalChatState(prev => ({ ...prev, isOpen: true }));
    openChat();
  };

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <div className="fixed bottom-8 right-8 z-50">
          <button
            onClick={handleOpenChat}
            className="group bg-gradient-to-r from-primary to-primary  text-white p-4 rounded-2xl shadow-2xl hover:from-accent-green hover:to-primary transition-all duration-300 hover:scale-110"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div className="hidden sm:block text-left">
                <div className="font-bold text-sm">Chat with Inna</div>
                <div className="text-xs opacity-90">Get health guidance</div>
              </div>
            </div>
            
            {/* Pulse animation */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary to-accent-green animate-ping opacity-20"></div>
          </button>
        </div>
      )}

      {/* Chat System */}
      {isOpen && (
        <ChatSystem 
          chatState={{ ...localChatState, isOpen }}
          setChatState={setLocalChatState}
        />
      )}
    </>
  );
}