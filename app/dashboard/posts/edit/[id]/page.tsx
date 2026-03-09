import { blogPosts } from '../../../../../data/blogs';
import EditPostForm from '@/app/dashboard/posts/edit/[id]/EditPostForm';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default function EditPostPage({ params }: { params: { id: string } }) {
  const postId = parseInt(params.id);
  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    return <div className="container mx-auto px-4 py-8">Post not found</div>;
  }

  return <EditPostForm post={post} />;
}
