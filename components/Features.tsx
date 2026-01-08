import React from 'react';
import { Section } from './ui/Section';
import { GlassCard } from './ui/GlassCard';
import { ASSETS } from '../constants';
import { MessageCircle, Globe2, Calculator, Check } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <div id="features" className="bg-transparent overflow-hidden">
      
      {/* FEATURE 1: NATURAL */}
      <Section className="pb-0 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <GlassCard className="p-2 bg-white/80 border-white shadow-2xl w-full max-w-sm" hoverEffect>
              <div className="rounded-2xl overflow-hidden bg-gray-900 relative">
                <video 
                  src={ASSETS.videos.naturalResponse} 
                  autoPlay loop muted playsInline 
                  className="w-full h-auto object-contain"
                />
              </div>
            </GlassCard>
          </div>

          <div className="order-1 lg:order-2">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-600/20">
              <MessageCircle size={24} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              BALESNYA NATURAL BGT!
            </h2>
            <p className="text-xl text-gray-500 mb-8 leading-relaxed">
              Balesan chatnya ramah dan nggak ngelantur. Bikin customer nggak kabur karena merasa dilayani dengan tulus.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <Check className="text-blue-600" size={20} /> Emosi & Konteks Terjaga
              </li>
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <Check className="text-blue-600" size={20} /> Bukan Template Robot
              </li>
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <Check className="text-blue-600" size={20} /> Respon Cepat & Tepat
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* FEATURE 2: BAHASA SUNDA */}
      <Section className="pb-0 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
          <div className="order-1">
            <div className="w-12 h-12 rounded-2xl bg-green-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-green-600/20">
              <Globe2 size={24} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              BISA BAHASA SUNDA!
            </h2>
            <p className="text-xl text-gray-500 mb-8 leading-relaxed">
              Sebenernya nggak cuma sunda sih, bahasa jawa kita tes juga bisa. Pendekatan lokal bikin closing rate naik drastis.
            </p>
             <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <Check className="text-green-600" size={20} /> Mengerti Logat Daerah
              </li>
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <Check className="text-green-600" size={20} /> Lebih Akrab dengan Customer
              </li>
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <Check className="text-green-600" size={20} /> Support Berbagai Bahasa
              </li>
            </ul>
          </div>
          <div className="order-2 flex justify-center lg:justify-end">
             <GlassCard className="p-2 bg-white/80 border-white shadow-2xl w-full max-w-sm" hoverEffect>
              <div className="rounded-2xl overflow-hidden bg-gray-900 relative">
                <video 
                  src={ASSETS.videos.sundaLanguage} 
                  autoPlay loop muted playsInline 
                  className="w-full h-auto object-contain"
                />
              </div>
            </GlassCard>
          </div>
        </div>
      </Section>

      {/* FEATURE 3: ONGKIR */}
      <Section className="relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
             <GlassCard className="p-2 bg-white/80 border-white shadow-2xl w-full max-w-sm" hoverEffect>
              <div className="rounded-2xl overflow-hidden bg-gray-900 relative">
                <video 
                  src={ASSETS.videos.shippingCalc} 
                  autoPlay loop muted playsInline 
                  className="w-full h-auto object-contain"
                />
              </div>
            </GlassCard>
          </div>

          <div className="order-1 lg:order-2">
            <div className="w-12 h-12 rounded-2xl bg-orange-500 flex items-center justify-center text-white mb-6 shadow-lg shadow-orange-500/20">
              <Calculator size={24} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              NGITUNG ONGKIR, AKURAT!
            </h2>
            <p className="text-xl text-gray-500 mb-8 leading-relaxed">
              Nggak ada lagi harus konfirmasi ulang, gara-gara AI kasih ongkirnya ngarang. Terintegrasi langsung dengan API logistik.
            </p>
             <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <Check className="text-orange-500" size={20} /> Cek Ongkir Real-time
              </li>
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <Check className="text-orange-500" size={20} /> Hitungan Presisi
              </li>
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <Check className="text-orange-500" size={20} /> Terintegrasi Ekspedisi
              </li>
            </ul>
          </div>
        </div>
      </Section>

    </div>
  );
};