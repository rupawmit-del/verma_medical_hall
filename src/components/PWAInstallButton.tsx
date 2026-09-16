import React from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { IOSInstallGuide } from './IOSInstallGuide';
import { Download, CheckCircle2 } from 'lucide-react';

interface PWAInstallButtonProps {
  className?: string;
  isMobileDrawer?: boolean;
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({
  className = '',
  isMobileDrawer = false
}) => {
  const { isInstalled, showGuide, setShowGuide, triggerInstall } = usePWAInstall();

  // If already running as installed standalone PWA, hide or show quiet confirmation
  if (isInstalled) {
    if (isMobileDrawer) {
      return (
        <div className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-emerald-700 bg-emerald-50 rounded-lg dark:bg-emerald-950/40 dark:text-emerald-300">
          <CheckCircle2 className="w-4 h-4" />
          <span>App Installed on Device</span>
        </div>
      );
    }
    return null;
  }

  const handleClick = async () => {
    await triggerInstall();
  };

  return (
    <>
      <button
        id="pwa-install-header-btn"
        onClick={handleClick}
        aria-label="Add Verma Medical Hall to Home Screen"
        className={`group inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 cursor-pointer ${
          isMobileDrawer
            ? 'w-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm'
            : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 dark:bg-emerald-950/50 dark:hover:bg-emerald-900/60 dark:text-emerald-200 dark:border-emerald-800'
        } ${className}`}
      >
        <span className="text-base" role="img" aria-label="mobile phone">📲</span>
        <span>Add to Home</span>
        <Download className="w-3.5 h-3.5 opacity-70 group-hover:translate-y-0.5 transition-transform" />
      </button>

      <IOSInstallGuide isOpen={showGuide} onClose={() => setShowGuide(false)} />
    </>
  );
};
