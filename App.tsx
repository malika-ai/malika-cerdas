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
    <div className="min-h-screen text-gray-900 selection:bg-gray-900 selection:text-white relative overflow-hidden bg-[#F5F5F7]">
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