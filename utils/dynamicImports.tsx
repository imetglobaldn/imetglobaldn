import React from 'react';
import dynamic from 'next/dynamic';

// Dynamic import with loading fallback
export const dynamicImport = (componentPath: string, ssr = true) => {
  return dynamic(() => import(componentPath), {
    ssr,
    loading: () => 
      <div>Loading...</div>
    
  });
};

// Components that can be loaded dynamically
export const DynamicComponents = {
  // Heavy components that aren't needed immediately
  FAQ: dynamicImport('../components/FAQ', false),
  Testimonials: dynamicImport('../components/Testimonials', false),
  Members: dynamicImport('../components/Members', false),
  Gallery: dynamicImport('../components/Gallery', false),
  InnovationCenter: dynamicImport('../components/InnovationCenter', false),
  SpotlightSection: dynamicImport('../components/SpotlightSection', false),
  CollaborationSection: dynamicImport('../components/CollaborationSection', false),
  
  // Components that need SSR
  Navbar: dynamicImport('../components/Navbar', true),
  Footer: dynamicImport('../components/Footer', true),
  Banner: dynamicImport('../components/Banner', true),
};
