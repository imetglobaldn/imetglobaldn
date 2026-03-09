'use client';

import React, { useState } from 'react';
import { blogPosts } from '@/data/blogs';
import { BlogCategory, } from '@/data/blogs';
import Banner from '@/components/Banner';
import Link from 'next/link';
import { contactData } from '@/constants';
import { generateNewsArticleSchema, generateBreadcrumbSchema } from '../../lib/schema';

// Categories for news page (only Press Release and Digital Media)
const NEWS_CATEGORIES: BlogCategory[] = ['Press Release', 'Digital Media'];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | 'all'>('all');
  const contactInformation = contactData.find(item => item.title === "In News & Media");
  const breadcrumbItems = [
    { name: 'Home', url: 'https://imetglobal.com' },
    { name: 'News', url: 'https://imetglobal.com/news' }
  ];

  // Filter posts for news categories
  const filteredPosts = blogPosts.filter(post => {
    if (activeCategory === 'all') {
      return post.categories.some(cat => NEWS_CATEGORIES.includes(cat as BlogCategory));
    }
    return post.categories.includes(activeCategory);
  });

  return (
    <>
      {filteredPosts?.map(post => (
        <script
          key={post.id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateNewsArticleSchema(post)) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)) }}
      />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Banner
          title={contactInformation?.title || "News & Media"}
          description={contactInformation?.description || "Stay updated with our latest news and media coverage"}
        />

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === 'all'
                  ? 'bg-red text-white'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200'
              }`}
            >
              All
            </button>
            {NEWS_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeCategory === category
                    ? 'bg-red text-white'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          {filteredPosts.length === 0 ? (
            <div className="text-center text-gray-600 dark:text-gray-400 py-12">
              No posts found in this category.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <Link 
                  key={post.id} 
                  href={`/news/${post.slug}`}
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
        </div>
      </main>
    </>
  );
}
