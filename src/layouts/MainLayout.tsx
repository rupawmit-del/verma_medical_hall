import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';
import { FloatingActions } from '../components/FloatingActions';
import { WhatsAppOrderModal } from '../components/WhatsAppOrderModal';
import { WifiOff } from 'lucide-react';

export const MainLayout: React.FC = () => {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedMedicine, setSelectedMedicine] = useState('');
  const [isOnline, setIsOnline] = useState(typeof navigator !== 'undefined' ? navigator.onLine : true);

  // Dark mode state with persistence
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('verma_dark_mode');
      if (saved !== null) return saved === 'true';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('verma_dark_mode', String(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Online status listener for PWA
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleOpenOrder = (medicineName: string = '') => {
    setSelectedMedicine(medicineName);
    setIsOrderModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans antialiased selection:bg-emerald-500 selection:text-white">
      {/* Offline PWA Indicator banner */}
      {!isOnline && (
        <div className="bg-amber-600 text-white text-xs py-2 px-4 text-center font-semibold flex items-center justify-center gap-2 sticky top-0 z-50 shadow-md">
          <WifiOff className="w-4 h-4" />
          <span>You are currently browsing offline. Cached pharmacy information is being shown.</span>
        </div>
      )}

      {/* Main Header */}
      <Navbar
        onOpenOrderModal={() => handleOpenOrder('')}
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
      />

      {/* Dynamic Page Content */}
      <main className="flex-1">
        <Outlet context={{ onOpenOrderModal: handleOpenOrder }} />
      </main>

      {/* Mandatory Footer with global tracking & WMIT anchor */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingActions onOpenOrderModal={() => handleOpenOrder('')} />

      {/* WhatsApp Order Modal */}
      <WhatsAppOrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        prefilledMedicine={selectedMedicine}
      />
    </div>
  );
};
