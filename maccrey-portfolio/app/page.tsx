'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold">
          임석훈 <span className="text-gray-400">[Maccrey]</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Fullstack Developer | n8n | Flutter
        </p>
        <p className="mt-8 text-2xl md:text-3xl font-semibold text-blue-400">
          “세상에 존재하지 않는 서비스는 내가 만든다.”
        </p>
        <div className="mt-12 flex justify-center gap-4">
          <Link
            href="/projects"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-lg font-medium transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="/blog"
            className="px-8 py-3 border border-gray-600 hover:bg-gray-800 rounded-md text-lg font-medium transition-colors"
          >
            Read Blog
          </Link>
        </div>
      </motion.main>
    </div>
  );
}