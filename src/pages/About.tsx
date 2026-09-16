import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { BUSINESS_CONFIG } from '../config/siteConfig';
import { 
  ShieldCheck, HeartPulse, Award, Clock, Users, Target, 
  Eye, CheckCircle, MapPin, ArrowRight, MessageSquare, Phone 
} from 'lucide-react';

interface OutletContextType {
  onOpenOrderModal: (medicine?: string) => void;
}

export const About: React.FC = () => {
  const { onOpenOrderModal } = useOutletContext<OutletContextType>();

  const values = [
    {
      title: 'Authenticity First',
      desc: 'We strictly source from authorized pharmaceutical distribution chains to guarantee that no expired or substandard drug ever reaches a patient.',
      icon: ShieldCheck
    },
    {
      title: 'Patient-Centric Empathy',
      desc: 'We listen to every customer. Whether explaining the time of day to take insulin or recommending an affordable alternative, patient health comes before profit.',
      icon: HeartPulse
    },
    {
      title: 'Uncompromised Cold Chain',
      desc: 'Equipped with dedicated medical refrigeration units with power backup so vaccines, insulins, and temperature-sensitive biologicals retain 100% bioactivity.',
      icon: Clock
    },
    {
      title: 'Community Commitment',
      desc: 'Serving the residents of Bihar Sharif for 25+ years, standing by families during health emergencies, midnight requirements, and epidemics.',
      icon: Users
    }
  ];

  const timeline = [
    {
      year: '1999',
      title: 'Establishment at Ranchi Road',
      desc: 'Verma Medical Hall opened its doors in Bhaisasur, Bihar Sharif, with a vision to provide authentic, transparently priced allopathic medicines.'
    },
    {
      year: '2008',
      title: 'Surgical & Orthopedic Expansion',
      desc: 'Introduced medical devices, oxygen accessories, surgical implants, wheelchairs, and post-operative care equipment.'
    },
    {
      year: '2016',
      title: 'Cold-Chain & Digital Invoicing',
      desc: 'Upgraded storage with dedicated solar and generator-backed medical refrigeration, plus computerized barcode batch tracking.'
    },
    {
      year: '2021',
      title: 'Express Doorstep Delivery',
      desc: 'Pioneered digital WhatsApp ordering across Bihar Sharif, assisting thousands of elderly and isolating patients during challenging periods.'
    },
    {
      year: 'Present',
      title: 'PWA & Integrated Healthcare Hub',
      desc: 'Now offering progressive web app stock checks, online prescription uploads, and fast 45-minute urgent dispensing.'
    }
  ];

  const achievements = [
    { number: '25+', label: 'Years of Dedicated Practice', sub: 'In Bihar Sharif' },
    { number: '50,000+', label: 'Happy Local Families', sub: 'Long-term patient trust' },
    { number: '10,000+', label: 'Pharmaceutical Items', sub: 'Allopathy, surgical & ayurvedic' },
    { number: '100%', label: 'Tax-Invoiced Medicines', sub: 'Zero fake drugs guarantee' }
  ];

  return (
    <div className="py-12 bg-white dark:bg-slate-900">
      <SEO
        title="About Us | Trusted Pharmacy in Bihar Sharif"
        description="Learn about the journey, mission, values, and 25+ year heritage of Verma Medical Hall on Ranchi Rd, Bhaisasur, Bihar Sharif. Dedicated to genuine medicines."
        canonical="https://vermamedicalhall.com/about"
      />

      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
            <HeartPulse className="w-4 h-4 text-emerald-600" />
            Our Heritage & Story
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Caring for Bihar Sharif’s Health with Integrity for Over Two Decades
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Welcome to {BUSINESS_CONFIG.name}. Situated on Ranchi Road, Bhaisasur, we have grown from a modest neighborhood chemist into one of Nalanda district's most reputable retail pharmacies.
          </p>
        </div>
      </div>

      {/* Business Story & Store Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              The Story of Verma Medical Hall
            </h2>
            <p>
              When Verma Medical Hall was founded on Ranchi Road, the goal was simple yet profound: to eliminate any doubt about medicine authenticity for patients visiting doctors and hospitals across Bihar Sharif. Counterfeit or improperly stored medicines were an unfortunate reality in many unorganized markets; our founder committed to a zero-compromise approach.
            </p>
            <p>
              Over the last 25 years, our pharmacy has maintained direct relationships with premier manufacturers—including <strong>Cipla, Sun Pharma, Abbott, GlaxoSmithKline, Alkem, Mankind, and Dr. Reddy's</strong>. Every shipment is inspected for batch numbers, expiry dates, and tamper-evident packaging.
            </p>
            <p>
              Today, we cater to daily outpatient prescriptions from Sadar Hospital and nearby private clinics, alongside serving thousands of families who depend on us for regular monthly supplies of blood pressure, thyroid, cardiac, and diabetic care.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenOrderModal('')}
                className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm flex items-center gap-2 shadow-sm transition cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Order via WhatsApp</span>
              </button>
              <a
                href={`tel:${BUSINESS_CONFIG.phone}`}
                className="px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm flex items-center gap-2 transition"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Speak with Pharmacist</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl ring-1 ring-slate-200 dark:ring-slate-800 aspect-4/3">
              <img
                src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1000&q=80"
                alt="Verma Medical Hall shelves and store"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">Store Front Overview</span>
                  <p className="text-sm font-semibold">6G38+MXX, Ranchi Rd, Bhaisasur, Bihar Sharif, Bihar 803101</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Cards */}
      <div className="bg-slate-50 dark:bg-slate-950 py-16 border-y border-slate-200/80 dark:border-slate-800 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 flex items-center justify-center font-bold mb-5">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                Our Mission
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                To provide accessible, 100% authentic, properly stored medications and healthcare supplies to every resident of Bihar Sharif and surrounding Nalanda villages, backed by compassionate pharmaceutical guidance, fair pricing, and rapid delivery.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-400 flex items-center justify-center font-bold mb-5">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                Our Vision
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                To be recognized as the most trusted healthcare resource in Nalanda district, bridging traditional pharmacist-patient rapport with modern digital ordering, instant stock checks, and continuous health awareness.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Owner & Pharmacist Desk Message */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-850 to-emerald-950 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
              <Award className="w-4 h-4 text-emerald-400" />
              Founder & Pharmacist's Desk
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              "A pharmacy is not merely a retail store; it is the final checkpoint before medication enters a patient’s body."
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              "When you walk into Verma Medical Hall or ping us on WhatsApp, we take complete responsibility for dispensing the exact drug prescribed by your doctor. We double-check potencies, verify expiry, and ensure you understand how to consume your medicines safely. This sacred duty has guided us every single day since 1999."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-lg">
                VM
              </div>
              <div>
                <div className="font-bold text-base text-white">Chief Pharmacist & Proprietor</div>
                <div className="text-xs text-emerald-300">Verma Medical Hall • Bihar Sharif</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-2">
            The Principles That Guide Us
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Our Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 flex items-center justify-center font-bold mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-base">
                  {v.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Business Journey & Timeline */}
      <div className="bg-slate-50 dark:bg-slate-950 py-16 border-y border-slate-200/80 dark:border-slate-800 mb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-2">
              Milestones
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Our 25-Year Journey in Bihar Sharif
            </h2>
          </div>

          <div className="relative border-l-2 border-emerald-500/30 ml-4 sm:ml-32 space-y-10">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative pl-6 sm:pl-8 group">
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-emerald-600 dark:bg-slate-900" />
                
                {/* Year tag for large screens */}
                <span className="hidden sm:block absolute -left-28 top-0 font-bold text-emerald-600 dark:text-emerald-400 text-sm font-mono text-right w-20">
                  {item.year}
                </span>

                <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
                  <span className="sm:hidden inline-block text-xs font-bold text-emerald-600 dark:text-emerald-400 font-mono mb-1">
                    Year {item.year}
                  </span>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Achievements */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {achievements.map((a, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700"
            >
              <div className="text-3xl sm:text-4xl font-black text-emerald-600 dark:text-emerald-400 mb-1">
                {a.number}
              </div>
              <div className="font-bold text-sm text-slate-900 dark:text-white">
                {a.label}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {a.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA to Services & Stock */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 rounded-3xl bg-slate-900 text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-2">Check Real-Time Medicine Availability</h3>
          <p className="text-sm text-slate-300 max-w-lg mx-auto mb-6">
            Looking for a specific prescription drug, antibiotic, insulin, or pediatric suspension? Use our instant stock checker.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/services"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition"
            >
              Go to Medicine Stock Checker
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl border border-slate-700 hover:bg-slate-800 text-slate-200 font-semibold text-sm transition"
            >
              Store Location & Timings
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
