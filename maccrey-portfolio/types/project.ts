export interface Project {
  name: string;
  techStack: string[];
  descriptionKey: string;
  githubLink?: string;
  demoLink?: string;
  category: 'Flutter' | 'n8n' | 'Backend' | 'etc';
}
