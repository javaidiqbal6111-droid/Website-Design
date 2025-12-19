
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="container mx-auto px-6 grid grid-cols-12 gap-6 relative z-10">
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
          <h2 className="font-serif text-7xl md:text-[9rem] leading-[0.85] tracking-tighter mb-8 animate-fade-in">
            Refined <br />
            <span className="italic font-normal pl-4 md:pl-16">Rituals</span>
          </h2>
          <p className="max-w-md text-lg md:text-xl text-espresso/70 font-light leading-relaxed mb-12">
            A boutique experience curated for the discerning individual. 
            Blending ancestral wisdom with modern digital aesthetics.
          </p>
          <div className="flex gap-6">
            <button className="bg-espresso text-parchment px-10 py-5 text-sm uppercase tracking-widest hover:bg-copper transition-all duration-500 rounded-full">
              Explore Edit
            </button>
            <button className="border border-espresso/20 text-espresso px-10 py-5 text-sm uppercase tracking-widest hover:bg-almond transition-all duration-500 rounded-full">
              Read Journal
            </button>
          </div>
        </div>
        
        <div className="col-span-12 lg:col-span-5 relative order-1 lg:order-2 h-[50vh] lg:h-auto mb-12 lg:mb-0">
          <div className="absolute inset-0 bg-stone/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
          <img 
            src="https://picsum.photos/1000/1200?random=10" 
            alt="Editorial visual"
            className="w-full h-full object-cover rounded-[120px] lg:rounded-[200px] shadow-2xl"
          />
          <div className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 bg-almond p-8 md:p-12 rounded-full shadow-lg max-w-[200px] hidden md:block">
            <p className="font-serif italic text-2xl leading-none">Vogue Edit '24</p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-px h-16 bg-espresso"></div>
      </div>
    </section>
  );
};

export default Hero;
