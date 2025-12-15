'use client';

import { useState, useEffect } from 'react';
import { ChatKit, useChatKit } from '@openai/chatkit-react';
import { Coffee, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChatKitWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [clientSecret, setClientSecret] = useState<string | null>(null);

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
    startScreen: {
      greeting: "Hi! I'm Vinh's AI assistant. Ask me anything about his experience, projects, or skills!",
    }
  });


  const handleOpenChat = () => {
    setIsOpen(true);
  };

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
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
        aria-label="Open coffee chat"
      >
        <Coffee className="w-8 h-8" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="fixed bottom-24 right-6 z-50 bg-background rounded-xl shadow-2xl w-full h-full md:w-[400px] md:h-[600px] md:max-h-[80vh] flex flex-col overflow-hidden"
              role="dialog"
              aria-modal="true"
              aria-labelledby="chat-title"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b bg-background">
                <h2 id="chat-title" className="font-semibold text-lg flex items-center gap-2">
                  <Coffee className="w-5 h-5" />
                  Virtual Coffee Chat
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-accent rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
                  aria-label="Close chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* ChatKit Component */}
              <div className="flex-1 overflow-hidden">
                <ChatKit control={control} className="w-full h-full" />
              </div>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
