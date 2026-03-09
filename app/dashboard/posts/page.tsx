'use client';

import Link from 'next/link';
import { blogPosts } from '../../../data/blogs';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PostsPage() {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const handleDelete = async (postId: number) => {
    if (!confirm('Are you sure you want to delete this post?')) return;
    
    setIsDeleting(true);
    setSelectedPost(postId);

    try {
      const response = await fetch(`/api/posts/${postId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        router.refresh();
      } else {
        alert('Failed to delete post');
      }
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('Failed to delete post');
    } finally {
      setIsDeleting(false);
      setSelectedPost(null);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Manage Posts</h1>
        <Link
          href="/dashboard/posts/new"
          className="bg-red text-white px-6 py-2 rounded-md hover:bg-red-800 transition-colors"
        >
          Add New Post
        </Link>
      </div>

      <div className="grid gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row"
          >
            {/* Image Preview */}
            <div className="w-full md:w-48 h-48 relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Post Details */}
            <div className="flex-1 p-6">
              <div className="flex flex-wrap gap-2 mb-2">
                {post.categories.map((category) => (
                  <span
                    key={category}
                    className="text-sm bg-red-50 text-red-700 px-2 py-1 rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-4">
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <span>By {post.author}</span>
                </div>
                
                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    View
                  </Link>
                  <Link
                    href={`/dashboard/posts/edit/${post.id}`}
                    className="text-green-600 hover:text-green-800"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(post.id)}
                    disabled={isDeleting && selectedPost === post.id}
                    className={`text-red hover:text-rose-700 ${
                      isDeleting && selectedPost === post.id
                        ? 'opacity-50 cursor-not-allowed'
                        : ''
                    }`}
                  >
                    {isDeleting && selectedPost === post.id
                      ? 'Deleting...'
                      : 'Delete'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
