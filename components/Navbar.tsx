import React, { useState } from 'react';
import { ASSETS, NAVIGATION } from '../constants';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { trackAddToCart } from '../utils/analytics';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);

    // Track intent to book as AddToCart
    trackAddToCart();
  };

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <motion.nav 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-5xl bg-white/40 backdrop-blur-md shadow-lg shadow-black/5 rounded-2xl pl-4 pr-2 py-3 flex items-center justify-between border border-white/30 ring-1 ring-white/40"
        >
          {/* Logo Section */}
          <a href="#" className="flex items-center gap-3 pl-2">
            <img 
              src={ASSETS.logo} 
              alt="Malika AI" 
              className="h-6 w-auto object-contain" 
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            {NAVIGATION.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                className="text-sm font-medium text-gray-800 hover:text-black transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right Action */}
          <div className="flex items-center gap-3">
            {/* CTA Hidden on Mobile, Visible on Desktop */}
            <button 
              onClick={scrollToBooking}
              className="hidden md:block bg-[#2563EB] text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 shadow-md shadow-blue-500/20"
            >
              Konsultasi Gratis
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-gray-700 hover:text-black ml-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed top-24 left-4 right-4 z-40 bg-white/80 backdrop-blur-3xl border border-white/50 shadow-2xl rounded-2xl overflow-hidden md:hidden ring-1 ring-white/60"
          >
            <div className="p-6 flex flex-col gap-6">
              {NAVIGATION.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-800 border-b border-gray-100 pb-2"
                >
                  {item.name}
                </a>
              ))}
              {/* CTA Visible inside Mobile Menu */}
              <button 
                onClick={scrollToBooking}
                className="bg-[#2563EB] text-white w-full py-3 rounded-xl text-center font-bold shadow-lg shadow-blue-500/20"
              >
                Konsultasi Gratis
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};