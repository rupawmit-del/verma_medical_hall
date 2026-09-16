import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_CONFIG } from '../config/siteConfig';
import { 
  MapPin, Phone, Mail, Clock, ShieldCheck, HeartPulse, 
  ExternalLink, MessageSquare, AlertCircle, X 
} from 'lucide-react';

export default function Footer() {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | 'disclaimer' | 'wmit' | null>(null);

  // STEP 11: Mandatory Global Tracking Hook
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://crm.webmakerit.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid')!);
    }
    if (!cid) return;
    let visitorId = localStorage.getItem('wmit_visitor_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);
    let sessionId = sessionStorage.getItem('wmit_session_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);

    const getPageName = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split('?')[0] : 'Home';
    };

    const sendInitPayload = () => {
      const payload = {
        cid: cid,
        visitor_id: visitorId,
        session_id: sessionId,
        page_name: getPageName(),
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent,
        action: 'init'
      };
      fetch(TRACKING_ENDPOINT, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(() => {});
    };

    const sendExitPayload = () => {
      const payload = {
        cid: cid,
        session_id: sessionId,
        page_name: getPageName(),
        action: 'page_change'
      };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true
        }).catch(() => {});
      }
    };

    sendInitPayload();

    // === IDLE TIMEOUT LOGIC FOR REACT ===
    let idleTimer: any;
    let isIdle = false;
    const resetIdleTimer = () => {
      if (isIdle) {
        isIdle = false;
        sendInitPayload(); // Wake up! Resume tracking
      }
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isIdle = true;
        sendExitPayload(); // Inactive! Stop tracking
      }, 60000); // 60 Seconds
    };

    const activityEvents = ['mousemove', 'keydown', 'scroll', 'touchstart'];
    activityEvents.forEach(evt => document.addEventListener(evt, resetIdleTimer, { passive: true }));
    resetIdleTimer(); // Initialize idle timer
    // ====================================

    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };

    window.addEventListener('popstate', handleLocationChange);
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sendExitPayload();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', sendExitPayload);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', sendExitPayload);
      activityEvents.forEach(evt => document.removeEventListener(evt, resetIdleTimer));
      clearTimeout(idleTimer);
    };
  }, []);

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold shadow-lg shadow-emerald-900/40">
                <HeartPulse className="w-6 h-6" />
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight block">
                  {BUSINESS_CONFIG.name}
                </span>
                <span className="text-[11px] font-semibold text-emerald-400 tracking-wider uppercase block">
                  Bihar Sharif Chemist & Druggist
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              {BUSINESS_CONFIG.tagline}. Serving Bihar Sharif for over 25 years with authentic medicines, surgical supplies, baby care essentials, and rapid doorstep delivery.
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Registered Pharmacy • 100% Genuine Medicine Guarantee</span>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={BUSINESS_CONFIG.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-[#25D366] hover:text-white flex items-center justify-center text-slate-300 transition"
                aria-label="WhatsApp Contact"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={`tel:${BUSINESS_CONFIG.phone}`}
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 hover:text-white flex items-center justify-center text-slate-300 transition"
                aria-label="Phone Call"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_CONFIG.googleMaps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-emerald-600 hover:text-white flex items-center justify-center text-slate-300 transition"
                aria-label="Google Map Directions"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-emerald-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-emerald-400 transition">
                  Services & Categories
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-emerald-400 transition">
                  Store Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400 transition">
                  Contact & Map
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-emerald-400 transition">
                  Staff / Patient Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Working Hours & Emergency */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-400" />
              Working Hours
            </h4>
            <div className="space-y-2 text-sm text-slate-400">
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span>Mon - Sat:</span>
                <span className="font-semibold text-white">7:30 AM – 10:30 PM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span>Sunday:</span>
                <span className="font-semibold text-white">8:00 AM – 9:30 PM</span>
              </div>
              <div className="p-3 mt-2 rounded-xl bg-emerald-950/40 border border-emerald-900/60 text-xs">
                <span className="font-bold text-emerald-400 block mb-0.5">24/7 Emergency Support</span>
                <span className="text-slate-300">Urgent life-saving drugs & oxygen can be dispatched on request:</span>
                <a href={`tel:${BUSINESS_CONFIG.phone}`} className="block font-mono font-bold text-emerald-400 mt-1">
                  📞 {BUSINESS_CONFIG.displayPhone}
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Location & Google Map */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400" />
              Visit Our Store
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {BUSINESS_CONFIG.address.full}
            </p>
            <div className="rounded-xl overflow-hidden border border-slate-800 h-28 w-full relative group">
              <iframe
                title="Verma Medical Hall Map"
                src={BUSINESS_CONFIG.googleMaps.embedQuery}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-80 group-hover:opacity-100 transition"
              ></iframe>
            </div>
            <a
              href={BUSINESS_CONFIG.googleMaps.searchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-semibold"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Legal Policies Navigation */}
        <div className="py-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 border-b border-slate-800/80">
          <button
            onClick={() => setLegalModal('privacy')}
            className="hover:text-slate-200 transition underline-offset-4 hover:underline"
          >
            Privacy Policy
          </button>
          <span>•</span>
          <button
            onClick={() => setLegalModal('terms')}
            className="hover:text-slate-200 transition underline-offset-4 hover:underline"
          >
            Terms & Conditions
          </button>
          <span>•</span>
          <button
            onClick={() => setLegalModal('disclaimer')}
            className="hover:text-slate-200 transition underline-offset-4 hover:underline"
          >
            Medical Disclaimer
          </button>
        </div>

        {/* Copyright & Mandatory WMIT Anchor in Center */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} {BUSINESS_CONFIG.name}. All rights reserved.
          </div>

          {/* EXACT MANDATORY PRESERVED WMIT POPUP TRIGGER (CENTER OF COPYRIGHT LINE) */}
          <div className="text-center font-medium">
            <a
              href="#"
              className="wmit-popup-trigger text-slate-400 hover:text-emerald-400 transition underline-offset-2 underline"
              onClick={(e) => {
                // If external WMIT script didn't intercept, show clean info dialog
                if (!window.location.hash.includes('wmit')) {
                  e.preventDefault();
                  setLegalModal('wmit');
                }
              }}
            >
              Developed by WMIT
            </a>
          </div>

          <div>
            Licensed Retail Chemist • Bihar Sharif, Nalanda (Bihar)
          </div>
        </div>
      </div>

      {/* Legal & WMIT Modals */}
      {legalModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs text-slate-800 dark:text-slate-200"
          role="dialog"
        >
          <div className="w-full max-w-lg rounded-2xl bg-white dark:bg-slate-900 p-6 shadow-2xl ring-1 ring-slate-200 dark:ring-slate-800 animate-in fade-in duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                {legalModal === 'privacy' && 'Privacy Policy'}
                {legalModal === 'terms' && 'Terms of Service'}
                {legalModal === 'disclaimer' && 'Medical & Dispensing Disclaimer'}
                {legalModal === 'wmit' && 'WebMaker IT Solutions'}
              </h3>
              <button
                onClick={() => setLegalModal(null)}
                className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-h-80 overflow-y-auto space-y-3 leading-relaxed">
              {legalModal === 'privacy' && (
                <>
                  <p>
                    {BUSINESS_CONFIG.name} respects your privacy. We collect patient contact information, delivery addresses, and doctor prescriptions strictly to process authorized medicine orders and consultations.
                  </p>
                  <p>
                    We never sell, rent, or distribute medical prescription records or personal customer identities to third parties. All WhatsApp interactions are encrypted end-to-end.
                  </p>
                </>
              )}

              {legalModal === 'terms' && (
                <>
                  <p>
                    1. Schedule H and H1 prescription drugs require a valid medical prescription from a registered medical practitioner before dispensing.
                  </p>
                  <p>
                    2. Deliveries in Bihar Sharif are carried out in compliant medical packaging. Cash on delivery and UPI payments are accepted.
                  </p>
                  <p>
                    3. Medicine stock indicated online is updated regularly and subject to physical shelf inventory at our Ranchi Rd store.
                  </p>
                </>
              )}

              {legalModal === 'disclaimer' && (
                <>
                  <p>
                    The information provided on this portal is for general awareness and stock verification only. It is not a substitute for professional medical advice, diagnosis, or clinical treatment.
                  </p>
                  <p>
                    Always consult your licensed physician before beginning any medication regimen or altering dosage. In acute medical emergencies, immediately contact the nearest hospital emergency department or call 112.
                  </p>
                </>
              )}

              {legalModal === 'wmit' && (
                <>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    Crafted with excellence by WebMaker IT Solutions (WMIT).
                  </p>
                  <p>
                    Providing cutting-edge digital web architecture, high-conversion healthcare platforms, PWA development, and SEO optimization.
                  </p>
                  <div className="pt-2">
                    <a
                      href="https://crm.webmakerit.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-emerald-600 font-bold hover:underline"
                    >
                      Visit WMIT Official Portal <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </>
              )}
            </div>

            <button
              onClick={() => setLegalModal(null)}
              className="mt-5 w-full py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 font-semibold text-xs transition"
            >
              Close Window
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
