'use client';

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Sidebar from '../../../components/Sidebar';
import { BlogPost } from '../../../types/blog';
import { generateBlogPostSchema } from '../../../lib/schema';

interface BlogPostContentProps {
    post: BlogPost;
    prevPost: BlogPost | null;
    nextPost: BlogPost | null;
    relatedPosts: BlogPost[];
}

export default function BlogPostContent({ 
    post, 
    prevPost, 
    nextPost,
    relatedPosts 
}: BlogPostContentProps) {
    if (!post) {
        notFound();
    }

    return (
        <div className="max-w-7xl mx-auto py-12">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBlogPostSchema(post)) }}
            />
            <div className=" px-4">
                <div className="flex flex-col md:flex-row gap-8 ">
                    {/* Sidebar */}
                    <Sidebar />

                    {/* Main Content */}
                    <main className="flex flex-col w-full">
                        <article className="bg-white rounded-lg shadow-lg overflow-hidden w-full">
                        <h1 className="text-4xl font-bold p-10">{post.title}</h1>
                            {post.image && (
                                <div className="relative h-[600px] w-full">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            )}
                            <div className="p-6">
                                {/* <h1 className="text-3xl font-bold mb-4">{post.title}</h1> */}
                                {/* <div className="text-gray-600 mb-4">
                                    {new Date(post.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </div> */}
                                <div 
                                    className=" blog-content"
                                    dangerouslySetInnerHTML={{ __html: post.content }}
                                />
                            </div>
                        </article>

                        {/* Navigation Buttons */}
                        <div className="mt-8 flex justify-between">
                            {prevPost ? (
                                <Link
                                    href={`/blog/${prevPost.slug}`}
                                    className="flex items-center text-red-700 hover:text-red-800"
                                >
                                    <span className="mr-2">←</span>
                                    Previous Post
                                </Link>
                            ) : (
                                <div></div>
                            )}
                            {nextPost ? (
                                <Link
                                    href={`/blog/${nextPost.slug}`}
                                    className="flex items-center text-red-700 hover:text-red-800"
                                >
                                    Next Post
                                    <span className="ml-2">→</span>
                                </Link>
                            ) : (
                                <div></div>
                            )}
                        </div>

                        {/* Related Posts Section */}
                        <div className="mt-12">
                            <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {relatedPosts.map((relatedPost) => (
                                    <Link
                                        key={relatedPost.id}
                                        href={`/blog/${relatedPost.slug}`}
                                        className="block"
                                    >
                                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                            {relatedPost.image && (
                                                <div className="relative h-48 w-full">
                                                    <Image
                                                        src={relatedPost.image}
                                                        alt={relatedPost.title}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                            )}
                                            <div className="p-4">
                                                <h3 className="font-semibold text-lg mb-2">{relatedPost.title}</h3>
                                                <p className="text-gray-600 text-sm line-clamp-2">
                                                    {relatedPost.excerpt || relatedPost.content}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

// function slugify(str: string) {
//     return str.toLowerCase().replace(/[^a-z0-9]+/g, '-');
// }
