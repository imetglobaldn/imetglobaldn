import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '../types/blog';

interface BlogCardProps {
    post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
    return (
        <Link 
            href={`/blog/${post.id}`}
        >
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1">
                <div className="relative h-48 w-full">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">
                            {new Date(post.date).toLocaleDateString()}
                        </span>
                        <span 
                            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                        >
                            Read More
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
