import React from 'react';
import { Share, PlusSquare, X, Smartphone } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/siteConfig';

interface IOSInstallGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IOSInstallGuide: React.FC<IOSInstallGuideProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="ios-modal-title"
    >
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h3 id="ios-modal-title" className="font-bold text-slate-900 dark:text-white text-base">
                Install {BUSINESS_CONFIG.shortName} App
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Quick access right from your iPhone / iPad home screen
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            aria-label="Close installation guide"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-5 space-y-4 text-sm text-slate-600 dark:text-slate-300">
          <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60">
            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
              1
            </div>
            <div>
              <p className="font-semibold text-slate-800 dark:text-white">
                Tap the Share button
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 flex items-center gap-1.5">
                Located at the bottom of Safari <Share className="w-3.5 h-3.5 inline text-blue-600" />
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60">
            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
              2
            </div>
            <div>
              <p className="font-semibold text-slate-800 dark:text-white">
                Select "Add to Home Screen"
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 flex items-center gap-1.5">
                Scroll down the share sheet to find <PlusSquare className="w-3.5 h-3.5 inline text-slate-700 dark:text-slate-300" />
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60">
            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
              3
            </div>
            <div>
              <p className="font-semibold text-slate-800 dark:text-white">
                Tap "Add" in top-right corner
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                The app icon will instantly appear on your home screen for fast one-tap medicine refills.
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition shadow-sm"
        >
          Got it, Close Guide
        </button>
      </div>
    </div>
  );
};
