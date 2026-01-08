import React from 'react';
import { Section } from './ui/Section';
import { ASSETS } from '../constants';

export const Clients: React.FC = () => {
  // Split clients into four arrays for four marquee rows
  const total = ASSETS.images.clients.length;
  const quarter = Math.ceil(total / 4);
  
  const row1 = ASSETS.images.clients.slice(0, quarter);
  const row2 = ASSETS.images.clients.slice(quarter, quarter * 2);
  const row3 = ASSETS.images.clients.slice(quarter * 2, quarter * 3);
  const row4 = ASSETS.images.clients.slice(quarter * 3);

  const MarqueeRow = ({ items, reverse = false }: { items: string[], reverse?: boolean }) => (
    <div className="flex w-full overflow-hidden mb-8 mask-linear-fade relative z-10">
       {/* Gradient Masks for fading effect on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#F5F5F7] to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F5F5F7] to-transparent z-10"></div>
      
      {/* 
          IMPORTANT: 
          1. w-max ensures the container takes the full width of children.
          2. We use padding-right (pr-12) on children instead of gap-12 on parent.
             This ensures the width math is exactly 2x for the scroll animation (-50%) 
             without the "missing gap at the end" issue.
      */}
      <div className={`flex w-max ${reverse ? 'animate-scroll-reverse' : 'animate-scroll'} hover:[animation-play-state:paused]`}>
        {/* Render twice for infinite loop */}
        {[...items, ...items].map((imgUrl, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 w-[150px] h-[80px] flex items-center justify-center transition-all duration-300 opacity-60 hover:opacity-100 hover:scale-110 pr-12"
          >
            <img 
              src={imgUrl} 
              alt="Client logo" 
              className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300 rounded-3xl"
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Section id="clients" className="bg-transparent overflow-hidden relative">
      {/* --- Gradient Blurred Blob --- */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gray-300/20 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="text-center mb-16 max-w-3xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">DIPERCAYA RATUSAN BRAND!</h2>
        <p className="text-lg text-gray-500">
          Kamu bukan yang pertama, ratusan brand udah pecayakan CS AI-nya ke AI Engineer Malika.
        </p>
      </div>
      
      <div className="w-full relative z-10">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse={true} />
        <MarqueeRow items={row3} />
        <MarqueeRow items={row4} reverse={true} />
      </div>
    </Section>
  );
};