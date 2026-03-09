import React from 'react';
import { BlogCategory } from '@/data/blogs';

interface CategoryFilterProps {
  activeCategory: BlogCategory | 'all';
  categories: BlogCategory[];
  onCategoryChange: (category: BlogCategory | 'all') => void;
  children?: React.ReactNode;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  activeCategory,
  categories,
  onCategoryChange,
  children
}) => {
  return (
    <div className="mb-8">
      {children}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onCategoryChange('all')}
          className={`px-4 py-2 rounded-full transition-colors ${
            activeCategory === 'all'
              ? 'bg-red text-white'
              : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-full transition-colors ${
              activeCategory === category
                ? 'bg-red text-white'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
