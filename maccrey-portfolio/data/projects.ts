import type { Project } from '@/types/project';

export const projects: Project[] = [
  {
    name: 'StudyDuck',
    techStack: ['Flutter', 'Supabase'],
    description: 'AI 기반 학습 관리 앱',
    githubLink: 'https://github.com/Maccrey/studycafeforce',
    category: 'Flutter',
  },
  {
    name: 'AutoFlow',
    techStack: ['n8n', 'Python'],
    description: '자동화 워크플로우 시스템 (추가 예정)',
    category: 'n8n',
  },
  {
    name: 'Portfolio Site',
    techStack: ['Next.js', 'TypeScript', 'TailwindCSS'],
    description: '개인 개발자 포트폴리오 웹사이트',
    githubLink: 'https://github.com/Maccrey/maccrey-profile',
    category: 'etc',
  }
];
