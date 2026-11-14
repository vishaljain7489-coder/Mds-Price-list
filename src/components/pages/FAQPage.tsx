import React from 'react';
import { FAQSection } from '../sections/FAQSection';
import { FinalCTA } from '../sections/FinalCTA';

export const FAQPage: React.FC = () => {
  return (
    <div className="pt-10">
      <FAQSection />
      <FinalCTA />
    </div>
  );
};
