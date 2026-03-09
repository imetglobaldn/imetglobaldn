import { BlogCategory } from "../data/blogs";

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  categories: BlogCategory[];
  author: string;
  tags: string[];
}
