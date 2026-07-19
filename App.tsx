
import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BusinessAreas } from './components/BusinessAreas';
import { InsightToAction } from './components/InsightToAction';
import { Information } from './components/Information';
import { Footer } from './components/Footer';
import { ContactOverlay } from './components/Contact';

const App: React.FC = () => {
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-500/30 selection:text-white">
      <Header onContactClick={() => setShowContact(true)} />
      <main className="flex-grow">
        <Hero />
        <BusinessAreas />
        <InsightToAction />
        <Information />
      </main>
      <Footer onContactClick={() => setShowContact(true)} />
      
      {showContact && <ContactOverlay onClose={() => setShowContact(false)} />}
    </div>
  );
};

export default App;
