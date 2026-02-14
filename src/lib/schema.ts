export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Bravo Cenografia',
  description: 'Criamos experiências únicas através da cenografia. Especialistas em eventos corporativos, stands, festivais e ativações de marca.',
  url: 'https://bravocenografia-site.vercel.app',
  logo: 'https://bravocenografia-site.vercel.app/images/LOGO_BRAVO.png',
  email: 'bravocenografia@gmail.com',
  telephone: '+55 82 99615-7878',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua Euclides Malta, 157 - Brasília',
    addressLocality: 'Arapiraca',
    addressRegion: 'AL',
    postalCode: '57312-625',
    addressCountry: 'BR',
  },
  sameAs: [
    'https://www.instagram.com/bravocenografia',
  ],
  areaServed: {
    '@type': 'State',
    name: 'Alagoas',
  },
  serviceType: ['Cenografia', 'Ambientação de Eventos', 'Stands', 'Decoração de Festivais', 'Eventos Corporativos'],
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Bravo Cenografia',
  image: 'https://bravocenografia-site.vercel.app/images/LOGO_BRAVO.png',
  '@id': 'https://bravocenografia-site.vercel.app',
  url: 'https://bravocenografia-site.vercel.app',
  telephone: '+55 82 99615-7878',
  email: 'bravocenografia@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua Euclides Malta, 157 - Brasília',
    addressLocality: 'Arapiraca',
    addressRegion: 'AL',
    postalCode: '57312-625',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -9.7519,
    longitude: -36.6615,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '18:00',
  },
  priceRange: '$$',
}
