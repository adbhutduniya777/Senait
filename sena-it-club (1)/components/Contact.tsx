import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './ui/GlassCard';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-5xl mx-auto px-6">
        <GlassCard className="p-8 md:p-16 backdrop-blur-3xl bg-black/40 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-white/60 mb-10 text-lg">
                Have questions about the club? Want to partner with us? Fill out the form or visit us.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-white/80">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span>senaitclub@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 text-white/80">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span>01406364820</span>
                </div>
                <div className="flex items-center gap-4 text-white/80">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span>Savar Cantonment</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white/50 mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all placeholder-white/20"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/50 mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all placeholder-white/20"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/50 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all placeholder-white/20 resize-none"
                  placeholder="Hello, I'd like to join..."
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl font-bold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-shadow"
              >
                Send Message
              </motion.button>
            </form>

          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default Contact;