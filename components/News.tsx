"use client";
import { useEffect, useState } from 'react';
import NewsCard from "@/components/NewsCard";
import { fetchEducationNews } from '@/lib/newsApi';
// import Banner from '@/components/Banner';
// import { contactData } from '@/constants';

const News: React.FC = () => {
  interface Article {
    title: string;
    description: string;
    url: string;
    image: string;
  }
  const [news, setNews] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
//   const contactInfomation = contactData.find(item => item.title === "In News & Media");

  useEffect(() => {
    const getNews = async () => {
      try {
        const articles = await fetchEducationNews();
        setNews(articles);
      } finally {
        setLoading(false);
      }
    };
    getNews();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <div className="container max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
        {news.slice(0, 3).map((article) => (
          <NewsCard
            key={article.url}
            title={article.title}
            description={article.description}
            url={article.url}
            imageUrl={article.image || 'https://via.placeholder.com/150'}
          />
        ))}
      </div>
    </>
  );
};

export default News;
