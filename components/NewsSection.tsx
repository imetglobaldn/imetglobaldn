"use client";
import React from 'react';
import { useNewsData } from './NewsData';
import { FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';

const NewsSection: React.FC = () => {
  const { news, loading, error } = useNewsData();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red py-10">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <section className="">
      <div className="max-w-7xl mx-auto">
        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {news.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-48 w-full overflow-hidden group">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category */}
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-blue/10 text-blue px-3 py-1 rounded-full text-sm">
                    {article.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-xl mb-3 line-clamp-2 hover:text-blue transition-colors">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.description}
                </p>

                {/* Source Reference */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="relative w-12 h-12">
                    <Image
                      src={article.source.logo}
                      alt={article.source.name}
                      fill
                      className="object-contain"
                      loading='lazy'
                    />
                  </div>
                  <span className="text-sm text-gray-500">
                    {article.source.name}
                  </span>
                </div>

                {/* Button */}
                <Link
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {article.buttonText}
                  <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        {/* <div className="text-center mt-12">
          <Link
            href="/news"
            className="inline-flex items-center px-8 py-4 bg-white border-2 border-blue text-blue font-semibold rounded-lg hover:bg-blue hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All News
            <FiArrowRight className="ml-2" />
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default NewsSection;
