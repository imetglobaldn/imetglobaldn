import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { blogPosts } from "../../../data/blogs";
import { BlogPost } from "../../../types/blog";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validate categories
    if (!data.categories || data.categories.length === 0) {
      return NextResponse.json(
        { success: false, error: "At least one category is required" },
        { status: 400 }
      );
    }

    // Create new post with generated ID
    const newPost: BlogPost = {
      id: Math.max(0, ...blogPosts.map(p => p.id)) + 1,
      title: data.title,
      slug: data.slug,
      excerpt: data.excerpt,
      content: data.content,
      image: data.image,
      date: data.date,
      categories: data.categories,
      author: data.author,
      tags: data.tags
    };

    // Add to beginning of posts array
    blogPosts.unshift(newPost);

    // Update the blogs.ts file
    const blogsFilePath = path.join(process.cwd(), "data", "blogs.ts");
    const fileContent = `import { BlogPost } from '../types/blog';

export const blogCategories = [
  'NotToMiss',
  'Blog',
  'Digital Media',
  'IoT',
  'Press Release'
] as const;

export type BlogCategory = typeof blogCategories[number];

export const blogPosts: BlogPost[] = ${JSON.stringify(blogPosts, null, 2)};`;

    await fs.writeFile(blogsFilePath, fileContent, "utf-8");

    return NextResponse.json({ success: true, post: newPost });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create post" },
      { status: 500 }
    );
  }
}
