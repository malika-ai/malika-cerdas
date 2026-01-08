import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = "", 
  delay = 0,
  hoverEffect = false
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      whileHover={hoverEffect ? { y: -5, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)" } : {}}
      className={`
        bg-white/60 backdrop-blur-xl 
        border border-white/40 
        shadow-[0_8px_30px_rgb(0,0,0,0.04)]
        rounded-3xl 
        overflow-hidden
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};