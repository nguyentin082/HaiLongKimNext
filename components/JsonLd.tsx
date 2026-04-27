export default function JsonLd() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Hai Long Kim Travel',
    url: 'https://hailongkim.com',
    logo: 'https://hailongkim.com/logo.png',
    description: 'Experience unforgettable travel adventures with Hai Long Kim Travel.',
    sameAs: [
      'https://facebook.com/hailongkim',
      'https://instagram.com/hailongkim',
      'https://linkedin.com/company/hailongkim',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Ha Long City',
      addressLocality: 'Quang Ninh',
      addressCountry: 'VN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+84-555-123-4567',
      email: 'info@hailongkim.com',
    },
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Hai Long Kim Travel',
    image: 'https://hailongkim.com/hero-bg.jpg',
    description: 'Vietnam travel agency offering cruise tours, cultural tours, adventure tours, and holiday packages.',
    url: 'https://hailongkim.com',
    telephone: '+84-555-123-4567',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Ha Long City',
      addressLocality: 'Quang Ninh',
      postalCode: '20000',
      addressCountry: 'VN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '20.8552',
      longitude: '107.1839',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '18:00',
    },
    rating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1000',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </>
  );
}
