import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { Features } from './components/Features';
import { Clients } from './components/Clients';
import { Booking } from './components/Booking';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen text-gray-900 selection:bg-gray-900 selection:text-white relative overflow-hidden">
      {/* Dynamic Background - Enhanced Visibility */}
      <div className="fixed inset-0 -z-10 bg-[#F5F5F7]">
        {/* Blob 1: Blue - Top Left */}
        <div 
          className="absolute -top-[10%] -left-[10%] w-[70vw] h-[70vw] md:w-[40rem] md:h-[40rem] bg-blue-500/30 rounded-full mix-blend-multiply filter blur-[60px] md:blur-[100px] animate-blob"
        />
        
        {/* Blob 2: Purple - Top Right */}
        <div 
          className="absolute top-[5%] -right-[10%] w-[60vw] h-[60vw] md:w-[35rem] md:h-[35rem] bg-purple-500/30 rounded-full mix-blend-multiply filter blur-[60px] md:blur-[100px] animate-blob"
          style={{ animationDelay: '2s' }}
        />
        
        {/* Blob 3: Pink - Center/Bottom Mobile, Left Desktop */}
        <div 
          className="absolute top-[40%] left-[-20%] md:left-[20%] w-[80vw] h-[80vw] md:w-[45rem] md:h-[45rem] bg-pink-500/30 rounded-full mix-blend-multiply filter blur-[60px] md:blur-[100px] animate-blob"
          style={{ animationDelay: '4s' }}
        />
        
        {/* Blob 4: Indigo - Bottom Right */}
        <div 
          className="absolute bottom-[-10%] -right-[10%] w-[60vw] h-[60vw] md:w-[40rem] md:h-[40rem] bg-indigo-500/30 rounded-full mix-blend-multiply filter blur-[60px] md:blur-[100px] animate-blob"
          style={{ animationDelay: '6s' }}
        />
      </div>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <ProblemSolution />
        <Features />
        <Clients />
        <Booking />
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;