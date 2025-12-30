
import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article';
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  image = 'https://images.unsplash.com/photo-1544735049-717e92133f32?auto=format&fit=crop&w=1200&q=80',
  type = 'website'
}) => {
  useEffect(() => {
    const siteName = "Jalaram Enterprises Daman";
    const fullTitle = `${title} | ${siteName}`;
    document.title = fullTitle;

    // Update Meta Tags
    const updateMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateMeta('description', description);
    updateMeta('og:title', fullTitle, 'property');
    updateMeta('og:description', description, 'property');
    updateMeta('og:image', image, 'property');
    updateMeta('og:type', type, 'property');
    updateMeta('twitter:title', fullTitle);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', image);

    // JSON-LD Structured Data for Local Business
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "TravelAgency",
      "name": "Jalaram Enterprises",
      "alternateName": "Jalaram Travels & Transport Daman",
      "description": description,
      "url": "https://jalaramenterprisesdaman.com",
      "logo": image,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9979338355",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["en", "Hindi", "Gujarati"]
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1360/1 school falia dunetha road, dunetha Nani daman",
        "addressLocality": "Daman",
        "postalCode": "396210",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 20.4077,
        "longitude": 72.8433
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "sameAs": [
        "https://wa.me/9979338355"
      ]
    };

    const scriptId = 'json-ld-schema';
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(schemaData);

  }, [title, description, image, type]);

  return null;
};

export default SEO;
