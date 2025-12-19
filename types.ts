
export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
}

export interface EditorialEntry {
  title: string;
  subtitle: string;
  content: string;
  imageUrl: string;
  align: 'left' | 'right';
}
