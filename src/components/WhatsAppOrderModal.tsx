import React, { useState } from 'react';
import { X, Send, PhoneCall, Upload, FileCheck, AlertCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/siteConfig';

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledMedicine?: string;
}

export const WhatsAppOrderModal: React.FC<WhatsAppOrderModalProps> = ({
  isOpen,
  onClose,
  prefilledMedicine = ''
}) => {
  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    email: '',
    address: '',
    medicineName: prefilledMedicine,
    hasPrescription: 'No',
    prescriptionFileName: '',
    preferredTime: 'Standard (Within 2 Hours)',
    message: ''
  });

  const [prescriptionFile, setPrescriptionFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Sync prefilledMedicine if changed
  React.useEffect(() => {
    if (prefilledMedicine) {
      setFormData((prev) => ({ ...prev, medicineName: prefilledMedicine }));
    }
  }, [prefilledMedicine]);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPrescriptionFile(file);
      setFormData((prev) => ({
        ...prev,
        hasPrescription: 'Yes',
        prescriptionFileName: file.name
      }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.customerName.trim()) {
      newErrors.customerName = 'Please enter your full name';
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.medicineName.trim() && formData.hasPrescription !== 'Yes') {
      newErrors.medicineName = 'Specify medicine required or upload prescription';
    }
    if (!formData.address.trim()) {
      newErrors.address = 'Please enter delivery address in Bihar Sharif';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const text = `*Hello ${BUSINESS_CONFIG.name}, Medicine Order*
----------------------------------------
*Customer Name:* ${formData.customerName}
*Phone:* ${formData.phone}
${formData.email ? `*Email:* ${formData.email}\n` : ''}*Medicine Required:* ${formData.medicineName || 'Attached in Prescription'}
*Delivery Address:* ${formData.address}
*Prescription Attached:* ${formData.hasPrescription} ${formData.prescriptionFileName ? `(${formData.prescriptionFileName})` : ''}
*Preferred Time:* ${formData.preferredTime}
${formData.message ? `*Special Notes:* ${formData.message}` : ''}
----------------------------------------
_Order placed via ${BUSINESS_CONFIG.name} Online Portal_`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-modal-title"
    >
      <div className="relative w-full max-w-xl my-8 rounded-2xl bg-white p-6 sm:p-7 shadow-2xl ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
              <Send className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <h3 id="order-modal-title" className="text-lg font-bold text-slate-900 dark:text-white">
                Order Medicines via WhatsApp
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Direct pharmacy desk confirmation with home delivery in Bihar Sharif
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSendWhatsApp} className="mt-5 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Customer Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.customerName}
                onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                placeholder="e.g. Rajesh Kumar"
                className={`w-full px-3.5 py-2 text-sm rounded-xl border bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 ${
                  errors.customerName
                    ? 'border-red-500 focus:ring-red-400'
                    : 'border-slate-200 dark:border-slate-700 focus:ring-emerald-500'
                }`}
              />
              {errors.customerName && (
                <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.customerName}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g. 9876543210"
                className={`w-full px-3.5 py-2 text-sm rounded-xl border bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 ${
                  errors.phone
                    ? 'border-red-500 focus:ring-red-400'
                    : 'border-slate-200 dark:border-slate-700 focus:ring-emerald-500'
                }`}
              />
              {errors.phone && (
                <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.phone}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Email Address (Optional)
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="rajesh@example.com"
                className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Preferred Delivery Time
              </label>
              <select
                value={formData.preferredTime}
                onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="Urgent (Within 45 Mins)">Urgent (Within 45 Mins)</option>
                <option value="Standard (Within 2 Hours)">Standard (Within 2 Hours)</option>
                <option value="Today Evening (6 PM - 9 PM)">Today Evening (6 PM - 9 PM)</option>
                <option value="Tomorrow Morning">Tomorrow Morning</option>
                <option value="Self Store Pickup">Self Store Pickup at Ranchi Rd</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Medicine Name(s) & Quantity
            </label>
            <input
              type="text"
              value={formData.medicineName}
              onChange={(e) => setFormData({ ...formData, medicineName: e.target.value })}
              placeholder="e.g. Dolo 650 (2 strips), Augmentin 625 (1 strip), ORS (5 pkts)"
              className={`w-full px-3.5 py-2 text-sm rounded-xl border bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 ${
                errors.medicineName
                  ? 'border-red-500 focus:ring-red-400'
                  : 'border-slate-200 dark:border-slate-700 focus:ring-emerald-500'
              }`}
            />
            {errors.medicineName && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.medicineName}
              </p>
            )}
          </div>

          {/* Upload Prescription */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Upload Prescription Photo / PDF (Optional if typed)
            </label>
            <div className="relative border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl p-3 hover:border-emerald-500 transition-colors bg-slate-50/50 dark:bg-slate-800/30">
              <input
                type="file"
                accept="image/*,.pdf"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                id="prescription-upload"
              />
              <div className="flex items-center justify-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                {prescriptionFile ? (
                  <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-medium">
                    <FileCheck className="w-4 h-4" />
                    <span>{prescriptionFile.name} (Ready to share)</span>
                  </div>
                ) : (
                  <>
                    <Upload className="w-4 h-4 text-emerald-600" />
                    <span>Click or drag doctor prescription (JPG, PNG, PDF)</span>
                  </>
                )}
              </div>
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              Note: You can attach the prescription image directly on WhatsApp once the chat opens.
            </p>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Delivery Address in Bihar Sharif <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={2}
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              placeholder="House/Shop No., Landmark, Locality (e.g. Near Bhaisasur Chowk, Bihar Sharif)"
              className={`w-full px-3.5 py-2 text-sm rounded-xl border bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 ${
                errors.address
                  ? 'border-red-500 focus:ring-red-400'
                  : 'border-slate-200 dark:border-slate-700 focus:ring-emerald-500'
              }`}
            />
            {errors.address && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.address}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Special Instructions / Notes (Optional)
            </label>
            <input
              type="text"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="e.g. Call before coming, urgent delivery needed"
              className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Buttons: Send via WhatsApp & Call Now */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              id="send-whatsapp-order-btn"
              className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Send via WhatsApp</span>
            </button>

            <a
              href={`tel:${BUSINESS_CONFIG.phone}`}
              id="call-pharmacist-btn"
              className="w-full sm:w-auto py-3 px-5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-800 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800 font-semibold text-sm flex items-center justify-center gap-2 transition"
            >
              <PhoneCall className="w-4 h-4 text-blue-600" />
              <span>Call Now</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
