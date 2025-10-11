'use client';

import type { Project } from '@/types/project';
import { motion } from 'framer-motion';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="group relative block h-64 w-full rounded-lg bg-gray-800 shadow-lg overflow-hidden"
    >
      <div className="relative flex h-full w-full items-end justify-start p-6 text-white">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="relative">
          <h3 className="text-2xl font-bold">{project.name}</h3>
          <div className="mt-2 flex gap-2 flex-wrap">
            {project.techStack.map((tech) => (
              <span key={tech} className="rounded-full bg-blue-600 px-2 py-1 text-xs">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg bg-black bg-opacity-80 p-6 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <p className="mb-4">{project.description}</p>
        <div className="flex gap-4">
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              GitHub
            </a>
          )}
          {project.demoLink && (
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
