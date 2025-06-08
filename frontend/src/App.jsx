import React from 'react';
import { motion } from 'framer-motion';
import InspiredHeader from '../src/components/InspiredHeader';
import InspiredHero from '../src/components/InspiredHero';
import InspiredSkills from '../src/components/InspiredSkills';
import InspiredFeaturedWorks from '../src/components/InspiredFeaturedWorks';
import InspiredFooter from '../src/components/InspiredFooter';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <InspiredHeader />
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-grow"
      >
        <InspiredHero />
        <InspiredSkills />
        <InspiredFeaturedWorks />
      </motion.main>
      <InspiredFooter />
    </div>
  );
}

export default App;