"use client";
// import { useEffect, useState } from 'react';

export interface NewsArticle {
  id: number;
  title: string;
  description: string;
  image: string;
  // date: string;
  source: {
    name: string;
    logo: string;
  };
  category: string;
  url: string;
  buttonText: string;
}

// Manual news data
export const manualNewsData: NewsArticle[] = [
  {
    id: 1,
    title: "Tech Layoffs Impact At Least 8,000 Individuals In India In 2024 As Firms Cut Down Jobs To Reduce Costs",
    description: "Layoffs.fyi, a real-time layoff tracker in the tech industry, found that the highest number of layoffs in the country came from Paytm which announced a job cut for at least 3,500 employees in June...",
    image: "https://feeds.abplive.com/onecms/images/uploaded-images/2024/08/14/8fb1e9993e855c509e276fd25c15377e1723637085009800_original.jpg?impolicy=abp_cdn&imwidth=1200&height=675",
    source: {
      name: "ABP News",
      logo: "/news/abp.webp"
    },
    category: "Technology",
    url: "https://news.abplive.com/business/layoffs-impact-at-least-8-000-individuals-in-india-in-2024-as-firms-cut-down-jobs-to-reduce-costs-1710243",
    buttonText: "Read More"
  },
  {
    id: 2,
    title: "India's skill gap is stealing futures: How right education can tackle the job crisis",
    description: "India's education system needs urgent reform to bridge the skills gap, which can help solve the unemployment issue....",
    image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202411/indias-youth-cant-find-jobs-heres-how-to-tackle-the-skills-gap-head-on-01334018-16x9_0.jpeg?VersionId=.XzEfGVHla78j8Af3Gv2ZRQXJ29L1aeK&size=690:388",
    source: {
      name: "India Today",
      logo: "/news/india_today.webp"
    },
    category: "Education",
    url: "https://www.indiatoday.in/education-today/featurephilia/story/india-youth-job-unemplyment-crisis-tackle-skill-gap-with-education-2626568-2024-11-01?utm_source=global-search&utm_medium=global-search&utm_campaign=global-search",
    buttonText: "Read More"
  },
  {
    id: 3,
    title: "At Least 8,000 Lose Jobs as India's Startups, Big Tech Focus on Profits, AI",
    description: "Across the world, over 1.30 lakh layoffs have taken place this year alone, including major ones among the Big Tech...",
    image: "https://media.assettype.com/thequint%2F2022-12%2F137e4e9e-7d09-4e4b-8e93-88a026efbbbb%2FUnemployment.jpg?auto=format%2Ccompress&fmt=webp&width=720",
    source: {
      name: "The Quint",
      logo: "/news/quint.webp",
    },
    category: "Finance, Techonlogy",
    url: "https://www.thequint.com/news/india/8000-layoffs-india-startups-tech-sector-it-jobs-profitability-ai-impact-hiring-down",
    buttonText: "Read More"
  },
  {
    id: 4,
    title: "Find out how this B-School is shaping a bright future for its students",
    description: "The placement cell at Jaipuria with their unflinching commitment and adaptive approach to new normal is all set for another excellent placement season. With over 55 new recruiters along with an existing 375 is racing to finish the placement ahead of time....",
    image: "https://images.hindustantimes.com/img/2021/03/27/550x309/Jaipuria_964x540_1616823123142_1616823138917.jpg",
    source: {
      name: "Hindustan Times",
      logo: "/news/ht.webp",
    },
    category: "Education",
    url: "https://www.hindustantimes.com/brand-post/find-out-how-this-b-school-is-shaping-a-bright-future-for-its-students-101616822880323.html",
    buttonText: "Read More"
  },
];

export const useNewsData = () => {
  return {
    news: manualNewsData,
    loading: false,
    error: null
  };
};
