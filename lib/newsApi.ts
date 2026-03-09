const BASE_URL = 'https://gnews.io/api/v4/search';

export const fetchEducationNews = async () => {
  const response = await fetch(`${BASE_URL}?q=education&lang=en&token=${process.env.NEXT_PUBLIC_CURRENTS_API_KEY}`);
  if (!response.ok) {
    throw new Error('Failed to fetch news');
  }
  const data = await response.json();
  return data.articles;
};



// import type { NextApiRequest, NextApiResponse } from 'next';

// const API_KEY = process.env.BING_API_KEY; // Use environment variable for the API key

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const query = req.query.q || 'latest news'; // Default query if none provided
//   const url = `https://api.bing.microsoft.com/v7.0/news/search?q=${query}&count=10`;

//   const response = await fetch(url, {
//     headers: {
//       'Ocp-Apim-Subscription-Key': API_KEY!,
//     },
//   });

//   if (!response.ok) {
//     return res.status(response.status).json({ error: 'Failed to fetch news' });
//   }

//   const data = await response.json();
//   res.status(200).json(data);
// }
