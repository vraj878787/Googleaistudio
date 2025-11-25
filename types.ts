export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
}

export interface Review {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'Interior' | 'Food' | 'Drinks';
}