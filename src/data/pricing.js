const pricing = [
  {
    tier: 'Starter',
    price: '3.5',
    currency: 'IDR (Juta)',
    featured: false,
    features: [
      'Single page website',
      'Mobile responsive design',
      'Basic SEO setup',
      'Contact form integration',
      '1 round of revision',
    ],
    disabledFeatures: [
      'Custom animations',
      'CMS integration',
      'Priority support',
    ],
  },
  {
    tier: 'Professional',
    price: '8',
    currency: 'IDR (Juta)',
    featured: true,
    features: [
      'Multi-page website (up to 7)',
      'Custom UI/UX design',
      'Advanced SEO optimization',
      'CMS integration',
      'Custom animations',
      '3 rounds of revision',
      'Analytics dashboard setup',
    ],
    disabledFeatures: ['Priority support'],
  },
  {
    tier: 'Enterprise',
    price: '15',
    currency: 'IDR (Juta)',
    featured: false,
    features: [
      'Full-stack web application',
      'Custom UI/UX design',
      'Advanced SEO optimization',
      'CMS integration',
      'Custom animations',
      'Unlimited revisions',
      'API integration',
      'Priority support',
    ],
    disabledFeatures: [],
  },
]

export default pricing
