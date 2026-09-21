import React, { useEffect } from 'react';
import { LanguageProvider } from './LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { trackVisit } from './services/api';

export default function App() {
  useEffect(() => {
    const hasVisited = sessionStorage.getItem('visited');
    if (!hasVisited) {
      trackVisit()
        .then(() => {
          sessionStorage.setItem('visited', 'true');
        })
        .catch((err) => console.error(err));
    }
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#C5912B] selection:text-white relative scroll-smooth">
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes scaleUp {
            from { opacity: 0; transform: scale(0.92); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-fade-in {
            animation: fadeIn 0.3s ease-out forwards;
          }
          .animate-scale-up {
            animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
        `}</style>

        <Navbar />
        <Home />
        <Footer />
      </div>
    </LanguageProvider>
  );
}