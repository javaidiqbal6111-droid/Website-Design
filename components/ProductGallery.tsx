
import React from 'react';
import { Product } from '../types';

const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Santal & Clay',
    category: 'Scent',
    price: '€78.00',
    description: 'A grounding blend of aged sandalwood and minerals.',
    image: 'https://picsum.photos/800/1000?random=3'
  },
  {
    id: '2',
    name: 'Midnight Elixir',
    category: 'Skincare',
    price: '€112.00',
    description: 'Active botanicals for nocturnal skin renewal.',
    image: 'https://picsum.photos/800/1000?random=4'
  },
  {
    id: '3',
    name: 'Silk Caress',
    category: 'Home',
    price: '€245.00',
    description: '100% organic mulberry silk for restorative sleep.',
    image: 'https://picsum.photos/800/1000?random=5'
  },
  {
    id: '4',
    name: 'Verdant Mask',
    category: 'Skincare',
    price: '€65.00',
    description: 'Deep detox with seaweed and alpine clay.',
    image: 'https://picsum.photos/800/1000?random=6'
  }
];

const ProductGallery: React.FC = () => {
  return (
    <div className="px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      {PRODUCTS.map((product, index) => (
        <div 
          key={product.id} 
          className={`group cursor-pointer ${index % 2 === 1 ? 'lg:translate-y-16' : ''}`}
        >
          <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-stone/10">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute top-4 right-4 bg-parchment/90 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
              New
            </div>
            <div className="absolute inset-0 bg-espresso/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <button className="bg-parchment text-espresso px-6 py-3 text-[10px] uppercase tracking-widest font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                Quick Add
              </button>
            </div>
          </div>
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-serif text-2xl tracking-tighter">{product.name}</h4>
            <span className="text-copper font-medium">{product.price}</span>
          </div>
          <p className="text-xs uppercase tracking-widest text-ink/50 mb-4">{product.category}</p>
          <p className="text-sm text-espresso/60 line-clamp-2 font-light">{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductGallery;
