import Banner from "@/components/Banner";
import { blogPosts } from "../../data/blogs";
// import { contactData } from "@/constants";
import Link from 'next/link';
// import Image from "next/image";


export default function MediaPage() {
  // Filter posts to only show Press Release category
  const pressReleasePosts = blogPosts.filter(post => 
    post.categories.includes('Press Release')
  );

  return (
    <main>
      <Banner
        title="In News & Media"
        description="Stay updated with IMET Global's latest press releases and media coverage"
      />
      <div className="container mx-auto max-w-7xl p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pressReleasePosts.map((post) => (
            <Link 
              key={post.id} 
              href={`/blog/${post.slug}`}
              className="block group"
            >
              <article className="rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow bg-white">
                {post.image && (
                  <div className="relative h-48 w-full mb-16">
                    <img
                      src={post.image}
                      alt={post.title}
                      className=" group-hover:scale-105 transition-transform duration-300 h-64  mx-auto"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.categories.map((category) => (
                      <span
                        key={category}
                        className="bg-red text-white px-2 py-1 rounded-md text-sm"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-red transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
