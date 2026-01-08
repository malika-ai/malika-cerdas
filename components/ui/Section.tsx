import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  fullWidth?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, id, className = "", fullWidth = false }) => {
  return (
    <section id={id} className={`py-20 md:py-32 relative ${className}`}>
      <div className={`${fullWidth ? 'w-full px-4' : 'max-w-7xl mx-auto px-6 lg:px-8'}`}>
        {children}
      </div>
    </section>
  );
};