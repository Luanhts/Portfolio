import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const SkillBadge = ({ skill, icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="m-1"
    >
      <Badge variant="default" className="text-sm px-4 py-2 bg-primary/10 text-primary dark:bg-accent/20 dark:text-accent hover:bg-primary/20 dark:hover:bg-accent/30 transition-colors duration-200 cursor-default shadow-sm">
        {icon && React.cloneElement(icon, { className: "mr-2 h-4 w-4" })}
        {skill}
      </Badge>
    </motion.div>
  );
};

export default SkillBadge;