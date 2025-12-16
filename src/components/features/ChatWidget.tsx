'use client';

import { useState, useEffect, useRef } from 'react';
import { ChatKit, useChatKit } from '@openai/chatkit-react';
import { X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function ChatKitWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [isChatReady, setIsChatReady] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const { control } = useChatKit({
    api: {
      async getClientSecret(existing) {
        if (existing) {
          return existing;
        }
        if (clientSecret) {
          return clientSecret;
        }
        try {
          const response = await fetch('/api/create-session', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          });

          if (!response.ok) {
            throw new Error('Failed to fetch session');
          }

          const data = await response.json();
          return data.client_secret;
        } catch (error) {
          console.error('Error fetching ChatKit session:', error);
          throw error;
        }
      },
    },
    theme: {
      radius: "round", 
      density: "compact",
      typography: { 
        fontFamily: "var(--font-chubbo)",
        baseSize: 14,
      },
    },
    
    composer: {
      placeholder: "Type your message here...",
    },
    startScreen: {
      greeting: "Hi! I'm Vinh's AI assistant. Ask me anything about his experience, projects, or skills!",
      prompts: [
        { 
          label: "Tell me about his experience.", 
          prompt: "Can you provide an overview of Vinh Bui's professional experience?"
        },
        { 
          label: "What projects has he worked on?", 
          prompt: "Can you share some details about the projects Vinh Bui has worked on?"
        },
        { 
          label: "What are his skills?", 
          prompt: "What technical skills and expertise does Vinh Bui possess?"
        },
      ]
    }
  });


  const handleOpenChat = () => {
    setIsOpen(true);
    setIsChatReady(false);
  };

  // Detect when ChatKit content is actually rendered
  useEffect(() => {
    if (!isOpen || isChatReady) return;

    const checkChatReady = () => {
      if (chatContainerRef.current) {
        const chatContent = chatContainerRef.current.querySelector('[data-chatkit-root], [class*="chatkit"], form, textarea');
        if (chatContent) {
          setIsChatReady(true);
          return true;
        }
      }
      return false;
    };

    // Try immediately
    if (checkChatReady()) return;

    // Poll for ChatKit content to appear
    const intervalId = setInterval(() => {
      if (checkChatReady()) {
        clearInterval(intervalId);
      }
    }, 50);

    // Fallback timeout
    const timeoutId = setTimeout(() => {
      clearInterval(intervalId);
      setIsChatReady(true);
    }, 2000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [isOpen, isChatReady]);

  // Pre-load session on mount for instant chat
  useEffect(() => {
    const prefetchSession = async () => {
      try {
        const response = await fetch('/api/create-session', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setClientSecret(data.client_secret);
        }
      } catch (error) {
        console.error('Error pre-loading session:', error);
      }
    };

    if (!clientSecret) {
      prefetchSession();
    }
  }, [clientSecret]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);


  return (
    <>
      <button
        onClick={handleOpenChat}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
        aria-label="Open coffee chat"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="fixed inset-0 sm:inset-auto sm:bottom-24 sm:right-6 z-50 bg-background sm:rounded-xl shadow-2xl sm:w-[400px] sm:h-[600px] sm:max-h-[80vh] flex flex-col overflow-hidden"
              role="dialog"
              aria-modal="true"
              aria-labelledby="chat-title"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b bg-white">
                <h2 id="chat-title" className="font-semibold text-lg flex items-center gap-2 font-boska text-gray-900 ">
                  <Image src="/cup.png" alt="Coffee cup" width={20} height={20} className="w-5 h-5" />
                  Virtual Coffee Chat
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
                  aria-label="Close chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* ChatKit Component */}
              <div className="flex-1 overflow-hidden relative">
                {/* Loading animation overlay */}
                <AnimatePresence>
                  {!isChatReady && (
                    <motion.div
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10"
                    >
                      <div className="relative">
                        {/* Animated coffee cup */}
                        <motion.div
                          animate={{
                            y: [0, -10, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <Image src="/cup.png" alt="Coffee cup" width={48} height={48} className="w-12 h-12" />
                        </motion.div>

                        {/* Steam animation */}
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex gap-1">
                          {[0, 1, 2].map((i) => (
                            <motion.div
                              key={i}
                              className="w-1 h-3 bg-primary/30 rounded-full"
                              animate={{
                                y: [-5, -15],
                                opacity: [0.6, 0],
                                scale: [1, 0.8],
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.2,
                                ease: "easeOut"
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      <motion.p
                        className="mt-6 text-gray-600 font-chubbo"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        Brewing your chat...
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* ChatKit always rendered but hidden until ready */}
                <div
                  ref={chatContainerRef}
                  className={`w-full h-full transition-opacity duration-300 ${isChatReady ? 'opacity-100' : 'opacity-0'}`}
                >
                  <ChatKit control={control} className="w-full h-full" />
                </div>
              </div>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
