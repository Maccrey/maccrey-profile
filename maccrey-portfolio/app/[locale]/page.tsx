'use client';

import { Link } from '@/routing';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-4 -mt-16">
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold">
          {t('name')} <span className="text-gray-600 dark:text-gray-400">{t('alias')}</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300">
          {t('title')}
        </p>
        <p className="mt-8 text-2xl md:text-3xl font-semibold text-blue-600 dark:text-blue-400">
          {t('slogan')}
        </p>
        <div className="mt-12 flex justify-center gap-4">
          <Link
            href="/projects"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-lg font-medium transition-colors"
          >
            {t('viewProjects')}
          </Link>
          <Link
            href="/blog"
            className="px-8 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md text-lg font-medium transition-colors"
          >
            {t('readBlog')}
          </Link>
        </div>
      </motion.main>
    </div>
  );
}