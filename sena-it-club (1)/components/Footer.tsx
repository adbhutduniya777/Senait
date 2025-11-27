import React from 'react';
import { Logo } from './ui/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#020202]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
           <Logo className="w-8 h-8" />
           <span className="font-bold text-lg tracking-tight text-white/90">SENA IT CLUB</span>
        </div>
        
        <div className="text-white/40 text-sm">
          &copy; {new Date().getFullYear()} SENA IT CLUB. All rights reserved.
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-white/40 hover:text-cyan-400 transition-colors">Instagram</a>
          <a href="#" className="text-white/40 hover:text-cyan-400 transition-colors">Twitter</a>
          <a href="#" className="text-white/40 hover:text-cyan-400 transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;