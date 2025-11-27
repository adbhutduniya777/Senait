import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './ui/GlassCard';

const teamMembers = [
  {
    name: 'Sabbir Hossen Sifat',
    role: 'Club Moderator',
    // REPLACE THIS URL with your actual photo URL
    image: 'https://placehold.co/800x800/0A0F1F/0FF2F2?text=Sifat',
    tags: ['Leadership', 'ICT', 'Mentorship']
  }
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-32 relative overflow-hidden">
       {/* Background gradient blob */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1E88FF]/10 blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20 gap-4">
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="text-4xl md:text-6xl font-bold mb-2 tracking-tight"
            >
              Club Leadership
            </motion.h2>
           <p className="text-white/60 text-lg">Guided by expert mentorship and vision.</p>
        </div>

        {/* Centered Single Card Layout */}
        <div className="flex justify-center items-center">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", bounce: 0.3 }}
              className="w-full max-w-lg"
            >
              <GlassCard className="p-10 flex flex-col items-center text-center h-full hover:bg-white/[0.08] transition-all duration-500 border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] group relative">
                
                {/* Decorative border gradient */}
                <div className="absolute inset-0 rounded-[2rem] border border-[#0FF2F2]/20 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative mb-10 group-hover:scale-105 transition-transform duration-500 cursor-pointer">
                    {/* Glowing effect behind profile */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1E88FF] to-[#0FF2F2] blur-xl opacity-40 group-hover:opacity-80 transition-opacity duration-500 animate-pulse"></div>
                    
                    {/* Profile Image Container */}
                    <div className="w-56 h-56 rounded-full p-[4px] bg-gradient-to-br from-white/40 to-transparent relative z-10 overflow-hidden shadow-2xl">
                      <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-full rounded-full object-cover border-4 border-[#0A0F1F] bg-[#0A0F1F]"
                      />
                    </div>
                    
                    {/* Moderator Badge */}
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#1E88FF] to-[#0055FF] text-white text-xs font-bold px-6 py-2 rounded-full border border-white/20 shadow-[0_10px_20px_rgba(0,0,0,0.3)] z-20 whitespace-nowrap tracking-widest">
                      MODERATOR
                    </div>
                </div>
                
                <h3 className="text-4xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-[#0FF2F2] text-xl font-medium mb-8 tracking-widest uppercase opacity-90">{member.role}</p>
                
                <div className="flex flex-wrap gap-3 justify-center mt-auto">
                  {member.tags.map(tag => (
                    <span key={tag} className="px-5 py-2 text-xs uppercase tracking-widest rounded-full bg-white/5 border border-white/10 text-white/80 hover:bg-[#0FF2F2]/10 hover:text-[#0FF2F2] hover:border-[#0FF2F2]/40 transition-all duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;