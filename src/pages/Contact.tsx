import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { BUSINESS_CONFIG } from '../config/siteConfig';
import { 
  MapPin, Phone, MessageSquare, Mail, Clock, Send, 
  CheckCircle2, Navigation, AlertCircle, ShieldCheck, HeartPulse 
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Medicine Stock Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.phone.trim()) {
      setFormError('Please provide your name and mobile number');
      return;
    }
    setFormError('');

    // Pre-fill WhatsApp message with form details
    const text = `*New Contact Inquiry - ${BUSINESS_CONFIG.name}*
----------------------------------------
*Name:* ${formState.name}
*Phone:* ${formState.phone}
${formState.email ? `*Email:* ${formState.email}\n` : ''}*Subject:* ${formState.subject}
*Message:* ${formState.message}
----------------------------------------`;

    window.open(`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <div className="py-12 bg-white dark:bg-slate-900">
      <SEO
        title="Contact Us & Store Directions in Bihar Sharif"
        description="Get in touch with Verma Medical Hall, Ranchi Rd, Bhaisasur, Bihar Sharif. Phone: 09334813113. Google Maps directions, working hours, and WhatsApp inquiry."
        canonical="https://vermamedicalhall.com/contact"
      />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
            <HeartPulse className="w-4 h-4 text-emerald-600" />
            Get In Touch With Us
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Contact Verma Medical Hall
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Have questions about a rare medicine, medical equipment pricing, bulk supplies, or monthly prescription delivery? Call, WhatsApp, or visit us at Ranchi Road, Bihar Sharif.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Business Info & Quick Action Buttons */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href={`tel:${BUSINESS_CONFIG.phone}`}
                id="contact-call-btn"
                className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 text-blue-900 dark:text-blue-200 hover:bg-blue-100 transition flex flex-col items-center text-center justify-center gap-2"
              >
                <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="font-bold text-xs">Call Now</span>
              </a>

              <a
                href={BUSINESS_CONFIG.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-whatsapp-btn"
                className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-emerald-900 dark:text-emerald-200 hover:bg-emerald-100 transition flex flex-col items-center text-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span className="font-bold text-xs">WhatsApp</span>
              </a>

              <a
                href={BUSINESS_CONFIG.googleMaps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-directions-btn"
                className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-200 transition flex flex-col items-center text-center justify-center gap-2"
              >
                <Navigation className="w-5 h-5 text-rose-500" />
                <span className="font-bold text-xs">Directions</span>
              </a>
            </div>

            {/* Address & Details Card */}
            <div className="p-7 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 space-y-5">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white pb-3 border-b border-slate-200 dark:border-slate-700">
                Store Information
              </h3>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-900 dark:text-white">Store Address</div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-0.5">
                    {BUSINESS_CONFIG.address.full}
                  </p>
                  <p className="text-xs text-emerald-700 dark:text-emerald-400 font-mono mt-1">
                    Google Plus Code: {BUSINESS_CONFIG.address.plusCode}
                  </p>
                </div>
              </div>

              {/* Landmarks */}
              <div className="pl-12 text-xs text-slate-500 dark:text-slate-400 space-y-1">
                <span className="font-semibold text-slate-700 dark:text-slate-300 block">Nearby Landmarks:</span>
                {BUSINESS_CONFIG.address.nearbyLandmarks.map((lm, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>{lm}</span>
                  </div>
                ))}
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-900 dark:text-white">Direct Desk Phone</div>
                  <a
                    href={`tel:${BUSINESS_CONFIG.phone}`}
                    className="text-sm text-blue-600 dark:text-blue-400 font-bold hover:underline"
                  >
                    {BUSINESS_CONFIG.displayPhone}
                  </a>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Available during operating store hours
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-900 dark:text-white">Email Address</div>
                  <a
                    href={`mailto:${BUSINESS_CONFIG.email}`}
                    className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400"
                  >
                    {BUSINESS_CONFIG.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="p-7 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-700">
                <Clock className="w-5 h-5 text-emerald-600" />
                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  Operating Hours & Availability
                </h3>
              </div>

              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between py-1.5 border-b border-slate-200/60 dark:border-slate-700">
                  <span className="text-slate-600 dark:text-slate-400">Monday – Saturday</span>
                  <span className="font-bold text-slate-900 dark:text-white">7:30 AM – 10:30 PM</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-200/60 dark:border-slate-700">
                  <span className="text-slate-600 dark:text-slate-400">Sunday</span>
                  <span className="font-bold text-slate-900 dark:text-white">8:00 AM – 9:30 PM</span>
                </div>
                <div className="p-3 mt-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 text-xs">
                  <span className="font-bold block mb-0.5">Emergency Life-Saving Medicine:</span>
                  <span>We accommodate emergency dispatch for critical injectables, asthma inhalers, and cardiac drugs 24 hours a day.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form & Map */}
          <div className="lg:col-span-7 space-y-6">
            {/* Contact Form */}
            <div className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-1">
                Send a Message or Medicine Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                Fill out the details below and our team will get back to you promptly on WhatsApp or phone.
              </p>

              {formError && (
                <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  <span>{formError}</span>
                </div>
              )}

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 text-emerald-900 dark:text-emerald-200 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-base">Inquiry Prepared & Forwarded!</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    Your inquiry has been compiled. If WhatsApp did not open automatically, please click below to start chatting directly with the pharmacist.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Your Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="e.g. 9876543210"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="ramesh@example.com"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Inquiry Subject
                      </label>
                      <select
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      >
                        <option value="Medicine Stock Availability">Medicine Stock Availability</option>
                        <option value="Doctor Prescription Delivery">Doctor Prescription Delivery</option>
                        <option value="Medical Device / BP Monitor">Medical Device / BP Monitor</option>
                        <option value="Bulk / Surgical Equipment Inquiry">Bulk / Surgical Equipment Inquiry</option>
                        <option value="Other Feedback or Inquiry">Other Feedback or Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Your Message or Medicine Names
                    </label>
                    <textarea
                      rows={3}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Specify the medicines you need or questions you have..."
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <button
                    type="submit"
                    id="submit-contact-inquiry-btn"
                    className="w-full py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry to Pharmacist Desk</span>
                  </button>
                </form>
              )}
            </div>

            {/* Interactive Google Map Embed */}
            <div className="p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white">
                    Google Maps Location
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Ranchi Rd, Bhaisasur, Bihar Sharif, Bihar 803101
                  </p>
                </div>
                <a
                  href={BUSINESS_CONFIG.googleMaps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-xs font-bold transition flex items-center gap-1.5"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Navigate</span>
                </a>
              </div>

              <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 h-72 w-full">
                <iframe
                  title="Verma Medical Hall Google Map"
                  src={BUSINESS_CONFIG.googleMaps.embedQuery}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
