import React from 'react';
import { Section } from './ui/Section';
import { GlassCard } from './ui/GlassCard';
import { Calendar, ArrowRight } from 'lucide-react';
import { trackAddToCart } from '../utils/analytics';

export const Booking: React.FC = () => {
  const phoneNumber = '6282211114681';
  const message = 'Halo kak, aku mau tanya-tanya dulu soal CS AI Malika sebelum meeting, boleh?';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Using the exact link provided by user
  const calendarLink = "https://calendar.google.com/calendar/appointments/AcZssZ31oJJ-O24bwoCzJx1DkIBMD9kb4hHjWZ72mH0=";

  return (
    <Section id="booking" className="mb-20 bg-transparent relative">
      <GlassCard className="max-w-5xl mx-auto overflow-hidden bg-white/80 shadow-2xl shadow-blue-900/10 backdrop-blur-md relative z-10">
        <div className="grid md:grid-cols-5 min-h-[600px]">
          {/* Left Side: Copy */}
          <div className="md:col-span-2 p-8 md:p-12 bg-gray-900 text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                <Calendar className="text-white" size={24} />
              </div>
              <h2 className="text-3xl font-bold mb-4">Jadwalkan Demo Gratis</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Lihat langsung bagaimana Malika AI dapat menghemat biaya operasional Anda hingga 70% dan meningkatkan konversi.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-300 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                  Analisa kebutuhan bisnis Anda
                </li>
                <li className="flex items-center gap-3 text-gray-300 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                  Simulasi ROI & Efisiensi
                </li>
                <li className="flex items-center gap-3 text-gray-300 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                  Strategi Implementasi
                </li>
              </ul>
              <div className="mt-auto pt-6 border-t border-gray-800">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Founder Malika AI</p>
                <p className="font-medium">Tim Expert Kami Siap Membantu</p>
              </div>
            </div>
          </div>

          {/* Right Side: Calendar Iframe */}
          <div className="md:col-span-3 bg-white p-4 md:p-6 relative flex flex-col">
             <div className="w-full flex-grow rounded-xl bg-gray-50 border border-gray-100 flex flex-col items-center justify-center text-center p-2 mb-4">
                <iframe 
                  src={calendarLink}
                  style={{border: 0}} 
                  width="100%" 
                  height="100%" 
                  title="Schedule Appointment"
                  className="rounded-lg min-h-[500px]"
                ></iframe>
             </div>
             
             {/* WhatsApp CTA below Calendar */}
             <div className="text-center py-4 bg-green-50 rounded-xl border border-green-100">
                <p className="text-sm text-green-800 font-medium mb-2">Belum menemukan jadwal yang cocok?</p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackAddToCart}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-green-600 transition-colors shadow-sm"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat via WhatsApp
                </a>
             </div>
          </div>
        </div>
      </GlassCard>
    </Section>
  );
};