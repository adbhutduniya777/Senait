import React from 'react';
import { motion } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1531297425935-57525af3826e?w=800&q=80", // Tech setup
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80", // Workshop
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80", // Cybersecurity
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80", // Coding
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80", // Matrix code
  "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80"  // Server
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-32 relative bg-black/50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Moments in Tech</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {images.map((src, index) => (
            <motion.div
              key={index}
              className={`relative rounded-3xl overflow-hidden cursor-pointer group ${index === 0 || index === 3 ? 'md:col-span-2' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src={src} 
                alt={`Gallery ${index}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                 <p className="text-white font-medium text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Activity Snapshot #{index + 1}</p>
                 <span className="text-white/60 text-sm">SENA IT CLUB Gallery</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;