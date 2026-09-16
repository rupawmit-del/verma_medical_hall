import React, { useEffect } from 'react';
import { BUSINESS_CONFIG } from '../config/siteConfig';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  schemaType?: 'LocalBusiness' | 'MedicalBusiness' | 'AboutPage' | 'ContactPage' | 'MedicalWebPage';
  faqSchema?: { question: string; answer: string }[];
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  schemaType = 'Pharmacy',
  faqSchema
}) => {
  useEffect(() => {
    // Update document title
    document.title = `${title} | ${BUSINESS_CONFIG.name}`;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    // Update Open Graph
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', `${title} | ${BUSINESS_CONFIG.name}`);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    // Update Canonical
    if (canonical) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', canonical);
    }
  }, [title, description, canonical]);

  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'Pharmacy',
    name: BUSINESS_CONFIG.name,
    alternateName: BUSINESS_CONFIG.shortName,
    description: BUSINESS_CONFIG.tagline,
    telephone: BUSINESS_CONFIG.phone,
    url: typeof window !== 'undefined' ? window.location.origin : 'https://vermamedicalhall.com',
    priceRange: '₹₹',
    image: '/icons/icon-512.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Ranchi Rd, Bhaisasur',
      addressLocality: 'Bihar Sharif',
      addressRegion: 'Bihar',
      postalCode: '803101',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.1952,
      longitude: 85.5165
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '07:30',
        closes: '22:30'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday'],
        opens: '08:00',
        closes: '21:30'
      }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Pharmaceutical & Healthcare Essentials',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Prescription Medicine Dispensing' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'WhatsApp Medicine Home Delivery' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Surgical & Medical Equipment Supplies' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Health Devices & BP Monitors' } }
      ]
    }
  };

  const faqSchemaData = faqSchema && faqSchema.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqSchema.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
      {faqSchemaData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
        />
      )}
    </>
  );
};
