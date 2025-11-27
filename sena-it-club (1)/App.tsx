import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0F1F] text-white selection:bg-[#0FF2F2]/30 selection:text-cyan-100 relative overflow-hidden">
      {/* Ambient Background Glows - Adjusted to Brand Palette */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[60%] bg-[#1E88FF]/15 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-screen" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[60%] bg-[#0FF2F2]/10 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-screen" />
      <div className="fixed top-[40%] left-[30%] w-[40%] h-[40%] bg-purple-500/5 rounded-full blur-[180px] pointer-events-none z-0" />

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Programs />
        <Team />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;