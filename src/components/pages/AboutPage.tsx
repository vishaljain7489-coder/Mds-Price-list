import React from 'react';
import { AboutSection } from '../sections/AboutSection';
import { TestimonialsSection } from '../sections/TestimonialsSection';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-10">
      <AboutSection />
      <TestimonialsSection />
    </div>
  );
};
