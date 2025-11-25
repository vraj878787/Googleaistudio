import { MenuItem, Review, GalleryImage } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // Breakfast
  {
    id: 'b1',
    name: 'Full English Breakfast',
    description: 'Free-range eggs, sausages, bacon, beans, and toast.',
    price: '$14.00',
    category: 'Breakfast',
    image: 'https://picsum.photos/400/300?random=10'
  },
  {
    id: 'b2',
    name: 'Avocado Toast',
    description: 'Smashed avocado on sourdough with poached eggs.',
    price: '$12.50',
    category: 'Breakfast',
    image: 'https://picsum.photos/400/300?random=11'
  },
  
  // Starters
  {
    id: 's1',
    name: 'Buffalo Wings',
    description: 'Crispy wings tossed in our signature spicy buffalo sauce.',
    price: '$10.00',
    category: 'Starters',
    image: 'https://picsum.photos/400/300?random=12'
  },
  
  // Mains - Chicken
  {
    id: 'm1',
    name: 'Chicken Supreme',
    description: 'Tender chicken breast in a creamy mushroom sauce.',
    price: '$22.00',
    category: 'Mains',
    image: 'https://picsum.photos/400/300?random=13'
  },
  {
    id: 'm2',
    name: 'Chicken Kiev',
    description: 'Breaded chicken breast stuffed with garlic herb butter.',
    price: '$24.00',
    category: 'Mains',
    image: 'https://picsum.photos/400/300?random=14'
  },
  {
    id: 'm3',
    name: 'Chicken Melt',
    description: 'Grilled chicken topped with melted cheese and bacon.',
    price: '$19.00',
    category: 'Mains',
    image: 'https://picsum.photos/400/300?random=15'
  },
  {
    id: 'm4',
    name: 'Bang Bang Spicy Chicken',
    description: 'Crispy chicken tossed in a spicy, creamy mayo sauce.',
    price: '$21.00',
    category: 'Mains',
    image: 'https://picsum.photos/400/300?random=16'
  },
  
  // Mains - Lamb
  {
    id: 'l1',
    name: 'Lamb Shanks',
    description: 'Slow-cooked lamb shanks in a rich red wine gravy.',
    price: '$28.00',
    category: 'Mains',
    image: 'https://picsum.photos/400/300?random=17'
  },

  // Drinks
  {
    id: 'd1',
    name: 'Matcha Latte',
    description: 'Premium matcha green tea with steamed milk.',
    price: '$6.50',
    category: 'Drinks',
    image: 'https://picsum.photos/400/300?random=18'
  },
  {
    id: 'd2',
    name: 'Chocolate Frappe',
    description: 'Iced blended coffee with rich chocolate and whipped cream.',
    price: '$7.00',
    category: 'Drinks',
    image: 'https://picsum.photos/400/300?random=19'
  },
  {
    id: 'd3',
    name: 'Berry Mocktail',
    description: 'Refreshing mix of mixed berries, mint, and sparkling water.',
    price: '$8.00',
    category: 'Drinks',
    image: 'https://picsum.photos/400/300?random=20'
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    text: 'Pleasant décor, great vibe, and delicious breakfast. Staff and management were very attentive and made the experience wonderful.',
    rating: 5
  },
  {
    id: '2',
    name: 'Michael Chen',
    text: 'Amazing ambience, extremely helpful staff, and fabulously cooked dishes like Chicken Supreme. Drinks such as frappe and matcha latte were perfect.',
    rating: 5
  },
  {
    id: '3',
    name: 'Emily Thompson',
    text: 'Returning to Cafe J’adore is always special. Beautiful décor, friendly staff, and standout dishes like Lamb Shanks. Excellent value and highly recommended.',
    rating: 5
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: '1', src: 'https://picsum.photos/800/600?random=30', alt: 'Cozy Interior Seating', category: 'Interior' },
  { id: '2', src: 'https://picsum.photos/600/800?random=31', alt: 'Delicious Plating', category: 'Food' },
  { id: '3', src: 'https://picsum.photos/800/800?random=32', alt: 'Evening Ambience', category: 'Interior' },
  { id: '4', src: 'https://picsum.photos/800/600?random=33', alt: 'Signature Cocktails', category: 'Drinks' },
  { id: '5', src: 'https://picsum.photos/600/800?random=34', alt: 'Table Setup', category: 'Interior' },
  { id: '6', src: 'https://picsum.photos/800/600?random=35', alt: 'Chef Special', category: 'Food' },
];