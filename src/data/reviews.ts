import { Review } from '../types';

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Alexandre Morin',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    rating: 5,
    date: 'Il y a 2 jours',
    verified: true,
    title: 'Offre imbattable et livraison express reçue le lendemain',
    comment: 'J’hésitais sur le Sony WH-1000XM5 à cause du prix régulier, mais avec cette réduction de 33% pour le Black Friday c’était l’achat évident. Reçu en moins de 24h avec emballage impeccable.',
    productName: 'Sony WH-1000XM5 ANC Wireless'
  },
  {
    id: 'rev-2',
    author: 'Clara Delorme',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&q=80',
    rating: 5,
    date: 'Il y a 4 jours',
    verified: true,
    title: 'La PS5 Slim au tarif le plus bas constaté',
    comment: 'Commande passée en 2 minutes via le checkout. Numéro de suivi reçu dans l’heure et console 100% conforme. Très rassurant pour des achats à ce montant.',
    productName: 'Sony PlayStation 5 Slim Edition'
  },
  {
    id: 'rev-3',
    author: 'Thomas Gauthier',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    rating: 5,
    date: 'Il y a 5 jours',
    verified: true,
    title: 'Code promo additionnel fonctionnel et service client réactif',
    comment: 'Le code BLACK10 a fonctionné directement dans le panier. Une économie réelle et une interface de commande particulièrement rapide sans rechargement lourd.',
    productName: 'Garmin Fenix 7 Pro Sapphire Solar'
  }
];
