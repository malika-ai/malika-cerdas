import React from 'react';
import { Section } from './ui/Section';
import { GlassCard } from './ui/GlassCard';
import { ASSETS } from '../constants';
import { AlertTriangle, XCircle } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  return (
    <Section id="problem" className="bg-transparent relative">
      
      {/* --- Gradient Blurred Blobs --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-red-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Section (Left) */}
          <div className="order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 border border-red-200 shadow-sm mb-6 backdrop-blur-sm">
              <AlertTriangle size={14} className="text-red-600" />
              <span className="text-xs font-bold uppercase tracking-wide text-red-600">Realita Pahit</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              HARUSNYA JADI SOLUSI, <span className="text-red-600">MALAH NGRECOKI!</span>
            </h2>
            <p className="text-lg text-gray-500 mb-8 leading-relaxed">
              Bukanya bikin customer dibales cepet dan bener, eh malah bikin kerja dua kali. Masih harus bayar langganan lagi.
            </p>
            
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white/60 border border-red-100 flex items-start gap-4 shadow-sm backdrop-blur-sm transition-transform hover:scale-[1.02]">
                <div className="mt-1 bg-red-200 rounded-full p-1">
                  <XCircle size={16} className="text-red-700" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Kerja Dua Kali</h4>
                  <p className="text-sm text-gray-600">Harus klarifikasi ulang kesalahan AI ke customer.</p>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-white/60 border border-red-100 flex items-start gap-4 shadow-sm backdrop-blur-sm transition-transform hover:scale-[1.02]">
                <div className="mt-1 bg-red-200 rounded-full p-1">
                  <XCircle size={16} className="text-red-700" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Buang Biaya</h4>
                  <p className="text-sm text-gray-600">Bayar tools mahal tapi hasil tidak sesuai ekspektasi.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section (Right) */}
          <div className="order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
               <div className="absolute inset-0 bg-red-100/50 blur-3xl -z-10 rounded-full opacity-60"></div>
               <GlassCard className="p-2 border-red-100 shadow-xl shadow-red-900/5" hoverEffect>
                  {/* Image container with specific aspect ratio to crop the bottom */}
                  <div className="bg-gray-100 rounded-2xl overflow-hidden relative shadow-inner w-full aspect-[9/14]">
                    <img 
                      src={ASSETS.images.badAiScreenshot} 
                      alt="Percakapan AI Salah" 
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-6 left-6 right-6 bg-red-600/90 backdrop-blur-md text-white p-4 rounded-xl shadow-lg">
                      <div className="flex items-center gap-3 mb-1">
                        <XCircle size={20} className="text-white" />
                        <span className="font-bold text-sm uppercase tracking-wide">AI Hallucination</span>
                      </div>
                      <p className="text-xs text-red-50 font-medium">Customer kabur karena info salah.</p>
                    </div>
                  </div>
               </GlassCard>
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
};