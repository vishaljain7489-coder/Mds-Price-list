import React from 'react';
import { ProcessTimeline } from '../sections/ProcessTimeline';
import { CaseStudiesSection } from '../sections/CaseStudiesSection';

export const ProcessPage: React.FC = () => {
  return (
    <div className="pt-10">
      <ProcessTimeline />
      <CaseStudiesSection />
    </div>
  );
};
