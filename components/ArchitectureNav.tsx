'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface NavButton {
  id: string;
  label: string;
  icon?: string;
  description: string;
}

interface ArchitectureNavProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navButtons: NavButton[] = [
  {
    id: 'overview',
    label: 'Overview',
    description: 'High-level architecture overview'
  },
  {
    id: 'core-layout',
    label: 'Core Layout',
    description: 'Main layout components and structure'
  },
  {
    id: 'pages',
    label: 'Pages',
    description: 'Page components and routing'
  },
  {
    id: 'interactive',
    label: 'Interactive',
    description: 'Interactive components and features'
  },
  {
    id: 'education',
    label: 'Education',
    description: 'Educational content components'
  },
  {
    id: 'ui-system',
    label: 'UI System',
    description: 'UI components and design system'
  },
  {
    id: 'data',
    label: 'Data Flow',
    description: 'Data management and state flow'
  }
];

const ArchitectureNav: React.FC<ArchitectureNavProps> = ({
  activeSection,
  onSectionChange
}) => {
  return (
    <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md mb-6">
      {navButtons.map((button) => (
        <motion.button
          key={button.id}
          onClick={() => onSectionChange(button.id)}
          className={`
            relative px-4 py-2 rounded-md text-sm font-medium
            transition-colors duration-200 ease-in-out
            ${
              activeSection === button.id
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }
          `}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="block">{button.label}</span>
          <span
            className={`
              absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2
              px-2 py-1 text-xs text-white bg-gray-800 rounded
              opacity-0 transition-opacity duration-200
              group-hover:opacity-100 pointer-events-none
              whitespace-nowrap
            `}
          >
            {button.description}
          </span>
        </motion.button>
      ))}
    </div>
  );
};

export default ArchitectureNav;
