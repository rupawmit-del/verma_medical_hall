import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { BUSINESS_CONFIG } from '../config/siteConfig';
import { 
  Image as ImageIcon, ZoomIn, X, ChevronLeft, ChevronRight, 
  MapPin, ShieldCheck, HeartPulse 
} from 'lucide-react';

interface GalleryPhoto {
  id: string;
  title: string;
  category: 'front' | 'interior' | 'shelves' | 'equipment' | 'products';
  categoryLabel: string;
  url: string;
  caption: string;
}

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const galleryItems: GalleryPhoto[] = [
    {
      id: 'g-1',
      title: 'Store Front on Ranchi Road',
      category: 'front',
      categoryLabel: 'Store Front',
      url: 'https://images.unsplash.com/photo-1586015555751-63c2c1a84f33?auto=format&fit=crop&w=1200&q=80',
      caption: 'Verma Medical Hall prominent entrance on Ranchi Road, Bhaisasur, Bihar Sharif with quick customer service counter.'
    },
    {
      id: 'g-2',
      title: 'Modern Pharmacy Interior',
      category: 'interior',
      categoryLabel: 'Store Interior',
      url: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1200&q=80',
      caption: 'Well-lit, air-conditioned dispensary ensuring hygienic and clean medicine handling.'
    },
    {
      id: 'g-3',
      title: 'Organized Prescription Medicine Shelves',
      category: 'shelves',
      categoryLabel: 'Medicine Shelves',
      url: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1200&q=80',
      caption: 'Systematic alphabetical storage of allopathic tablets, capsules, and pediatric oral drops.'
    },
    {
      id: 'g-4',
      title: 'Medical Devices & Diagnostic Equipment',
      category: 'equipment',
      categoryLabel: 'Equipment',
      url: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=1200&q=80',
      caption: 'Digital BP monitors, pulse oximeters, glucometers, and nebulizers ready for immediate demonstration.'
    },
    {
      id: 'g-5',
      title: 'Baby Care & Pediatric Formulations',
      category: 'products',
      categoryLabel: 'Products',
      url: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1200&q=80',
      caption: 'Dermatological baby washes, rash creams, infant feeding essentials, and vitamin drops.'
    },
    {
      id: 'g-6',
      title: 'Cold-Chain Insulin & Vaccine Chiller',
      category: 'equipment',
      categoryLabel: 'Equipment',
      url: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80',
      caption: 'Continuous 2°C – 8°C monitored refrigeration with standby generator protection.'
    },
    {
      id: 'g-7',
      title: 'Surgical Dressings & Orthopedic Supports',
      category: 'products',
      categoryLabel: 'Products',
      url: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=1200&q=80',
      caption: 'Hospital-grade sterilized surgical cotton, antiseptic solutions, bandages, and lumbar belts.'
    },
    {
      id: 'g-8',
      title: 'Ayurvedic & Herbal Wellness Counter',
      category: 'products',
      categoryLabel: 'Products',
      url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80',
      caption: 'Herbal remedies, pure churnas, chyawanprash, and immunity tonics from Himalaya, Dabur, and Baidyanath.'
    },
    {
      id: 'g-9',
      title: 'Customer Consultation & Dispensing Desk',
      category: 'interior',
      categoryLabel: 'Store Interior',
      url: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1200&q=80',
      caption: 'Friendly pharmacist interaction providing dosage instruction and prescription verification.'
    }
  ];

  const filteredItems = galleryItems.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsZoomed(false);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    setIsZoomed(false);
  };

  const nextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
      setIsZoomed(false);
    }
  };

  const prevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
      setIsZoomed(false);
    }
  };

  return (
    <div className="py-12 bg-white dark:bg-slate-900">
      <SEO
        title="Store Gallery & Facilities in Bihar Sharif"
        description="Take a visual tour of Verma Medical Hall on Ranchi Rd, Bihar Sharif. Inspect our clean dispensary, organized shelves, surgical products, and cold chain chillers."
        canonical="https://vermamedicalhall.com/gallery"
      />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
            <ImageIcon className="w-4 h-4 text-emerald-600" />
            Visual Tour & Facilities
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Our Pharmacy Gallery
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            See our premises at Ranchi Road, Bhaisasur, Bihar Sharif. We take pride in clean storage, methodical shelving, temperature-regulated vaccines, and genuine healthcare supplies.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-8 flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
          {[
            { id: 'all', label: 'All Photos' },
            { id: 'front', label: 'Front View' },
            { id: 'interior', label: 'Interior & Counters' },
            { id: 'shelves', label: 'Medicine Shelves' },
            { id: 'equipment', label: 'Equipment & Devices' },
            { id: 'products', label: 'Healthcare Products' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Overlay with details */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5 text-white">
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-600/90 w-max mb-1.5">
                  {item.categoryLabel}
                </span>
                <h3 className="font-bold text-base text-white group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  {item.caption}
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-emerald-300 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Click to view high-res</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* POPUP LIGHTBOX MODAL WITH ZOOM & NEXT/PREV */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md transition-opacity"
          role="dialog"
          aria-modal="true"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Zoom Toggle */}
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="absolute top-5 right-18 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer flex items-center gap-1 text-xs font-semibold"
            aria-label="Toggle zoom"
          >
            <ZoomIn className="w-4 h-4" />
            <span>{isZoomed ? 'Reset' : 'Zoom'}</span>
          </button>

          {/* Prev Button */}
          <button
            onClick={prevLightbox}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextLightbox}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Image Container */}
          <div className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center p-2 text-center select-none">
            <div
              className={`overflow-hidden rounded-2xl transition-transform duration-300 max-h-[70vh] ${
                isZoomed ? 'scale-125 cursor-zoom-out' : 'cursor-zoom-in'
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <img
                src={filteredItems[lightboxIndex].url}
                alt={filteredItems[lightboxIndex].title}
                className="max-h-[70vh] max-w-full object-contain rounded-2xl shadow-2xl"
              />
            </div>
            <div className="mt-4 text-white max-w-xl">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                {filteredItems[lightboxIndex].categoryLabel} ({lightboxIndex + 1} of {filteredItems.length})
              </span>
              <h4 className="text-lg font-bold text-white">
                {filteredItems[lightboxIndex].title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                {filteredItems[lightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Address & Store Visit Callout */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                Visit Us at Ranchi Road, Bhaisasur
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Bihar Sharif, Bihar 803101 • Easy parking and accessible wheelchair counter
              </p>
            </div>
          </div>
          <a
            href={BUSINESS_CONFIG.googleMaps.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs whitespace-nowrap transition"
          >
            Get Driving Directions
          </a>
        </div>
      </div>
    </div>
  );
};
