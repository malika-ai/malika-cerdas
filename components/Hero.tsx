import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ASSETS } from '../constants';
import { GlassCard } from './ui/GlassCard';

export const Hero: React.FC = () => {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
    
    // Track intent to book as AddToCart
    if ((window as any).fbq) {
      (window as any).fbq('track', 'AddToCart');
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* --- Gradient Blurred Blobs --- */}
      <div className="absolute top-20 right-[-10%] w-[30rem] h-[30rem] bg-red-500/20 rounded-full blur-[100px] -z-10 animate-pulse mix-blend-multiply pointer-events-none" />
      <div className="absolute bottom-20 left-[-10%] w-[25rem] h-[25rem] bg-gray-400/20 rounded-full blur-[80px] -z-10 mix-blend-multiply pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Copy */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100/80 border border-red-200 shadow-sm mb-6 backdrop-blur-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-xs font-bold tracking-wide uppercase text-red-600">
              Problem Utama Bisnis
            </span>
          </div>
          
          {/* Title size massive for mobile */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.1] sm:leading-tight">
            FRUSTASI SAMA CS AI YANG <span className="text-red-600 underline decoration-red-300 decoration-4 underline-offset-4">TOL*L?</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Prompting CS AI emang nggak gampang, banyak yang abisin waktu berhari-hari, tapi hasil nggak sesuai ekspektasi!
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={scrollToBooking}
              className="px-8 py-4 bg-[#1D1D1F] text-white rounded-full font-semibold hover:scale-105 transition-transform duration-200 shadow-xl shadow-black/10 flex items-center justify-center gap-2"
            >
              Solusi Malika <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Right: Video */}
        <motion.div
           initial={{ opacity: 0, x: 30 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="relative"
        >
          <GlassCard className="p-2 bg-white/40 border-white/60">
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-video relative bg-black">
              <video 
                src={ASSETS.videos.frustration} 
                autoPlay loop muted playsInline 
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div>
                  <p className="text-white font-medium text-lg">Ekspektasi: Otomatis</p>
                  <p className="text-red-300 font-bold text-xl">Realita: Bikin Emosi</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};