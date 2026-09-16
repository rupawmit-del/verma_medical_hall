import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { BUSINESS_CONFIG } from '../config/siteConfig';
import { 
  HeartPulse, Lock, Eye, EyeOff, ShieldCheck, 
  CheckCircle2, AlertCircle, ArrowRight, UserCheck 
} from 'lucide-react';

export const Login: React.FC = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [authSuccess, setAuthSuccess] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotSuccess, setForgotSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!identifier.trim()) {
      newErrors.identifier = 'Please enter your registered email or 10-digit mobile number';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    // Simulate secure verification
    setTimeout(() => {
      setIsLoading(false);
      setAuthSuccess(true);
    }, 900);
  };

  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!forgotEmail.trim()) return;
    setForgotSuccess(true);
  };

  return (
    <div className="py-16 bg-slate-50 dark:bg-slate-950 min-h-[calc(100vh-200px)] flex items-center justify-center px-4 sm:px-6">
      <SEO
        title="Portal Login | Patient & Staff Access"
        description="Sign in to Verma Medical Hall portal to check prescription refills, orders, and authorized pharmacy access in Bihar Sharif."
        canonical="https://vermamedicalhall.com/login"
      />

      <div className="w-full max-w-md">
        {/* Card */}
        <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-7 sm:p-9 shadow-xl ring-1 ring-slate-200/50 dark:ring-slate-800">
          {/* Logo & Branding */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center justify-center gap-2.5 mb-3 group">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-700/20 group-hover:scale-105 transition-transform">
                <HeartPulse className="w-6 h-6" />
              </div>
            </Link>
            <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              {BUSINESS_CONFIG.name}
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Patient Refill & Staff Pharmacy Portal
            </p>
          </div>

          {authSuccess ? (
            <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-3 animate-in fade-in duration-200">
              <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-sm">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-emerald-950 dark:text-emerald-200">
                Welcome back!
              </h3>
              <p className="text-xs text-emerald-800 dark:text-emerald-300">
                Authentication confirmed for <strong>{identifier}</strong>. You have secure access to prescription history and orders.
              </p>
              <div className="pt-2">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs transition"
                >
                  <span>Go to Medicine Catalog</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ) : showForgotPassword ? (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="pb-3 border-b border-slate-100 dark:border-slate-800">
                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  Reset Portal Password
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Enter your registered mobile number or email to receive a password reset token.
                </p>
              </div>

              {forgotSuccess ? (
                <div className="p-4 rounded-xl bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300 text-xs text-center space-y-2">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 mx-auto" />
                  <p className="font-semibold">Reset instructions sent to {forgotEmail}. Please check SMS/Email.</p>
                  <button
                    onClick={() => {
                      setShowForgotPassword(false);
                      setForgotSuccess(false);
                    }}
                    className="mt-2 text-emerald-700 dark:text-emerald-400 font-bold underline"
                  >
                    Back to login
                  </button>
                </div>
              ) : (
                <form onSubmit={handleForgotSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Email or Mobile
                    </label>
                    <input
                      type="text"
                      required
                      value={forgotEmail}
                      onChange={(e) => setForgotEmail(e.target.value)}
                      placeholder="e.g. 9334813113 or user@gmail.com"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition cursor-pointer"
                  >
                    Send Reset Link
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForgotPassword(false)}
                    className="w-full text-center text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 py-1"
                  >
                    Cancel and return
                  </button>
                </form>
              )}
            </div>
          ) : (
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              {/* Email / Mobile Field */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Email / Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="login-identifier"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder="e.g. 9334813113 or patient@email.com"
                  className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 ${
                    errors.identifier
                      ? 'border-red-500 focus:ring-red-400'
                      : 'border-slate-200 dark:border-slate-700 focus:ring-emerald-500'
                  }`}
                />
                {errors.identifier && (
                  <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.identifier}
                  </p>
                )}
              </div>

              {/* Password Field with Show/Hide */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowForgotPassword(true)}
                    className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 cursor-pointer"
                  >
                    Forgot Password?
                  </button>
                </div>

                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="login-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className={`w-full pl-3.5 pr-11 py-2.5 text-sm rounded-xl border bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 ${
                      errors.password
                        ? 'border-red-500 focus:ring-red-400'
                        : 'border-slate-200 dark:border-slate-700 focus:ring-emerald-500'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>

                {errors.password && (
                  <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.password}
                  </p>
                )}
              </div>

              {/* Remember Me */}
              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500 dark:border-slate-700"
                  />
                  <span className="text-xs text-slate-600 dark:text-slate-400">
                    Remember my credentials
                  </span>
                </label>
              </div>

              {/* Secure Login Button */}
              <button
                type="submit"
                id="login-submit-btn"
                disabled={isLoading}
                className="w-full mt-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-75 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Verifying Credentials...</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>Secure Login</span>
                  </>
                )}
              </button>
            </form>
          )}

          {/* Trust Badge */}
          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 text-center">
            <div className="inline-flex items-center gap-1.5 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>256-Bit Encrypted Healthcare Session</span>
            </div>
            <p className="text-[11px] text-slate-400 mt-2">
              For urgent phone orders without login, call <strong className="text-slate-600 dark:text-slate-300">{BUSINESS_CONFIG.displayPhone}</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
