import type { BlogPost } from '@/lib/getBlogPosts';
import Image from 'next/image';

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500"
    >
      {post.thumbnail && (
        <div className="relative h-48 w-full">
          <Image
            src={post.thumbnail}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            className="transition-opacity duration-300 group-hover:opacity-90"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 line-clamp-2 text-gray-900 dark:text-white">{post.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          {new Date(post.pubDate).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        <p className="text-gray-700 dark:text-gray-300 line-clamp-3">{post.contentSnippet}</p>
      </div>
    </a>
  );
}
