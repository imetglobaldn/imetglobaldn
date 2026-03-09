'use client';

import React, { useState } from 'react';
import { blogPosts } from '@/data/blogs';
import { BlogCategory } from '@/data/blogs';
import dynamic from 'next/dynamic';
import LazyLoad from '@/components/LazyLoad';
import Link from 'next/link';

const DynamicBanner = dynamic(() => import('@/components/Banner'), {
  ssr: true
});

const DynamicCategoryFilter = dynamic(() => import('@/components/CategoryFilter'), {
  ssr: true,
  loading: () => <div className="h-12 bg-gray-100 animate-pulse rounded-lg" />
});

// Categories for blog page (excluding Press Release and Digital Media)
const BLOG_CATEGORIES: BlogCategory[] = ['NotToMiss', 'Blog', 'IoT'];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | 'all'>('all');

  const filteredPosts = activeCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.categories.includes(activeCategory));

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section - Load immediately */}
      <DynamicBanner
        title="Blog"
        description="Explore our latest insights, updates, and stories"
      />

      {/* Category Filter - Load with smoother transition */}
      <div className="sticky top-0 z-10 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <DynamicCategoryFilter
            activeCategory={activeCategory}
            categories={BLOG_CATEGORIES}
            onCategoryChange={setActiveCategory}
          />
        </div>
      </div>

      {/* Blog Grid - Lazy load with larger threshold */}
      <LazyLoad height="800px" threshold={0.2}>
        <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          {filteredPosts.length === 0 ? (
            <div className="text-center text-gray-600 dark:text-gray-400 py-12">
              No posts found in this category.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <Link 
                  key={post.id} 
                  href={`/blog/${post.slug}`}
                  className="block group"
                >
                  <article className="rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 h-full flex flex-col">
                    {post.image && (
                      <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-4 sm:p-6 flex flex-col flex-grow">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.categories.map((category) => (
                          <span
                            key={category}
                            className="bg-red text-white px-2 py-1 rounded-md text-xs sm:text-sm"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                      <h2 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-red transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-auto">
                        <span>{post.author}</span>
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </section>
      </LazyLoad>
    </main>
  );
}
