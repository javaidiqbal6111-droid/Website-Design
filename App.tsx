
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EditorialSection from './components/EditorialSection';
import ProductGallery from './components/ProductGallery';
import BrandConcierge from './components/BrandConcierge';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isConciergeOpen, setIsConciergeOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans selection:bg-copper selection:text-parchment">
      <Navbar onOpenConcierge={() => setIsConciergeOpen(true)} />
      
      <main>
        <Hero />
        
        <section id="philosophy" className="py-32 px-6 md:px-12 lg:px-24">
          <EditorialSection 
            entry={{
              title: "The Art of Living Slowly",
              subtitle: "Our Philosophy",
              content: "In a world that demands speed, we celebrate the quiet moments. L'ESSENCE is a curated journey through sensory experiences that ground you. Each product is a chapter in a story of intentionality, crafted by artisans who understand that true luxury takes time.",
              imageUrl: "https://picsum.photos/1200/1600?grayscale&random=1",
              align: 'right'
            }}
          />
        </section>

        <section id="curation" className="bg-almond py-32">
          <div className="px-6 md:px-12 lg:px-24 mb-20">
            <h2 className="font-serif text-5xl md:text-7xl mb-8 tracking-tighter">Current Curation</h2>
            <p className="max-w-xl text-lg text-ink/80 leading-relaxed font-light">
              Objects of desire, selected for their timeless appeal and superior craftsmanship. 
              Discover our seasonal edit of skincare, home, and essentials.
            </p>
          </div>
          <ProductGallery />
        </section>

        <section id="narrative" className="py-32 px-6 md:px-12 lg:px-24">
          <EditorialSection 
            entry={{
              title: "Tethered to Nature",
              subtitle: "The Harvest",
              content: "Our ingredients are sourced from botanical gardens that practice regenerative agriculture. From the volcanic soils of Sicily to the misty mountains of Kyoto, we seek the purest elements to bring balance to your modern life.",
              imageUrl: "https://picsum.photos/1200/1600?random=2",
              align: 'left'
            }}
          />
        </section>
      </main>

      <Footer />
      
      <BrandConcierge 
        isOpen={isConciergeOpen} 
        onClose={() => setIsConciergeOpen(false)} 
      />
    </div>
  );
};

export default App;
