import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { MedicineStockChecker } from '../components/MedicineStockChecker';
import { BUSINESS_CONFIG } from '../config/siteConfig';
import { 
  Pill, Stethoscope, HeartPulse, Baby, Sparkles, Activity, 
  Thermometer, ShieldCheck, Truck, MessageSquare, Phone, 
  HelpCircle, CheckCircle2, ArrowRight 
} from 'lucide-react';

interface OutletContextType {
  onOpenOrderModal: (medicine?: string) => void;
}

export const Services: React.FC = () => {
  const { onOpenOrderModal } = useOutletContext<OutletContextType>();
  const [activeCategoryTab, setActiveCategoryTab] = useState('all');

  const fullServices = [
    {
      id: 'prescription-medicines',
      category: 'medicines',
      icon: Pill,
      title: 'Prescription Medicines (Rx)',
      tagline: 'Cardiology, Diabetes, Antibiotics & Critical Care',
      description: 'Dispensing authentic, batch-verified drugs according to your doctor’s exact prescription. Proper dosage counseling, expiration verification, and cold-chain integrity for insulins and vaccines.',
      popularItems: ['Augmentin 625 Duo', 'Telma 40', 'Glycomet GP1', 'Novomix 30 Flexpen', 'Azithral 500'],
      ctaLabel: 'Order Prescription Drugs'
    },
    {
      id: 'otc-medicines',
      category: 'medicines',
      icon: Thermometer,
      title: 'Over-The-Counter (OTC) Medicines',
      tagline: 'Fever, Cold, Pain Relief, Antacids & First Aid',
      description: 'Immediate relief products for common ailments including paracetamol, cough lozenges, digestive syrups, pain relief sprays, oral rehydration salts, and band-aids without waiting.',
      popularItems: ['Dolo 650', 'Volini Gel', 'Electral ORS', 'Digene Mint Gel', 'Otrivin Nasal Spray'],
      ctaLabel: 'Order OTC Essentials'
    },
    {
      id: 'health-devices',
      category: 'devices',
      icon: HeartPulse,
      title: 'Health Monitoring Devices',
      tagline: 'Digital Monitors with Manufacturer Warranty',
      description: 'Accurate clinical monitoring devices for domestic care. Digital automatic BP monitors, glucometers with test strips, digital thermometers, pulse oximeters, and handy compressor nebulizers.',
      popularItems: ['Omron HEM-7120 BP', 'Accu-Chek Active Kit', 'Dr Trust Nebulizer', 'Beurer Pulse Oximeter'],
      ctaLabel: 'Inquire Device Availability'
    },
    {
      id: 'medical-equipment',
      category: 'devices',
      icon: Stethoscope,
      title: 'Medical Equipment & Surgical Supplies',
      tagline: 'Hospital & Home Surgical Essentials',
      description: 'Surgical cotton rolls, sterile gauze, IV infusion sets, surgical sutures, catheters, urine bags, disposable examination gloves, syringes, and post-surgical wound care dressings.',
      popularItems: ['Sterile Surgical Gauze', 'Betadine 10% Solution', 'Romson Infusion Sets', 'Latex Exam Gloves'],
      ctaLabel: 'Request Surgical Quote'
    },
    {
      id: 'baby-mother-care',
      category: 'personal',
      icon: Baby,
      title: 'Mother & Baby Care',
      tagline: 'Pediatric Formulations & Dermatological Baby Care',
      description: 'Pediatric fever drops, colic relief syrups, gripe waters, hypoallergenic baby washes, diaper rash creams, and doctor-prescribed infant nutrition supplements.',
      popularItems: ['Calpol 250 Peadiatric', 'Sebamed Baby Wash', 'Woodward Gripe Water', 'Sudocrem / Rash Ointment'],
      ctaLabel: 'Order Baby Supplies'
    },
    {
      id: 'supplements-vitamins',
      category: 'wellness',
      icon: Sparkles,
      title: 'Nutritional Supplements & Immunity',
      tagline: 'Vitamins, Minerals, Calcium & Protein Powders',
      description: 'Formulated supplements to bridge nutritional gaps, enhance immunity, and improve bone health. Comprehensive B-complex capsules, Vitamin D3 sachets, calcium, and geriatric protein supplements.',
      popularItems: ['Becosules Z', 'Shelcal 500', 'Zincovit Tablets', 'Protinex Original Powder'],
      ctaLabel: 'Order Supplements'
    },
    {
      id: 'home-care',
      category: 'devices',
      icon: Activity,
      title: 'Home Care & Mobility Support',
      tagline: 'Elderly Mobility & Daily Living Aids',
      description: 'Support equipment designed for elderly patients or patients recovering from orthopaedic surgery. Adult diapers, underpads, walking sticks, cervical collars, and hot water bags.',
      popularItems: ['Friends Adult Diapers', 'Flamingo Cervical Collar', 'Adjustable Walking Stick', 'Orthopedic Lumbar Belt'],
      ctaLabel: 'Order Home Care'
    },
    {
      id: 'ayurvedic-herbal',
      category: 'wellness',
      icon: Sparkles,
      title: 'Ayurvedic & Herbal Wellness',
      tagline: 'Authentic Herbal Tonics & Natural Formulations',
      description: 'Time-tested Ayurvedic formulations from standard manufacturers like Dabur, Himalaya, Baidyanath, and Zandu. Liver stimulants, natural cough syrups, and digestive churnas.',
      popularItems: ['Himalaya Liv.52 DS', 'Dabur Chyawanprash', 'Zandu Pancharishta', 'Patanjali Aloe Vera'],
      ctaLabel: 'Order Ayurvedic'
    },
    {
      id: 'personal-dermatology',
      category: 'personal',
      icon: ShieldCheck,
      title: 'Personal Care & Medicated Cosmetics',
      tagline: 'Dermatologist Recommended Skin & Hair Essentials',
      description: 'Antifungal powders, medicated antidandruff shampoos, hypoallergenic moisturizers, and antiseptic hand sanitizers approved by dermatologists.',
      popularItems: ['Candid B Cream', 'Scalpe Plus Shampoo', 'Cetaphil Gentle Cleanser', 'Dettol Antiseptic Liquid'],
      ctaLabel: 'Order Personal Care'
    }
  ];

  const filteredServices = fullServices.filter((srv) => {
    if (activeCategoryTab === 'all') return true;
    return srv.category === activeCategoryTab;
  });

  return (
    <div className="py-12 bg-slate-50 dark:bg-slate-950">
      <SEO
        title="Pharmacy Services & Medicine Stock Checker in Bihar Sharif"
        description="Search real-time medicine availability at Verma Medical Hall Bihar Sharif. Browse prescription drugs, surgical equipment, health devices, baby care, and home care."
        canonical="https://vermamedicalhall.com/services"
      />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
            <HeartPulse className="w-4 h-4 text-emerald-600" />
            Comprehensive Pharmacy Offerings
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Our Healthcare Services & Medicine Catalog
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            From daily OTC essentials and life-saving prescription medicines to cutting-edge health devices and sterile surgical equipment, Verma Medical Hall provides everything your family needs under one roof.
          </p>
        </div>
      </div>

      {/* EXCLUSIVE FEATURE: MEDICINE STOCK CHECKER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <MedicineStockChecker onSelectMedicineForOrder={(name) => onOpenOrderModal(name)} />
      </div>

      {/* CATEGORY SERVICES SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-1">
              Category Wise Services
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Detailed Product & Service Categories
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Categories' },
              { id: 'medicines', label: 'Medicines & Rx' },
              { id: 'devices', label: 'Devices & Surgical' },
              { id: 'wellness', label: 'Supplements & Herbal' },
              { id: 'personal', label: 'Baby & Personal' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategoryTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                  activeCategoryTab === tab.id
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400 flex items-center justify-center font-bold">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                      Certified
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-3">
                    {service.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Common Brands & Items:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.popularItems.map((item, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] px-2 py-0.5 rounded-md bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700 font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => onOpenOrderModal(service.title)}
                    className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-xs transition cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>{service.ctaLabel}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Cold Chain & Safety Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="rounded-3xl bg-gradient-to-r from-blue-900 to-indigo-950 text-white p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-blue-300 uppercase tracking-wider">
              Temperature Regulated Storage
            </span>
            <h3 className="text-2xl font-bold">
              Looking for Specialized Insulins, Vaccines or Biologics?
            </h3>
            <p className="text-xs sm:text-sm text-blue-200 max-w-xl">
              We operate dedicated 2°C – 8°C pharmaceutical chillers backed by uninterrupted generator and inverter backup on Ranchi Rd, Bihar Sharif.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onOpenOrderModal('Cold-Chain Insulin / Vaccine Inquiry')}
              className="px-5 py-3 rounded-xl bg-white text-blue-950 hover:bg-blue-50 font-bold text-xs sm:text-sm transition cursor-pointer"
            >
              Inquire Cold-Chain Stock
            </button>
            <a
              href={`tel:${BUSINESS_CONFIG.phone}`}
              className="px-5 py-3 rounded-xl border border-blue-400 text-white hover:bg-blue-800/40 font-bold text-xs sm:text-sm transition flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Pharmacist</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
