import React, { useState, useMemo } from 'react';
import medicineDataRaw from '../data/medicineStock.json';
import { MedicineItem, MedicineStatus } from '../types';
import { Search, CheckCircle2, AlertTriangle, XCircle, ShoppingBag, Filter, ShieldCheck, RefreshCw } from 'lucide-react';

interface MedicineStockCheckerProps {
  onSelectMedicineForOrder?: (medicineName: string) => void;
}

export const MedicineStockChecker: React.FC<MedicineStockCheckerProps> = ({
  onSelectMedicineForOrder
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [statusFilter, setStatusFilter] = useState<string>('All');

  const medicines: MedicineItem[] = medicineDataRaw as MedicineItem[];

  // Unique categories list
  const categories = useMemo(() => {
    const cats = Array.from(new Set(medicines.map((m) => m.category)));
    return ['All', ...cats];
  }, [medicines]);

  // Filtered medicines
  const filteredMedicines = useMemo(() => {
    return medicines.filter((med) => {
      const matchesSearch =
        med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        med.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        med.composition.toLowerCase().includes(searchTerm.toLowerCase()) ||
        med.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory === 'All' || med.category === selectedCategory;
      const matchesStatus = statusFilter === 'All' || med.status === statusFilter;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [medicines, searchTerm, selectedCategory, statusFilter]);

  const getStatusBadge = (status: MedicineStatus) => {
    switch (status) {
      case 'Available':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Available
          </span>
        );
      case 'Limited Stock':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-950/50 dark:text-amber-300 dark:border-amber-800">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
            Limited Stock
          </span>
        );
      case 'Out of Stock':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200 dark:bg-rose-950/50 dark:text-rose-300 dark:border-rose-800">
            <XCircle className="w-3.5 h-3.5 text-rose-600" />
            Out of Stock
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div id="medicine-stock-checker" className="w-full bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xl ring-1 ring-slate-200/80 dark:ring-slate-800">
      {/* Header & Description */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 text-xs font-bold tracking-wide uppercase mb-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Live Inventory Catalog
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            Medicine Stock Availability Checker
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
            Search genuine medicines, health monitoring devices, and daily healthcare supplies available at our Ranchi Rd, Bihar Sharif store.
          </p>
        </div>

        {/* Quick stat counter */}
        <div className="flex items-center gap-3 self-start md:self-auto px-4 py-2.5 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-600 dark:text-slate-300">
          <RefreshCw className="w-4 h-4 text-emerald-600 animate-spin-reverse" />
          <span>Showing <strong className="text-slate-900 dark:text-white font-bold">{filteredMedicines.length}</strong> of {medicines.length} items</span>
        </div>
      </div>

      {/* Search Bar & Controls */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-3.5">
        {/* Search Input */}
        <div className="lg:col-span-6 relative">
          <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search medicine name, formula (e.g. Paracetamol, Pantoprazole), or brand..."
            className="w-full pl-11 pr-4 py-3 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Select */}
        <div className="lg:col-span-3">
          <div className="relative">
            <Filter className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full pl-10 pr-8 py-3 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition appearance-none cursor-pointer"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === 'All' ? 'All Categories' : cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Status Filter */}
        <div className="lg:col-span-3">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition appearance-none cursor-pointer"
          >
            <option value="All">All Availability</option>
            <option value="Available">Available Only</option>
            <option value="Limited Stock">Limited Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
        </div>
      </div>

      {/* Results List */}
      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
              <tr>
                <th scope="col" className="px-5 py-3.5">Medicine & Formula</th>
                <th scope="col" className="px-4 py-3.5">Brand / Manufacturer</th>
                <th scope="col" className="px-4 py-3.5">Category & Unit</th>
                <th scope="col" className="px-4 py-3.5">MRP (₹)</th>
                <th scope="col" className="px-4 py-3.5">Stock Status</th>
                <th scope="col" className="px-4 py-3.5 text-right">Order Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {filteredMedicines.length > 0 ? (
                filteredMedicines.map((med) => (
                  <tr
                    key={med.id}
                    className="hover:bg-slate-50/70 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    <td className="px-5 py-4">
                      <div className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <span>{med.name}</span>
                        {med.prescriptionRequired && (
                          <span className="text-[10px] uppercase font-extrabold px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                            Rx
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-mono">
                        {med.composition}
                      </div>
                    </td>
                    <td className="px-4 py-4 text-xs font-medium text-slate-700 dark:text-slate-300">
                      {med.brand}
                    </td>
                    <td className="px-4 py-4">
                      <div className="text-xs font-medium text-slate-800 dark:text-slate-200">
                        {med.category}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        {med.dosageForm} • Exp: {med.expiry}
                      </div>
                    </td>
                    <td className="px-4 py-4 font-bold text-slate-900 dark:text-white">
                      ₹{med.mrp.toFixed(2)}
                    </td>
                    <td className="px-4 py-4">
                      {getStatusBadge(med.status)}
                      <div className="text-[11px] text-slate-400 mt-1">
                        {med.status === 'Available'
                          ? `${med.availableQuantity} units ready`
                          : med.status === 'Limited Stock'
                          ? `Only ${med.availableQuantity} left`
                          : 'Restocking soon'}
                      </div>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <button
                        onClick={() => onSelectMedicineForOrder && onSelectMedicineForOrder(med.name)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition shadow-xs ${
                          med.status === 'Out of Stock'
                            ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                            : 'bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer'
                        }`}
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>{med.status === 'Out of Stock' ? 'Pre-Order' : 'WhatsApp Order'}</span>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-slate-500 dark:text-slate-400">
                    <p className="text-base font-semibold text-slate-700 dark:text-slate-300">No matching medicines found in catalog</p>
                    <p className="text-xs mt-1">Don't worry! We stock thousands of items. Call or send your prescription via WhatsApp directly.</p>
                    <button
                      onClick={() => onSelectMedicineForOrder && onSelectMedicineForOrder(searchTerm)}
                      className="mt-4 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition"
                    >
                      Inquire About "{searchTerm}" via WhatsApp
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
