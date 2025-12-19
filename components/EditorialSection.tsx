
import React from 'react';
import { EditorialEntry } from '../types';

interface EditorialSectionProps {
  entry: EditorialEntry;
}

const EditorialSection: React.FC<EditorialSectionProps> = ({ entry }) => {
  const isLeft = entry.align === 'left';

  return (
    <div className={`grid grid-cols-12 gap-8 lg:gap-24 items-center`}>
      <div className={`col-span-12 lg:col-span-5 ${isLeft ? 'order-1' : 'order-1 lg:order-2'}`}>
        <div className="relative group overflow-hidden rounded-2xl aspect-[3/4]">
          <img 
            src={entry.imageUrl} 
            alt={entry.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-espresso/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
      </div>

      <div className={`col-span-12 lg:col-span-7 ${isLeft ? 'order-2' : 'order-2 lg:order-1'}`}>
        <span className="text-copper uppercase tracking-[0.3em] text-xs font-bold mb-6 block">
          {entry.subtitle}
        </span>
        <h3 className="font-serif text-5xl md:text-7xl mb-8 tracking-tighter leading-tight">
          {entry.title}
        </h3>
        <p className="text-xl text-ink/80 leading-relaxed font-light mb-10 max-w-xl">
          {entry.content}
        </p>
        <button className="group flex items-center gap-4 text-xs uppercase tracking-widest font-bold">
          <span>Read the Story</span>
          <span className="h-px w-8 bg-copper group-hover:w-16 transition-all duration-500"></span>
        </button>
      </div>
    </div>
  );
};

export default EditorialSection;
