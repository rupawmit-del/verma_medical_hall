import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { BUSINESS_CONFIG } from '../config/siteConfig';
import { 
  Phone, MessageSquare, MapPin, ShieldCheck, Truck, Clock, 
  CheckCircle, ArrowRight, HeartPulse, Stethoscope, Pill, 
  Baby, Sparkles, Star, ChevronDown, ChevronUp, Mail, 
  Search, Award, Users, AlertCircle 
} from 'lucide-react';

interface OutletContextType {
  onOpenOrderModal: (medicine?: string) => void;
}

export const Home: React.FC = () => {
  const { onOpenOrderModal } = useOutletContext<OutletContextType>();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const featuredServices = [
    {
      id: 'rx-dispense',
      icon: Pill,
      title: 'Prescription Drugs',
      desc: '100% genuine batch-tested formulations from India’s top certified pharmaceutical brands.',
      tag: 'Verified Drugs'
    },
    {
      id: 'surgical-supplies',
      icon: Stethoscope,
      title: 'Surgical & Orthopedic',
      desc: 'Sterile surgical dressings, crutches, lumbar belts, surgical gloves, and wound care.',
      tag: 'Hospital Grade'
    },
    {
      id: 'health-monitors',
      icon: HeartPulse,
      title: 'Health Monitoring Devices',
      desc: 'Digital BP monitors, glucometers, pulse oximeters, and nebulizers with warranty.',
      tag: 'Certified Devices'
    },
    {
      id: 'baby-mother-care',
      icon: Baby,
      title: 'Mother & Baby Care',
      desc: 'Pediatric drops, baby nutrition, dermatological cleansers, and feeding essentials.',
      tag: 'Safe & Gentle'
    },
    {
      id: 'ayurvedic-wellness',
      icon: Sparkles,
      title: 'Ayurvedic & Immunity',
      desc: 'Herbal tonics, chyawanprash, liver care, and herbal wellness supplements.',
      tag: 'Pure Herbal'
    },
    {
      id: 'doorstep-delivery',
      icon: Truck,
      title: 'Express Home Delivery',
      desc: 'Doorstep medicine dispatch across Bihar Sharif with WhatsApp order tracking.',
      tag: 'Within 2 Hours'
    }
  ];

  const featuredProducts = [
    {
      name: 'Dolo 650mg Paracetamol',
      brand: 'Micro Labs',
      category: 'Fever & Pain',
      mrp: 34.00,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=500&q=80',
      badge: 'Bestseller'
    },
    {
      name: 'Omron BP Monitor HEM-7120',
      brand: 'Omron Healthcare',
      category: 'Health Device',
      mrp: 2480.00,
      image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=500&q=80',
      badge: '3-Yr Warranty'
    },
    {
      name: 'Augmentin 625 Duo',
      brand: 'GSK Pharma',
      category: 'Prescription Antibiotic',
      mrp: 204.50,
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=500&q=80',
      badge: 'Rx Required'
    },
    {
      name: 'Accu-Chek Active Strips 50s',
      brand: 'Roche Diabetes Care',
      category: 'Diabetes Care',
      mrp: 1075.00,
      image: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=500&q=80',
      badge: 'In Stock'
    }
  ];

  const reviewsPreview = [
    {
      author: 'Dr. Alok Verma',
      locality: 'Khandak Par, Bihar Sharif',
      rating: 5,
      date: 'Recent verified purchase',
      comment: 'Verma Medical Hall is my go-to medical shop on Ranchi Road. They always have genuine medicines in proper cold-chain storage and dispense accurately.'
    },
    {
      author: 'Sunita Devi',
      locality: 'Bhaisasur Chowk',
      rating: 5,
      date: 'Recent regular customer',
      comment: 'Very helpful staff. Ordered my mother’s blood pressure and diabetes medicines via WhatsApp, and they delivered right to our home within 45 minutes.'
    },
    {
      author: 'Vikash Ranjan',
      locality: 'Ranchi Road',
      rating: 5,
      date: 'Verified patient',
      comment: 'Original surgical items and nebulizer machine at very reasonable rates compared to other medical shops in town. Highly recommended.'
    }
  ];

  const faqPreviewList = [
    {
      question: 'How can I order medicines via WhatsApp?',
      answer: 'Simply tap the "WhatsApp Order" button, enter your medicine name or click to attach a doctor’s prescription photo, and send. Our pharmacist will confirm availability and total bill within minutes.'
    },
    {
      question: 'Do you deliver medicines across Bihar Sharif?',
      answer: 'Yes, we provide rapid doorstep delivery across Bihar Sharif, including Ranchi Road, Bhaisasur, Khandak Par, Sohsarai, Ramchandrapur, and nearby areas.'
    },
    {
      question: 'Are all your medicines 100% genuine and batch-certified?',
      answer: 'Absolutely. We source strictly from authorized pharmaceutical C&F distributors like Cipla, Sun Pharma, Abbott, GSK, and Alkem, with official tax invoices and batch expiry records.'
    }
  ];

  const healthTips = [
    {
      title: 'Safe Storage of Insulin and Antibiotic Suspensions',
      desc: 'Understand the critical importance of cold-chain temperatures (2°C - 8°C) and why keeping medicines away from direct sunlight preserves potency.',
      readTime: '3 min read',
      tag: 'Medicine Care'
    },
    {
      title: 'Monitoring Blood Pressure Accurately at Home',
      desc: 'Tips on resting for 5 minutes before reading, proper arm cuff placement at heart level, and keeping a daily log for your doctor.',
      readTime: '4 min read',
      tag: 'Cardio Health'
    },
    {
      title: 'Why Completing Your Full Antibiotic Course Matters',
      desc: 'Stopping antibiotics early can lead to bacterial resistance. Learn how adhering to prescribed dosages protects you long-term.',
      readTime: '3 min read',
      tag: 'Pharmacist Advice'
    }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <div>
      <SEO
        title="Trusted Medical Store & Pharmacy in Bihar Sharif"
        description="Verma Medical Hall - Genuine medicines, surgical supplies, and healthcare products on Ranchi Rd, Bhaisasur, Bihar Sharif. WhatsApp 09334813113 for instant orders."
        canonical="https://vermamedicalhall.com/"
        faqSchema={faqPreviewList}
      />

      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-slate-900 text-white min-h-[580px] lg:min-h-[640px] flex items-center">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1920&q=80"
            alt="Verma Medical Hall Pharmacy Interior"
            className="w-full h-full object-cover object-center opacity-25 filter brightness-90"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-emerald-950/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl">
            {/* Top pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-xs font-semibold mb-6">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Registered Pharmacy • Ranchi Rd, Bihar Sharif (Pincode: 803101)</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {BUSINESS_CONFIG.tagline}
            </h1>

            {/* Description */}
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Providing genuine medicines, healthcare products, surgical supplies, baby care, personal care and daily medical essentials at affordable prices.
            </p>

            {/* CTAs: Call Now, WhatsApp Order, Get Directions */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => onOpenOrderModal('')}
                id="hero-whatsapp-order-btn"
                className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center gap-2.5 shadow-lg shadow-emerald-900/40 transition transform active:scale-95 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp Order</span>
              </button>

              <a
                href={`tel:${BUSINESS_CONFIG.phone}`}
                id="hero-call-now-btn"
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center gap-2.5 shadow-lg shadow-blue-900/30 transition transform active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now ({BUSINESS_CONFIG.displayPhone})</span>
              </a>

              <a
                href={BUSINESS_CONFIG.googleMaps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-directions-btn"
                className="px-5 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm flex items-center gap-2 transition"
              >
                <MapPin className="w-4 h-4 text-rose-400" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="mt-10 pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-left">
              <div>
                <span className="text-xl sm:text-2xl font-black text-white block">25+ Yrs</span>
                <span className="text-xs text-slate-400">Bihar Sharif Trust</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black text-emerald-400 block">10,000+</span>
                <span className="text-xs text-slate-400">Medicines in Stock</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black text-blue-400 block">Fast</span>
                <span className="text-xs text-slate-400">Doorstep Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SHORT ABOUT PREVIEW */}
      <section className="py-16 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Preview */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-200 dark:ring-slate-800 aspect-4/3">
                <img
                  src="https://images.unsplash.com/photo-1586015555751-63c2c1a84f33?auto=format&fit=crop&w=800&q=80"
                  alt="Verma Medical Hall counter"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Floating verified badge */}
              <div className="absolute -bottom-4 -right-2 sm:right-4 bg-emerald-600 text-white p-4 rounded-2xl shadow-xl flex items-center gap-3">
                <Award className="w-8 h-8 text-yellow-300 flex-shrink-0" />
                <div>
                  <div className="font-bold text-sm">25+ Years Experience</div>
                  <div className="text-xs text-emerald-100">Certified Pharmacist On Duty</div>
                </div>
              </div>
            </div>

            {/* Content Preview */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                <HeartPulse className="w-4 h-4" />
                About Verma Medical Hall
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
                Your Health Is Our Sole Commitment Since Inception in Bihar Sharif
              </h2>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Located conveniently at <strong>Ranchi Road, Bhaisasur</strong>, Verma Medical Hall is recognized throughout Bihar Sharif as the gold standard for genuine medicines, patient care, and emergency healthcare dispensing.
              </p>

              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                We understand that timely medicine saves lives. Whether you need chronic illness maintenance medicines (diabetes, hypertension, cardiac), acute antibiotics, or specialized hospital surgical supplies, our licensed chemists are here with personalized advice and transparent pricing.
              </p>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 font-semibold text-sm transition"
                >
                  <span>View More About Our Journey</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED SERVICES (MAXIMUM 6 with View More) */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-2">
                Pharmacy Offerings
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Featured Healthcare Services
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 transition"
            >
              <span>View All Services & Inventory</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                        {service.tag}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <button
                      onClick={() => onOpenOrderModal(service.title)}
                      className="text-xs font-bold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 flex items-center gap-1 cursor-pointer"
                    >
                      <span>Inquire on WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-sm transition"
            >
              <span>Explore Complete Services & Stock Checker</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-16 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-2">
              The Verma Medical Promise
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Why Bihar Sharif Families Trust Verma Medical Hall
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-base">
                100% Genuine Guarantee
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Zero tolerance for counterfeit drugs. Every strip and vial is backed by authentic company batch documentation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-base">
                Always Open When Needed
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Open from 7:30 AM early morning until 10:30 PM at night, with 24/7 on-call emergency emergency medicine support.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700">
              <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold mb-4">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-base">
                Fast Doorstep Delivery
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                No need to travel while unwell. Send your prescription on WhatsApp and receive packed medicines right at home.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700">
              <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-base">
                Qualified Pharmacist
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Get helpful advice regarding dosages, food interactions, expiration checks, and proper storage guidelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED PRODUCTS PREVIEW */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-2">
                Everyday Essentials
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Featured Healthcare Products
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 transition"
            >
              <span>Search All 10,000+ Items</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((prod, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-md transition flex flex-col justify-between"
              >
                <div className="relative h-44 bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-600 text-white shadow-xs">
                    {prod.badge}
                  </span>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                      {prod.category}
                    </span>
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                      {prod.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Brand: {prod.brand}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 block">MRP</span>
                      <span className="text-base font-extrabold text-slate-900 dark:text-white">
                        ₹{prod.mrp.toFixed(2)}
                      </span>
                    </div>
                    <button
                      onClick={() => onOpenOrderModal(prod.name)}
                      className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-1 cursor-pointer transition"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Order</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CUSTOMER REVIEWS PREVIEW */}
      <section className="py-16 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-2">
              Customer Feedback
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              What Our Patrons Say About Us
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2">
              Summarized feedback from satisfied residents and healthcare seekers in Bihar Sharif.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviewsPreview.map((rev, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
                    "{rev.comment}"
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-200/60 dark:border-slate-700">
                  <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                    {rev.author}
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    {rev.locality} • {rev.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ PREVIEW */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-2">
              Common Inquiries
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3.5">
            {faqPreviewList.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 overflow-hidden transition"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full px-5 py-4 text-left font-semibold text-sm text-slate-900 dark:text-white flex items-center justify-between gap-4 hover:bg-slate-50/60 dark:hover:bg-slate-800/50 cursor-pointer"
                >
                  <span>{faq.question}</span>
                  {openFaqIndex === idx ? (
                    <ChevronUp className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                {openFaqIndex === idx && (
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              <span>Have more questions? Visit our Contact & FAQ section</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. CTA SECTION */}
      <section className="py-16 bg-gradient-to-r from-emerald-800 via-teal-800 to-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-200 text-xs font-semibold">
            <Clock className="w-3.5 h-3.5" />
            <span>Fast Turnaround Guaranteed</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
            Need Urgent Medicines in Bihar Sharif?
          </h2>

          <p className="text-sm sm:text-base text-emerald-100 max-w-2xl mx-auto leading-relaxed">
            WhatsApp your doctor's prescription right now. Our certified pharmacist will verify the dosages, prepare your sealed package, and arrange instant delivery.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenOrderModal('')}
              className="px-6 py-3.5 rounded-xl bg-white text-emerald-900 hover:bg-emerald-50 font-bold text-sm flex items-center gap-2 shadow-xl transition transform active:scale-95 cursor-pointer"
            >
              <MessageSquare className="w-5 h-5 text-emerald-600" />
              <span>Order via WhatsApp Now</span>
            </button>

            <a
              href={`tel:${BUSINESS_CONFIG.phone}`}
              className="px-6 py-3.5 rounded-xl bg-emerald-950/60 hover:bg-emerald-950 text-white border border-emerald-400/40 font-bold text-sm flex items-center gap-2 transition"
            >
              <Phone className="w-4 h-4 text-emerald-300" />
              <span>Call Helpline ({BUSINESS_CONFIG.displayPhone})</span>
            </a>
          </div>
        </div>
      </section>

      {/* 9. LATEST HEALTH TIPS PREVIEW */}
      <section className="py-16 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-2">
                Pharmacist Insights
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Latest Health & Wellness Tips
              </h2>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              <span>Read About Our Care Mission</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {healthTips.map((tip, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 mb-3">
                    <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                      {tip.tag}
                    </span>
                    <span>{tip.readTime}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-200/60 dark:border-slate-700">
                  <button
                    onClick={() => onOpenOrderModal(`Advice on: ${tip.title}`)}
                    className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Ask Pharmacist via WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. NEWSLETTER */}
      <section className="py-14 bg-slate-100 dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-8 sm:p-10 shadow-sm text-center">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6" />
            </div>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              Subscribe for Healthcare Alerts & Refill Reminders
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-lg mx-auto">
              Get timely notifications on seasonal medicine availability, health camps in Bihar Sharif, and monthly chronic medication refill alerts.
            </p>

            {newsletterSubscribed ? (
              <div className="mt-6 p-4 rounded-xl bg-emerald-50 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300 font-semibold text-sm max-w-md mx-auto flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Thank you! You are now subscribed to Verma Medical updates.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="flex-1 px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition shadow-xs cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
