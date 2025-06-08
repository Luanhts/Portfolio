import React from 'react';
import { motion } from 'framer-motion';
import InspiredWorkItem from '@/components/inspired-portfolio/InspiredWorkItem';

const InspiredFeaturedWorks = () => {
  const works = [
    {
      title: "Designing Dashboards",
      year: "2020",
      category: "Dashboard",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      imagePlaceholder: "Dark themed dashboard UI screenshot",
      imageAlt: "Designing Dashboards Project Screenshot"
    },
    {
      title: "Vibrant Portraits of 2020",
      year: "2018",
      category: "Illustration",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      imagePlaceholder: "Colorful illustration of a woman with a flower in her hair",
      imageAlt: "Vibrant Portraits Project Screenshot"
    },
    {
      title: "36 Days of Malayalam type",
      year: "2018",
      category: "Typography",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      imagePlaceholder: "Stylized letter 'A' in Malayalam typography",
      imageAlt: "36 Days of Malayalam Type Project Screenshot"
    }
  ];

  return (
    <section id="featured-works" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-foreground text-center mb-12 sm:mb-16">Featured works</h2>
        <motion.div 
          className="space-y-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.3, delayChildren: 0.1 }}
        >
          {works.map((work, index) => (
            <InspiredWorkItem key={index} {...work} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InspiredFeaturedWorks;