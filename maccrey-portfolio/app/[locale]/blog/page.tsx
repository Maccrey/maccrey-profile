import { getBlogPosts } from '@/lib/getBlogPosts';
import BlogCard from '@/components/BlogCard';
import {getTranslations} from 'next-intl/server';

export default async function BlogPage() {
  const t = await getTranslations('BlogPage');
  const posts = await getBlogPosts();

  return (
    <div className="container mx-auto px-4 py-24 sm:py-32">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">{t('title')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.length > 0 ? (
          posts.map((post) => (
            <BlogCard key={post.link} post={post} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-700 dark:text-gray-300">{t('noPosts')}</p>
        )}
      </div>
    </div>
  );
}