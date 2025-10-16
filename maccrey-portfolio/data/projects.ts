import type { Project } from '@/types/project';

export const projects: Project[] = [
  {
    name: 'StudyDuck',
    techStack: ['Flutter', 'Supabase'],
    descriptionKey: 'studyduck',
    githubLink: 'https://github.com/Hummingbird-Team-Project/hummingbird-app',
    category: 'Flutter',
  },
  {
    name: 'Braille Typing Tutor',
    techStack: ['Next.js', 'TypeScript', 'TailwindCSS'],
    descriptionKey: 'brailletyping',
    demoLink: 'https://typing.maccrey.com',
    category: 'etc',
  },
  {
    name: 'AutoFlow',
    techStack: ['n8n', 'Python'],
    descriptionKey: 'autoflow',
    category: 'n8n',
  },
  {
    name: 'Portfolio Site',
    techStack: ['Next.js', 'TypeScript', 'TailwindCSS'],
    descriptionKey: 'portfolio',
    githubLink: 'https://github.com/Maccrey/maccrey-profile',
    category: 'etc',
  }
];
