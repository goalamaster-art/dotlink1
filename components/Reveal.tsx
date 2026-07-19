import React from 'react';
import { motion } from 'motion/react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in milliseconds
  width?: "fit-content" | "100%"; 
}

export const Reveal: React.FC<RevealProps> = ({ children, className = "", delay = 0, width = "100%" }) => {
  return (
    <motion.div
      style={{ width }}
      className={className}
      initial={{ opacity: 0, y: 32, scale: 0.98, filter: "blur(1px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px 0px -20px 0px" }}
      transition={{ 
        duration: 1, 
        delay: delay / 1000, 
        ease: [0.16, 1, 0.3, 1] 
      }}
    >
      {children}
    </motion.div>
  );
};
