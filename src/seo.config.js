const SITE_URL = 'https://yourdomain.com';

const SEO = {
  titleTemplate: '%s | Obi Tobechukwu',
  defaultTitle: 'Obi Tobechukwu — Next.js Web Developer',
  description:
    'I design and build scalable, SEO-ready web applications for businesses using Next.js, React, and modern tooling.',
  canonical: SITE_URL,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Obi Tobechukwu Portfolio',
    images: [
      {
        url: 'https://res.cloudinary.com/your-cloud-name/image/upload/v000000/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Obi Tobechukwu – Web Developer',
      },
    ],
  },
  twitter: {
    handle: '@yourhandle',
    site: '@yourhandle',
    cardType: 'summary_large_image',
  },
};

export default SEO;
