export type MedicineStatus = 'Available' | 'Limited Stock' | 'Out of Stock';

export interface MedicineItem {
  id: string;
  name: string;
  brand: string;
  category: string;
  composition: string;
  mrp: number;
  availableQuantity: number;
  expiry: string;
  status: MedicineStatus;
  dosageForm: string;
  prescriptionRequired: boolean;
}

export interface ServiceCategory {
  id: string;
  title: string;
  tagline: string;
  iconName: string;
  description: string;
  features: string[];
  popularItems: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'store' | 'shelves' | 'equipment' | 'products' | 'services';
  imageUrl: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface CustomerReview {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface WhatsAppOrderFormData {
  customerName: string;
  phone: string;
  email: string;
  address: string;
  medicineName: string;
  hasPrescription: boolean;
  prescriptionFileName?: string;
  preferredTime: string;
  message: string;
}
