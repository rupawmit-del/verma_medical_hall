export interface BusinessConfig {
  name: string;
  shortName: string;
  tagline: string;
  category: string;
  phone: string;
  displayPhone: string;
  whatsappNumber: string;
  address: {
    street: string;
    locality: string;
    city: string;
    state: string;
    pincode: string;
    plusCode: string;
    full: string;
    nearbyLandmarks: string[];
  };
  email: string;
  workingHours: {
    weekdays: string;
    sunday: string;
    emergency: string;
  };
  googleMaps: {
    searchUrl: string;
    directionsUrl: string;
    embedQuery: string;
  };
  pwa: {
    enabled: boolean;
    appName: string;
    shortName: string;
    themeColor: string;
    backgroundColor: string;
    startUrl: string;
    display: string;
  };
  socials: {
    facebook?: string;
    instagram?: string;
    whatsapp: string;
  };
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
}

export const BUSINESS_CONFIG: BusinessConfig = {
  name: "Verma Medical Hall",
  shortName: "VermaMed",
  tagline: "Your Trusted Medical Store for Genuine Medicines & Healthcare Needs",
  category: "Pharmacy & Surgical Supplies",
  phone: "09334813113",
  displayPhone: "093348 13113",
  whatsappNumber: "919334813113",
  address: {
    street: "Ranchi Rd",
    locality: "Bhaisasur",
    city: "Bihar Sharif",
    state: "Bihar",
    pincode: "803101",
    plusCode: "6G38+MXX",
    full: "6G38+MXX, Ranchi Rd, Bhaisasur, Bihar Sharif, Bihar 803101",
    nearbyLandmarks: [
      "Near Ranchi Road Main Crossing",
      "Bhaisasur Chowk",
      "Close to Sadar Hospital Road",
      "Bihar Sharif Central Market area"
    ]
  },
  email: "contact@vermamedicalhall.in",
  workingHours: {
    weekdays: "07:30 AM – 10:30 PM (Mon - Sat)",
    sunday: "08:00 AM – 09:30 PM (Sunday)",
    emergency: "24/7 Urgent Medical Dispatch Available"
  },
  googleMaps: {
    searchUrl: "https://www.google.com/maps/search/?api=1&query=Verma+Medical+Hall+Ranchi+Rd+Bhaisasur+Bihar+Sharif+Bihar+803101",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=25.1952,85.5165",
    embedQuery: "https://maps.google.com/maps?q=Verma%20Medical%20Hall,%20Ranchi%20Rd,%20Bhaisasur,%20Bihar%20Sharif,%20Bihar%20803101&t=&z=16&ie=UTF8&iwloc=&output=embed"
  },
  pwa: {
    enabled: true,
    appName: "Verma Medical Hall",
    shortName: "VermaMed",
    themeColor: "#0A8F6A",
    backgroundColor: "#ffffff",
    startUrl: "/",
    display: "standalone"
  },
  socials: {
    whatsapp: "https://wa.me/919334813113",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com"
  },
  stats: [
    { label: "Years of Trust", value: "25+", description: "Serving Bihar Sharif families" },
    { label: "Authentic Products", value: "10,000+", description: "Batch-verified drugs & devices" },
    { label: "Happy Customers", value: "50,000+", description: "Trusted local patronage" },
    { label: "Home Deliveries", value: "100%", description: "Prompt delivery in Bihar Sharif" }
  ]
};

export const SITE_CONFIG = BUSINESS_CONFIG;
