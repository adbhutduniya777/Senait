import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-80 scale-105"
          // Using a high-quality abstract tech/building video placeholder
          src="https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4" 
        />
        {/* Overlays for readability and iOS blur fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1F]/90 via-[#0A0F1F]/50 to-[#0A0F1F]"></div>
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>
        
        {/* Subtle mesh overlay for texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="flex flex-col items-center space-y-8">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#0FF2F2]/30 backdrop-blur-xl shadow-[0_0_20px_rgba(15,242,242,0.15)]"
          >
            <Sparkles className="w-3 h-3 text-[#0FF2F2]" />
            <span className="text-xs font-bold text-[#0FF2F2] uppercase tracking-[0.2em]">Learn. Build. Create.</span>
          </motion.div>

          {/* Title - Staggered reveal */}
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white drop-shadow-2xl bg-clip-text"
            >
              SENA IT CLUB
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60 tracking-tight"
          >
            Innovating the Future Through Technology
          </motion.h2>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-base md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed font-light"
          >
            SENA IT CLUB is a next-generation technology community empowering students to explore Programming, Robotics, AI, Design and Future Tech through hands-on projects, workshops, and innovation-driven learning.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-5 mt-10 w-full md:w-auto"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-[#1E88FF] text-white rounded-full font-semibold text-lg overflow-hidden shadow-[0_0_40px_-10px_rgba(30,136,255,0.5)] hover:shadow-[0_0_60px_-15px_rgba(30,136,255,0.7)] transition-shadow w-full md:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start Your Journey <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0FF2F2] to-[#1E88FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-medium text-lg backdrop-blur-md hover:bg-white/10 transition-colors w-full md:w-auto hover:border-white/30"
            >
              Explore Programs
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[#0FF2F2] to-transparent shadow-[0_0_8px_#0FF2F2]"></div>
      </motion.div>
    </section>
  );
};

export default Hero;