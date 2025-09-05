'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { ChatSystem } from '../components/chatSystem';
import { ChatWidget } from '../components/ChatWidget';
import type { ChatSystemState } from '../types';

interface ChatContextType {
  isOpen: boolean;
  openChat: () => void;
  closeChat: () => void;
  openChatWithService: (service: string) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [chatState, setChatState] = useState<ChatSystemState>({
    isOpen: false,
    messages: [],
    currentStep: 'welcome',
    userData: {},
    isTyping: false,
  });

  const openChat = () => {
    setChatState(prev => ({ ...prev, isOpen: true }));
  };

  const closeChat = () => {
    setChatState(prev => ({ ...prev, isOpen: false }));
  };

  const openChatWithService = (service: string) => {
    setChatState(prev => ({
      ...prev,
      isOpen: true,
      userData: { ...prev.userData, service },
      currentStep: service === 'mowing' ? 'area' : 'contact'
    }));
  };

  return (
    <ChatContext.Provider value={{ 
      isOpen: chatState.isOpen, 
      openChat, 
      closeChat, 
      openChatWithService 
    }}>
      {children}
      <ChatWidget />
      <ChatSystem 
        chatState={chatState} 
        setChatState={setChatState} 
      />
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
}