import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp, MessageSquare, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/siteConfig';

interface FloatingActionsProps {
  onOpenOrderModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenOrderModal }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-2.5">
      {/* Back to Top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top of page"
          className="p-3 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 shadow-lg ring-1 ring-slate-200 dark:ring-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition transform hover:-translate-y-0.5"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Floating Call Button */}
      <a
        href={`tel:${BUSINESS_CONFIG.phone}`}
        aria-label="Call Verma Medical Hall"
        className="group relative flex items-center gap-2 p-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-xl transition transform hover:-translate-y-0.5"
      >
        <Phone className="w-5 h-5" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-semibold pr-1">
          Call Pharmacist
        </span>
      </a>

      {/* Floating WhatsApp Medicine Order Button */}
      <button
        onClick={onOpenOrderModal}
        id="floating-whatsapp-trigger"
        aria-label="Order medicine on WhatsApp"
        className="group relative flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm shadow-xl transition transform hover:-translate-y-0.5"
      >
        {/* Pulse indicator */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>

        {/* WhatsApp Icon */}
        <MessageSquare className="w-5 h-5 fill-current" />
        
        <span className="font-bold tracking-tight text-xs sm:text-sm">
          WhatsApp Order
        </span>

        {/* Floating pill badge */}
        <span className="hidden sm:inline-flex items-center gap-1 text-[10px] bg-black/20 px-2 py-0.5 rounded-full font-medium">
          <Sparkles className="w-2.5 h-2.5 text-yellow-200" />
          Fast Dispense
        </span>
      </button>
    </div>
  );
};
