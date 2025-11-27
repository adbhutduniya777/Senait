import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './ui/GlassCard';
import { Terminal, Bot, Cpu, BrainCircuit, Calendar, Palette } from 'lucide-react';

const programs = [
  {
    title: 'Programming',
    icon: <Terminal className="w-7 h-7" />,
    desc: 'Master Python, JS, and C++ through real-world challenges.',
    color: 'from-[#1E88FF] to-blue-600'
  },
  {
    title: 'Robotics',
    icon: <Bot className="w-7 h-7" />,
    desc: 'Build and program autonomous robots for international competitions.',
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'IT Workshops',
    icon: <Cpu className="w-7 h-7" />,
    desc: 'Hands-on hardware repair, networking, and server management.',
    color: 'from-[#0FF2F2] to-emerald-500'
  },
  {
    title: 'AI Learning',
    icon: <BrainCircuit className="w-7 h-7" />,
    desc: 'Dive deep into machine learning models and neural networks.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Tech Events',
    icon: <Calendar className="w-7 h-7" />,
    desc: 'Hackathons, guest speakers, and industry networking nights.',
    color: 'from-amber-400 to-yellow-600'
  },
  {
    title: 'Creative Projects',
    icon: <Palette className="w-7 h-7" />,
    desc: 'UI/UX Design, 3D modeling, and digital art integration.',
    color: 'from-pink-400 to-rose-500'
  },
];

const Programs: React.FC = () => {
  return (
    <section id="programs" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Our Programs</h2>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-[#1E88FF] to-transparent rounded-full" />
          </motion.div>
          <p className="text-white/60 max-w-2xl mx-auto mt-6 text-lg font-light">
            Comprehensive learning paths designed to take you from beginner to expert.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
            >
              <GlassCard className="h-full p-8 group border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500">
                <div className="flex justify-between items-start mb-8">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center text-white shadow-[0_8px_32px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-transform duration-500`}>
                    {program.icon}
                    </div>
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
                        <span className="text-xl leading-none -mt-1">&rarr;</span>
                    </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#0FF2F2] transition-colors">{program.title}</h3>
                <p className="text-white/50 leading-relaxed font-light">
                  {program.desc}
                </p>
                
                {/* Decorative sheen */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;