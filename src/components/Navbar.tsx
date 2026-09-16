import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BUSINESS_CONFIG } from '../config/siteConfig';
import { PWAInstallButton } from './PWAInstallButton';
import { 
  HeartPulse, Menu, X, Phone, Sun, Moon, 
  MessageSquare, User, Clock, MapPin 
} from 'lucide-react';

interface NavbarProps {
  onOpenOrderModal: () => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenOrderModal,
  darkMode,
  onToggleDarkMode
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
    { name: 'Login', path: '/login' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top emergency & information notification bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-6 hidden sm:block border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <Clock className="w-3.5 h-3.5" />
              <span>Mon-Sun Open: 7:30 AM – 10:30 PM</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-rose-400" />
              <span>Ranchi Rd, Bhaisasur, Bihar Sharif</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400">Doorstep Delivery in Bihar Sharif</span>
            <a
              href={`tel:${BUSINESS_CONFIG.phone}`}
              className="font-bold text-white hover:text-emerald-400 transition flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>{BUSINESS_CONFIG.displayPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md border-b border-slate-200/80 dark:border-slate-800'
            : 'bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-3 group focus:outline-none">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-700/20 group-hover:scale-105 transition-transform">
                <HeartPulse className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white tracking-tight leading-tight">
                  {BUSINESS_CONFIG.name}
                </span>
                <span className="text-[10px] sm:text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                  Chemist & Healthcare Store
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 font-medium text-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3.5 py-2 rounded-xl transition-all ${
                    isActive(link.path)
                      ? 'bg-emerald-50 text-emerald-700 font-bold dark:bg-emerald-950/60 dark:text-emerald-300'
                      : 'text-slate-600 hover:text-emerald-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:text-emerald-400 dark:hover:bg-slate-800'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right Side Actions: PWA Install + Dark Mode + WhatsApp Order */}
            <div className="hidden sm:flex items-center gap-2.5">
              {/* Mandatory PWA Install Button */}
              <PWAInstallButton />

              {/* Dark Mode Toggle */}
              <button
                onClick={onToggleDarkMode}
                aria-label="Toggle dark mode"
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
              >
                {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
              </button>

              {/* WhatsApp Order Button */}
              <button
                onClick={onOpenOrderModal}
                id="header-order-btn"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm shadow-sm transition cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Order Medicine</span>
              </button>
            </div>

            {/* Mobile Hamburger & Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onToggleDarkMode}
                aria-label="Toggle dark mode"
                className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300"
              >
                {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
                className="p-2.5 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xl px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top-3 duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center px-4 py-3 rounded-xl text-sm font-semibold transition ${
                  isActive(link.path)
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-200'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-2 space-y-2.5">
            {/* PWA Button inside mobile menu */}
            <PWAInstallButton isMobileDrawer={true} />

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderModal();
              }}
              className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Medicine Order</span>
            </button>

            <a
              href={`tel:${BUSINESS_CONFIG.phone}`}
              className="w-full py-3 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-slate-200 transition"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Call Pharmacist ({BUSINESS_CONFIG.displayPhone})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
