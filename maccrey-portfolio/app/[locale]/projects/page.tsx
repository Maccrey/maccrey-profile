'use client';

import { useState } from 'react';
import { projects as allProjects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';

const categories = ['All', 'Flutter', 'n8n', 'Backend', 'etc'];

export default function ProjectsPage() {
  const t = useTranslations('ProjectsPage');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? allProjects
      : allProjects.filter((p) => p.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-24 sm:py-32">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">{t('title')}</h1>
      <div className="flex justify-center flex-wrap gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {category === 'All' ? t('all') : category}
          </button>
        ))}
      </div>
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}