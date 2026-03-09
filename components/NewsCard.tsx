import React from 'react';

interface NewsCardProps {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, description, url, imageUrl }) => {
  return (
    <div className=" rounded-xl overflow-hidden shadow-lg p-6 bg-white border-red border-2  hover:scale-105">
      <img className="w-full h-[200px] object-cover rounded-xl" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold font-bricolage text-2xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline bg-blue p-3 text-white font-bold rounded-xl">
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
