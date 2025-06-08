import React from 'react';
import { motion } from 'framer-motion';

const InspiredWorkItem = ({ title, year, category, description, imagePlaceholder, imageAlt }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.div 
      variants={itemVariants}
      className="grid md:grid-cols-3 gap-6 sm:gap-8 items-start pb-8 border-b border-border last:border-b-0"
    >
      <div className="md:col-span-1 rounded-md overflow-hidden shadow-md">
        <img  
          class="w-full h-auto object-cover aspect-[4/3] sm:aspect-video md:aspect-[4/3]" 
          alt={imageAlt}
         src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
      </div>
      <div className="md:col-span-2">
        <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-2">{title}</h3>
        <div className="flex items-center space-x-3 mb-4">
          <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">{year}</span>
          <span className="text-sm sm:text-base text-muted-foreground">{category}</span>
        </div>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default InspiredWorkItem;