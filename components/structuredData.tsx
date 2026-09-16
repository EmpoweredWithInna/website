import { SITE } from '../lib/site';

export function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE.origin}/#organization`,
        name: SITE.name,
        url: SITE.origin,
        description: SITE.description,
        telephone: SITE.phoneE164,
        founder: {
          '@id': `${SITE.origin}/#inna-benyukhis`,
        },
        logo: {
          '@type': 'ImageObject',
          url: `${SITE.origin}/Empowered_SQ_logo.png`,
        },
      },
      {
        '@type': 'Person',
        '@id': `${SITE.origin}/#inna-benyukhis`,
        name: SITE.practitionerName,
        url: `${SITE.origin}/#about`,
        worksFor: {
          '@id': `${SITE.origin}/#organization`,
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE.origin}/#website`,
        url: SITE.origin,
        name: SITE.name,
        description: SITE.description,
        inLanguage: SITE.language,
        publisher: {
          '@id': `${SITE.origin}/#organization`,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
