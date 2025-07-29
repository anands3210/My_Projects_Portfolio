export interface Project {
  id: number;
  title: string;
  category: string[];
  imageUrl: string;
  description: string;
  techStack: string[];
  liveDemoUrl?: string;
  githubUrl: string;
  notes?: string;
}
