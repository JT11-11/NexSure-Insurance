const insuranceProductsData = {
  'Life & Health': [
    {
      title: 'Big 3 Critical Illness',
      price: '20',
      description: '100% payout for cancer, heart attack and stroke',
      isPopular: true
    },
    {
      title: 'Term Life Plus',
      price: '83',
      description: 'Up to $1.5 million coverage without medical examination',
      isPopular: true
    },
    {
      title: 'Critical Illness Plus',
      price: '16',
      description: '100% payout for early, intermediate and late-stage critical illnesses',
      isPopular: false
    },
    {
      title: 'Flex',
      price: '33',
      description: 'The most affordable online critical illness plan to get started',
      isPopular: false
    }
  ],

  'Home & Maid': [
    {
      title: 'Home Protection',
      price: '15',
      description: 'Comprehensive coverage for your home and belongings',
      isPopular: true
    },
    {
      title: 'Maid Insurance',
      price: '25',
      description: 'Complete protection for your domestic helper',
      isPopular: false
    },
    {
      title: 'Home Contents',
      price: '10',
      description: 'Protection for your valuable belongings',
      isPopular: false
    },
    {
      title: 'Landlord Insurance',
      price: '30',
      description: 'Protect your rental property investment',
      isPopular: true
    }
  ],

  'Motor': [
    {
      title: 'Car Insurance Plus',
      price: '75',
      description: 'Comprehensive coverage for your vehicle',
      isPopular: true
    },
    {
      title: 'Motorcycle Insurance',
      price: '45',
      description: 'Protection for your two-wheeler',
      isPopular: false
    },
    {
      title: 'Commercial Vehicle',
      price: '90',
      description: 'Insurance for business vehicles',
      isPopular: true
    },
    {
      title: 'Third Party Coverage',
      price: '40',
      description: 'Basic protection for your vehicle',
      isPopular: false
    }
  ],

  'Travel': [
    {
      title: 'Travel Elite',
      price: '28',
      description: 'Premium travel protection worldwide',
      isPopular: true
    },
    {
      title: 'Travel Basic',
      price: '18',
      description: 'Essential coverage for your trips',
      isPopular: false
    },
    {
      title: 'Annual Travel',
      price: '150',
      description: 'Year-round protection for frequent travelers',
      isPopular: true
    },
    {
      title: 'Student Travel',
      price: '22',
      description: 'Special coverage for studying abroad',
      isPopular: false
    }
  ],

  'Invest & Save': [
    {
      title: 'Savings Plus',
      price: '100',
      description: 'Grow your wealth with guaranteed returns',
      isPopular: true
    },
    {
      title: 'Investment Link',
      price: '200',
      description: 'Flexible investment options with protection',
      isPopular: true
    },
    {
      title: 'Education Savings',
      price: '150',
      description: 'Save for your child\'s future education',
      isPopular: false
    },
    {
      title: 'Retirement Plan',
      price: '180',
      description: 'Secure your retirement with regular payouts',
      isPopular: false
    }
  ]
};

const insuranceTechProducts = [
  {
    type: 'cybersecurity',
    price: '45',
    title: 'Cybersecurity Insurance',
    description: 'Complete protection against cyber threats, data breaches, and ransomware attacks',
    isPopular: true
  },
  {
    type: 'aiContent',
    price: '35',
    title: 'AI Content Liability',
    description: 'Legal protection for AI-generated content including copyright and intellectual property',
    isPopular: false
  },
  {
    type: 'blockchain',
    price: '60',
    title: 'Blockchain Asset',
    description: 'Secure coverage for your cryptocurrencies and NFTs against theft and hacking',
    isPopular: false
  }
];

export  { insuranceProductsData };
export { insuranceTechProducts };