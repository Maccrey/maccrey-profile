'use client';

import type { BlogPost } from '@/lib/getBlogPosts';
import Image from 'next/image';
import { useLocale } from 'next-intl';

export default function BlogCard({ post }: { post: BlogPost }) {
  const locale = useLocale();

  return (
    <a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500"
    >
      {post.thumbnail && (
        <div className="relative h-64 w-full bg-gray-200 dark:bg-gray-700">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-opacity duration-300 group-hover:opacity-90"
            unoptimized
          />
        </div>
      )}
      <div
        className={`p-6 flex flex-col flex-grow ${
          !post.thumbnail ? 'bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600' : ''
        }`}
      >
        <h3 className="text-xl font-bold mb-2 line-clamp-2 text-gray-900 dark:text-white">{post.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          {new Date(post.pubDate).toLocaleDateString(
            locale === 'ko' ? 'ko-KR' : locale === 'ja' ? 'ja-JP' : 'en-US',
            { year: 'numeric', month: 'long', day: 'numeric' },
          )}
        </p>
        <p className="text-gray-700 dark:text-gray-300 flex-grow">{post.contentSnippet}</p>
      </div>
    </a>
  );
}
