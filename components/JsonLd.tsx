const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.hlktourist.vn';

export default function JsonLd() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'TravelAgency'],
    '@id': `${SITE_URL}/#organization`,
    name: 'Công ty TNHH TM DV Hải Long Kim',
    alternateName: 'Hải Long Kim Tourist',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/icon.svg`,
      width: 566,
      height: 622,
    },
    image: `${SITE_URL}/hero-bg.jpg`,
    description:
      'Công ty TNHH TM DV Hải Long Kim – đơn vị lữ hành bản địa uy tín với 20+ năm kinh nghiệm. Chuyên tour 3 miền trọn gói, vé máy bay, vé tàu và dịch vụ vận chuyển toàn quốc.',
    foundingDate: '2004',
    sameAs: [
      'http://hlktourist.com',
      'https://facebook.com/hailongkimtourist',
      'https://zalo.me/hailongkim',
    ],
    address: [
      {
        '@type': 'PostalAddress',
        name: 'Chi nhánh TP.HCM',
        streetAddress: '95 Đường 1, Khu Phố 26, Phường Long Trường',
        addressLocality: 'TP. Hồ Chí Minh',
        addressCountry: 'VN',
      },
      {
        '@type': 'PostalAddress',
        name: 'Chi nhánh An Giang',
        streetAddress: 'Lô 12 Venice Villas, Đường Võ Văn Kiệt, Phường Hà Tiên',
        addressLocality: 'An Giang',
        addressCountry: 'VN',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: '+84-901-234-567',
      email: 'info@hailongkim.vn',
      availableLanguage: ['Vietnamese', 'English'],
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '07:30',
        closes: '20:00',
      },
    },
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'TravelAgency'],
    '@id': `${SITE_URL}/#localbusiness`,
    name: 'Hải Long Kim Tourist',
    image: `${SITE_URL}/hero-bg.jpg`,
    description:
      'Đơn vị lữ hành bản địa uy tín, cung cấp tour 3 miền trọn gói, đại lý vé máy bay – vé tàu, và dịch vụ vận chuyển du lịch toàn quốc.',
    url: SITE_URL,
    telephone: '+84-901-234-567',
    email: 'info@hailongkim.vn',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '95 Đường 1, Khu Phố 26, Phường Long Trường',
      addressLocality: 'TP. Hồ Chí Minh',
      addressCountry: 'VN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '10.797639',
      longitude: '106.791250',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '07:30',
      closes: '20:00',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '500',
      bestRating: '5',
      worstRating: '1',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'Hải Long Kim Tourist',
    inLanguage: ['vi-VN', 'en-US'],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
