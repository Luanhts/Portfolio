import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const InspiredHero = () => {
  return (
    <section id="hero" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-5">
              Hi, I am John, <br />Creative Technologist
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-xl">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-base rounded"
              onClick={() => alert("Download Resume clicked!")}
            >
              Download Resume
            </Button>
          </motion.div>
          <motion.div 
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-lg">
              <img  
                class="w-full h-full object-cover" 
                alt="John, Creative Technologist - Profile Picture"
               src="https://images.unsplash.com/photo-1696856872980-4db3ce1caf6f" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InspiredHero;