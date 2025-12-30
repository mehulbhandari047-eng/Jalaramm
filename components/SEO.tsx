
import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article';
  canonical?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  image = 'https://images.unsplash.com/photo-1544735049-717e92133f32?auto=format&fit=crop&w=1200&q=80',
  type = 'website',
  canonical = "https://jalaramenterprisesdaman.com"
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

    // Dynamic Canonical Link
    let link: HTMLLinkElement | null = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonical);

    // Multi-Layered Schema Markup for #1 Indexing
    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "TravelAgency",
          "@id": "https://jalaramenterprisesdaman.com/#organization",
          "name": "Jalaram Enterprises",
          "url": "https://jalaramenterprisesdaman.com",
          "logo": image,
          "image": image,
          "description": "Daman's leading agency for luxury tours, car rentals, and Pan-India logistics managed by Amar Bhandari.",
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
          "telephone": "+91-9979338355",
          "priceRange": "$$",
          "openingHours": "Mo-Su 00:00-23:59"
        },
        {
          "@type": "Service",
          "serviceType": "Car Rental & Transport",
          "provider": { "@id": "https://jalaramenterprisesdaman.com/#organization" },
          "areaServed": "India",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Travel & Transport Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Luxury Tour Packages"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Pan-India Logistics & Goods Transport"
                }
              }
            ]
          }
        }
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

  }, [title, description, image, type, canonical]);

  return null;
};

export default SEO;
