import React from 'react';
import { motion } from 'framer-motion';
import InspiredPostCard from '@/components/inspired-portfolio/InspiredPostCard';

const InspiredRecentPosts = () => {
  const posts = [
    {
      title: "Making a design system from scratch",
      date: "12 Feb 2020",
      category: "Design, Pattern",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
      title: "Creating pixel perfect icons in Figma",
      date: "12 Feb 2020",
      category: "Figma, Icon Design",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    }
  ];

  return (
    <section id="recent-posts" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">Recent posts</h2>
          <a href="#" className="text-primary hover:text-primary/80 transition-colors text-sm font-medium">
            View all
          </a>
        </div>
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2, delayChildren: 0.1 }}
        >
          {posts.map((post, index) => (
            <InspiredPostCard key={index} {...post} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InspiredRecentPosts;