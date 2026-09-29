import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Sony WH-1000XM5 ANC Wireless',
    slug: 'sony-wh-1000xm5-wireless-anc',
    category: 'tech',
    categoryLabel: 'High-Tech & Audio',
    price: 279,
    oldPrice: 419,
    discountPercentage: 33,
    rating: 4.9,
    reviewsCount: 384,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Le casque référence absolue en réduction de bruit active. Équipé de deux processeurs et de 8 microphones pour une immersion acoustique sans compromis et 30 heures d’autonomie.',
    features: [
      'Réduction de bruit active intelligente Auto NC Optimizer',
      'Autonomie jusqu’à 30 heures avec charge ultra-rapide (3 min = 3h)',
      'Appels ultra-clairs avec 4 micros à formation de faisceau',
      'Connexion multipoint Bluetooth 5.2 haute résolution LDAC'
    ],
    stock: 9,
    soldCount: 84,
    isFlashDeal: true,
    flashEndsInMinutes: 48,
    badge: 'Offre Star - Ventes Flash',
    colors: [
      { name: 'Noir Carbone', hex: '#111111' },
      { name: 'Argent Platine', hex: '#D1D5DB' },
      { name: 'Bleu Minuit', hex: '#1E3A8A' }
    ]
  },
  {
    id: 'prod-2',
    name: 'Sony PlayStation 5 Slim Edition',
    slug: 'sony-playstation-5-slim-edition',
    category: 'gaming',
    categoryLabel: 'Gaming & Setup',
    price: 439,
    oldPrice: 549,
    discountPercentage: 20,
    rating: 4.9,
    reviewsCount: 912,
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'La console PlayStation 5 dans son nouveau design allégé de 30%. Stockage SSD ultra-rapide de 1 To intégré, retour haptique révolutionnaire et audio 3D immersif.',
    features: [
      'Disque SSD NVMe haute vitesse de 1 To inclus',
      'Ray Tracing matériel et prise en charge 4K jusqu’à 120 FPS',
      'Manette DualSense sans fil avec gâchettes adaptatives',
      'Technologie sonore Tempest 3D AudioTech'
    ],
    stock: 14,
    soldCount: 165,
    isFlashDeal: true,
    flashEndsInMinutes: 72,
    badge: 'Best-Seller Gaming',
    colors: [
      { name: 'Blanc Glace', hex: '#F3F4F6' },
      { name: 'Noir Midnight', hex: '#1F2937' }
    ]
  },
  {
    id: 'prod-3',
    name: 'Apple MacBook Pro 14 M3 Pro',
    slug: 'apple-macbook-pro-14-m3-pro',
    category: 'tech',
    categoryLabel: 'High-Tech & Audio',
    price: 1849,
    oldPrice: 2399,
    discountPercentage: 23,
    rating: 5.0,
    reviewsCount: 142,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Une puissance sans précédent pour les professionnels exigeants. Puce M3 Pro avec architecture GPU nouvelle génération, écran Liquid Retina XDR et jusqu’à 18 heures d’autonomie.',
    features: [
      'Puce Apple M3 Pro CPU 11 cœurs et GPU 14 cœurs',
      'Écran Liquid Retina XDR 14,2 pouces ProMotion 120 Hz',
      '18 Go de mémoire unifiée et 512 Go de stockage SSD',
      'Connectique complète avec 3 ports Thunderbolt 4, HDMI et lecteur SD'
    ],
    stock: 5,
    soldCount: 42,
    isFlashDeal: false,
    badge: 'Offre Pro Exclusive',
    colors: [
      { name: 'Noir Sidéral', hex: '#1E293B' },
      { name: 'Argent', hex: '#E2E8F0' }
    ]
  },
  {
    id: 'prod-4',
    name: 'Clavier Mécanique Sans Fil Apex Pro TKL',
    slug: 'apex-pro-tkl-wireless-keyboard',
    category: 'gaming',
    categoryLabel: 'Gaming & Setup',
    price: 149,
    oldPrice: 259,
    discountPercentage: 42,
    rating: 4.8,
    reviewsCount: 228,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Le clavier e-sport le plus rapide de sa catégorie. Switches OmniPoint réglables au dixième de millimètre, connexion 2,4 GHz sans latence et rétroéclairage RVB touche par touche.',
    features: [
      'Switches analogiques réglables de 0,2 mm à 3,8 mm',
      'Écran OLED Smart Display pour les réglages en direct',
      'Châssis en aluminium aéronautique série 5000',
      'Connectivité double sans fil 2,4 GHz Quantum 2.0 et Bluetooth 5.0'
    ],
    stock: 12,
    soldCount: 96,
    isFlashDeal: true,
    flashEndsInMinutes: 34,
    badge: 'Top Équipement E-Sport',
    colors: [
      { name: 'Noir Mat', hex: '#18181B' }
    ]
  },
  {
    id: 'prod-5',
    name: 'Garmin Fenix 7 Pro Sapphire Solar',
    slug: 'garmin-fenix-7-pro-sapphire-solar',
    category: 'lifestyle',
    categoryLabel: 'Montres & Lifestyle',
    price: 589,
    oldPrice: 849,
    discountPercentage: 31,
    rating: 4.9,
    reviewsCount: 167,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Montre GPS multisport haut de gamme avec verre solaire Power Sapphire, lampe torche LED intégrée, cartographie mondiale TopoActive et autonomie record de 22 jours.',
    features: [
      'Verre solaire inrayable Power Sapphire avec boîtier titane',
      'Cartographie TopoActive multi-continents préchargée',
      'Mesures d’endurance en temps réel et score d’ascension',
      'Autonomie jusqu’à 22 jours en mode montre connectée'
    ],
    stock: 8,
    soldCount: 57,
    isFlashDeal: false,
    badge: 'Remise Premium',
    colors: [
      { name: 'Titane Carbone DLC', hex: '#27272A' },
      { name: 'Titane Brossé', hex: '#9CA3AF' }
    ]
  },
  {
    id: 'prod-6',
    name: 'Nike Air Max Pulse Black Edition',
    slug: 'nike-air-max-pulse-black-edition',
    category: 'fashion',
    categoryLabel: 'Mode & Streetwear',
    price: 94,
    oldPrice: 159,
    discountPercentage: 41,
    rating: 4.7,
    reviewsCount: 420,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Inspirée de la scène musicale underground londonienne. Amorti Air revisité avec clip de répartition ponctuelle pour une sensation de rebond dynamique toute la journée.',
    features: [
      'Système d’amorti Air encapsulé avec clip de propulsion',
      'Empeigne en mesh respirant avec renforts en cuir synthétique',
      'Semelle extérieure gaufrée en caoutchouc haute résistance',
      'Détails réfléchissants pour une visibilité nocturne'
    ],
    stock: 19,
    soldCount: 138,
    isFlashDeal: true,
    flashEndsInMinutes: 89,
    badge: 'Offre Streetwear -41%',
    colors: [
      { name: 'Total Black', hex: '#09090B' },
      { name: 'Rouge Crimson', hex: '#DC2626' },
      { name: 'Gris Cendre', hex: '#6B7280' }
    ]
  },
  {
    id: 'prod-7',
    name: 'Robot Aspirateur Roborock S8 Pro Ultra',
    slug: 'roborock-s8-pro-ultra-robot-vacuum',
    category: 'home',
    categoryLabel: 'Maison Connectée',
    price: 899,
    oldPrice: 1499,
    discountPercentage: 40,
    rating: 4.9,
    reviewsCount: 310,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'La station tout-en-un révolutionnaire : vidage automatique de la poussière, lavage et séchage de la serpillière à air chaud. Aspiration record de 6000 Pa.',
    features: [
      'Station RockDock Ultra : autonettoyante, séchage à air chaud et remplissage',
      'Double brosse DuoRoller Riser et système de lavage sonique VibraRise 2.0',
      'Puissance d’aspiration HyperForce de 6000 Pa',
      'Navigation LiDAR PreciSense avec évitement d’obstacles 3D réactif'
    ],
    stock: 7,
    soldCount: 68,
    isFlashDeal: false,
    badge: 'Économie 600 €',
    colors: [
      { name: 'Noir Onyx', hex: '#18181B' },
      { name: 'Blanc Pur', hex: '#FAFAFA' }
    ]
  },
  {
    id: 'prod-8',
    name: 'DJI Mini 4 Pro Fly More Combo',
    slug: 'dji-mini-4-pro-fly-more-combo',
    category: 'tech',
    categoryLabel: 'High-Tech & Audio',
    price: 789,
    oldPrice: 1129,
    discountPercentage: 30,
    rating: 4.9,
    reviewsCount: 205,
    image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Drone ultra-léger de moins de 249 g avec détection d’obstacles omnidirectionnelle, vidéo 4K HDR à 60 ips et transmission vidéo FHD O4 jusqu’à 20 km.',
    features: [
      'Poids inférieur à 249 g (aucune formation obligatoire requise)',
      'Capteur CMOS 1/1,3 pouce avec vidéo verticale native 4K/60fps HDR',
      'Détection d’obstacles omnidirectionnelle active',
      'Pack Fly More avec 3 batteries intelligentes et station de recharge bidirectionnelle'
    ],
    stock: 6,
    soldCount: 79,
    isFlashDeal: true,
    flashEndsInMinutes: 55,
    badge: 'Offre Pack Créateur',
    colors: [
      { name: 'Gris Arctique', hex: '#E5E7EB' }
    ]
  },
  {
    id: 'prod-9',
    name: 'Écran Gaming LG UltraGear OLED 27 240Hz',
    slug: 'lg-ultragear-oled-27-240hz',
    category: 'gaming',
    categoryLabel: 'Gaming & Setup',
    price: 649,
    oldPrice: 999,
    discountPercentage: 35,
    rating: 4.8,
    reviewsCount: 189,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Moniteur de jeu OLED QHD 2560x1440 avec taux de rafraîchissement fulgurant de 240 Hz et temps de réponse ultra-court de 0,03 ms (GtG). Compatibilité G-Sync et FreeSync Premium.',
    features: [
      'Dalle OLED QHD 27 pouces avec contraste infini 1 500 000:1',
      'Fréquence ultra-fluide 240 Hz avec temps de réponse record 0,03 ms',
      'Couverture de l’espace colorimétrique DCI-P3 à 98,5%',
      'Revêtement antireflet et anti-éblouissement spécifique gaming'
    ],
    stock: 11,
    soldCount: 88,
    isFlashDeal: false,
    badge: 'Indispensable Setup',
    colors: [
      { name: 'Noir Mat Hexagonal', hex: '#18181B' }
    ]
  },
  {
    id: 'prod-10',
    name: 'Veste Technique Arc\'teryx Beta AR Gore-Tex Pro',
    slug: 'arcteryx-beta-ar-jacket',
    category: 'fashion',
    categoryLabel: 'Mode & Streetwear',
    price: 389,
    oldPrice: 650,
    discountPercentage: 40,
    rating: 4.9,
    reviewsCount: 112,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Veste imperméable et respirante de référence conçue pour résister aux intempéries les plus extrêmes. Membrane Gore-Tex Pro Most Rugged avec capuche compatible casque.',
    features: [
      'Membrane triple couche Gore-Tex Pro certifiée étanche',
      'Capuche DropHood avec col indépendant montant isolant',
      'Réflecteur RECCO dissimulé pour la sécurité en montagne',
      'Coupe articulée pour une amplitude de mouvement totale'
    ],
    stock: 10,
    soldCount: 44,
    isFlashDeal: false,
    badge: 'Techwear Ultime',
    colors: [
      { name: 'Noir Stealth', hex: '#0B0F19' },
      { name: 'Bleu Tempête', hex: '#1E293B' },
      { name: 'Kaki Olive', hex: '#365314' }
    ]
  },
  {
    id: 'prod-11',
    name: 'Cafetière Barista Breville Barista Touch Impress',
    slug: 'breville-barista-touch-impress',
    category: 'home',
    categoryLabel: 'Maison Connectée',
    price: 799,
    oldPrice: 1299,
    discountPercentage: 38,
    rating: 4.8,
    reviewsCount: 147,
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=800&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Machine expresso avec assistance barista intelligente en temps réel. Écran tactile intuitif, tassage assisté avec finition à 7 degrés et micro-mousse de lait automatique.',
    features: [
      'Système Impress Puck pour un dosage précis et tassage assisté constant',
      'Technologie Auto MilQ pour mousser laits animaux et boissons végétales',
      'Système de chauffe ThermoJet prêt en seulement 3 secondes',
      'Écran tactile couleur avec recettes personnalisables en un geste'
    ],
    stock: 4,
    soldCount: 39,
    isFlashDeal: true,
    flashEndsInMinutes: 40,
    badge: 'Dernières Pièces',
    colors: [
      { name: 'Acier Inoxydable Brossé', hex: '#CBD5E1' },
      { name: 'Noir Truffe', hex: '#1C1917' }
    ]
  },
  {
    id: 'prod-12',
    name: 'Sac à Dos Technique Peak Design Everyday Backpack 30L',
    slug: 'peak-design-everyday-backpack-30l',
    category: 'lifestyle',
    categoryLabel: 'Montres & Lifestyle',
    price: 199,
    oldPrice: 329,
    discountPercentage: 39,
    rating: 4.9,
    reviewsCount: 263,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Le sac iconique primé pour les créateurs, voyageurs et navetteurs. Séparateurs FlexFold modulables, accès latéral instantané et toile 100% recyclée 400D imperméable.',
    features: [
      'Fermeture brevetée MagLatch à accès rapide d’une seule main',
      'Compartiment rembourré dédié pour ordinateur jusqu’à 16 pouces',
      'Toile en nylon 400D doublement imprégnée déperlante DWR',
      'Passant valise renforcé et sangles de portage externes dissimulées'
    ],
    stock: 15,
    soldCount: 92,
    isFlashDeal: false,
    badge: 'Garantie à Vie',
    colors: [
      { name: 'Gris Anthracite', hex: '#374151' },
      { name: 'Bleu Nuit', hex: '#1E3A8A' }
    ]
  }
];

export const SPOTLIGHT_PRODUCT = PRODUCTS[0]; // Sony WH-1000XM5
