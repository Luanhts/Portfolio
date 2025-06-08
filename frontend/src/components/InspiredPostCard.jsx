import React from 'react';
import { motion } from 'framer-motion';

const InspiredPostCard = ({ title, date, category, description }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <motion.div 
      variants={cardVariants}
      className="bg-card p-6 sm:p-8 rounded-md shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">{title}</h3>
      <div className="flex items-center text-xs sm:text-sm text-muted-foreground mb-4">
        <span>{date}</span>
        <span className="mx-2">|</span>
        <span>{category}</span>
      </div>
      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default InspiredPostCard;