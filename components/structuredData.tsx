
export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Rosales Yard Maintenance",
    "description": "Professional lawn care and landscaping services in Austin, Buda, Kyle & Manchaca. Owner-operated since 2019.",
    "url": "https://rosalesyard.com",
    "telephone": "+1-512-694-1773",
    "email": "info@rosalesyard.com",
    "foundingDate": "2019",
    "founder": {
      "@type": "Person",
      "name": "John Rosales"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Austin",
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "30.2672",
      "longitude": "-97.7431"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Austin",
        "addressRegion": "TX"
      },
      {
        "@type": "City", 
        "name": "Buda",
        "addressRegion": "TX"
      },
      {
        "@type": "City",
        "name": "Kyle", 
        "addressRegion": "TX"
      },
      {
        "@type": "City",
        "name": "Manchaca",
        "addressRegion": "TX"
      }
    ],
    "serviceType": [
      "Lawn Care",
      "Landscaping",
      "Yard Maintenance",
      "Lawn Mowing",
      "Landscape Design"
    ],
    "priceRange": "$$",
    "openingHours": [
      "Mo-Fr 07:00-18:00",
      "Sa 08:00-16:00"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "500"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Lawn Care Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lawn Mowing & Maintenance",
            "description": "Professional weekly or bi-weekly mowing with precision cutting heights"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Full Maintenance Package",
            "description": "Complete weekly lawn care package with 25% savings"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Landscape Design & Installation",
            "description": "Custom landscape transformation with native Texas plants"
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
