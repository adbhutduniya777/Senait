import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Trophy, Rocket, Sparkles, Activity, Globe, Wifi, Zap } from 'lucide-react';
import GlassCard from './ui/GlassCard';

const About: React.FC = () => {
  // Simulate live data changes
  const [coords, setCoords] = useState({ lat: '23.7937', lng: '90.4066' });
  const [encryptionKey, setEncryptionKey] = useState('AES-256');

  useEffect(() => {
    const interval = setInterval(() => {
      // Micro-fluctuations in coordinates for "live satellite" feel
      setCoords({
        lat: (23.7937 + (Math.random() - 0.5) * 0.0001).toFixed(4),
        lng: (90.4066 + (Math.random() - 0.5) * 0.0001).toFixed(4),
      });
      // Random hex flash
      if(Math.random() > 0.9) setEncryptionKey(`AES-${Math.floor(Math.random() * 999)}`);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="relative w-full min-h-screen overflow-hidden bg-[#0A0F1F] flex items-center justify-center">
      
      {/* --- Full View Video Background --- */}
      <div className="absolute inset-0 z-0">
        <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105"
            src="https://videos.pexels.com/video-files/2040063/2040063-uhd_2560_1440_25fps.mp4" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1F] via-[#0A0F1F]/60 to-transparent" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
        
        {/* Animated Scanning Line */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0FF2F2]/5 to-transparent h-[20%] w-full animate-scan pointer-events-none" style={{ animation: 'scan 8s linear infinite' }} />
      </div>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(500%); }
        }
      `}</style>

      {/* --- HUD / Technical Overlays --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="absolute top-24 left-8 z-10 hidden lg:flex flex-col gap-2 font-mono text-[10px] text-[#0FF2F2]/70 tracking-[0.2em] pointer-events-none select-none"
      >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]" />
            SYSTEM_STATUS: <span className="text-emerald-400">OPTIMAL</span>
          </div>
          <div className="flex items-center gap-2">
             <span className="w-1 h-3 bg-[#1E88FF]/50" />
             ENC: {encryptionKey}
          </div>
          <div>SECTOR: [EDUCATIONAL_TECH]</div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="absolute bottom-8 right-8 z-10 hidden lg:flex flex-col items-end gap-2 font-mono text-[10px] text-[#0FF2F2]/70 tracking-[0.2em] pointer-events-none select-none"
      >
          <div className="tabular-nums">
            TARGET: {coords.lat}° N | {coords.lng}° E
          </div>
          <div className="flex items-center gap-2">
            UPLINK_STABLE
            <Wifi className="w-3 h-3 animate-pulse text-[#1E88FF]" />
          </div>
          <div className="w-32 h-1 bg-white/10 mt-1 overflow-hidden">
            <div className="w-full h-full bg-[#1E88FF] animate-progress origin-left" />
          </div>
      </motion.div>

      {/* --- Main Content Sidebar --- */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full pt-20 pb-20">
          
          <div className="lg:col-span-5">
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E88FF]/10 border border-[#1E88FF]/30 backdrop-blur-md text-[#0FF2F2] text-xs font-bold uppercase tracking-widest mb-8 shadow-[0_0_20px_rgba(30,136,255,0.2)]">
                    <Activity className="w-3 h-3 animate-pulse" />
                    Center for Innovation
                </div>

                <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-[0.9] text-white tracking-tighter drop-shadow-2xl">
                    Where <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0FF2F2] via-white to-[#1E88FF] drop-shadow-lg">Future</span> <br />
                    Is Built.
                </h2>

                <GlassCard className="p-8 border-l-4 border-l-[#0FF2F2] border-y-0 border-r-0 rounded-r-3xl rounded-l-none bg-gradient-to-r from-[#0A0F1F]/90 to-[#0A0F1F]/30 backdrop-blur-xl shadow-2xl">
                    <p className="text-lg text-white/90 mb-6 leading-relaxed font-light">
                        SENA IT CLUB is more than a student organization; it is a high-performance ecosystem. We bridge the gap between academic theory and industrial reality through immersive technology projects.
                    </p>
                    
                    <div className="flex flex-col gap-4">
                        <motion.div 
                          whileHover={{ x: 10 }}
                          className="flex items-center gap-3 text-white/80 cursor-default"
                        >
                            <div className="p-2 rounded-lg bg-[#1E88FF]/20">
                              <Rocket className="w-5 h-5 text-[#1E88FF]" />
                            </div>
                            <span className="text-sm font-medium tracking-wide">Advanced Robotics & AI Labs</span>
                        </motion.div>
                        <motion.div 
                          whileHover={{ x: 10 }}
                          className="flex items-center gap-3 text-white/80 cursor-default"
                        >
                             <div className="p-2 rounded-lg bg-[#0FF2F2]/20">
                                <Globe className="w-5 h-5 text-[#0FF2F2]" />
                             </div>
                            <span className="text-sm font-medium tracking-wide">Global Tech Competitions</span>
                        </motion.div>
                    </div>
                </GlassCard>

                {/* Stats */}
                <div className="flex gap-12 mt-10 ml-2">
                     <div>
                        <h4 className="text-4xl font-bold text-white tracking-tight flex items-start">
                          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">500</span>
                          <span className="text-[#1E88FF] text-2xl mt-1">+</span>
                        </h4>
                        <p className="text-xs text-[#0FF2F2] tracking-[0.2em] uppercase mt-2 font-bold">Active Members</p>
                     </div>
                     <div>
                        <h4 className="text-4xl font-bold text-white tracking-tight flex items-start">
                          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">12</span>
                          <span className="text-[#0FF2F2] text-2xl mt-1">+</span>
                        </h4>
                        <p className="text-xs text-[#0FF2F2] tracking-[0.2em] uppercase mt-2 font-bold">Intl. Awards</p>
                     </div>
                </div>

            </motion.div>
          </div>

          {/* Right side floating glass panel */}
          <div className="lg:col-span-7 h-full flex items-center justify-end px-4">
             <motion.div 
               initial={{ opacity: 0, scale: 0.9, x: 20 }}
               whileInView={{ opacity: 1, scale: 1, x: 0 }}
               transition={{ delay: 0.5, duration: 1 }}
               className="hidden lg:block"
             >
                <div className="relative p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 text-right group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-l from-[#1E88FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-end gap-2 mb-2">
                        <Zap className="w-4 h-4 text-[#0FF2F2] fill-current animate-pulse" />
                        <span className="text-[#0FF2F2] text-[10px] font-bold tracking-[0.2em]">INCOMING TRANSMISSION</span>
                      </div>
                      <div className="text-3xl font-bold text-white mb-1">AI Hackathon 2025</div>
                      <div className="text-white/60 text-sm font-light">Registration closing in <span className="text-white font-mono">04:23:12</span></div>
                    </div>
                </div>
             </motion.div>
          </div>

      </div>
    </section>
  );
};

export default About;