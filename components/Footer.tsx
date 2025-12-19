
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-espresso text-parchment pt-32 pb-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-4">
            <h2 className="font-serif text-5xl tracking-tighter mb-8">L'ESSENCE</h2>
            <p className="text-stone/60 leading-relaxed font-light mb-12">
              Curated objects of beauty and rituals of self-care. 
              Based in Paris, delivering to the global soul.
            </p>
            <div className="flex gap-6">
              {['Instagram', 'Pinterest', 'Editorial'].map((social) => (
                <a key={social} href="#" className="text-xs uppercase tracking-widest hover:text-copper transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h5 className="text-[10px] uppercase tracking-widest text-copper font-bold mb-8">Boutique</h5>
            <ul className="space-y-4 text-sm font-light text-stone/80">
              <li><a href="#" className="hover:text-parchment transition-colors">Shop All</a></li>
              <li><a href="#" className="hover:text-parchment transition-colors">Skincare</a></li>
              <li><a href="#" className="hover:text-parchment transition-colors">Scent</a></li>
              <li><a href="#" className="hover:text-parchment transition-colors">Home</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h5 className="text-[10px] uppercase tracking-widest text-copper font-bold mb-8">Support</h5>
            <ul className="space-y-4 text-sm font-light text-stone/80">
              <li><a href="#" className="hover:text-parchment transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-parchment transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-parchment transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-parchment transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h5 className="text-[10px] uppercase tracking-widest text-copper font-bold mb-8">The Dispatch</h5>
            <p className="text-sm font-light text-stone/60 mb-6 italic font-serif">
              Join our list for exclusive access to small-batch drops.
            </p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Email address"
                className="w-full bg-transparent border-b border-stone/20 py-4 focus:outline-none focus:border-copper transition-colors text-parchment"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-widest font-bold">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-stone/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-stone/40">
            &copy; 2024 L'ESSENCE. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-stone/40">
            <a href="#" className="hover:text-parchment transition-colors">Privacy</a>
            <a href="#" className="hover:text-parchment transition-colors">Terms</a>
            <a href="#" className="hover:text-parchment transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
