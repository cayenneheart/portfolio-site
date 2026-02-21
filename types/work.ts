export interface Work {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  technologies: string[];
  category: 'web' | 'mobile' | 'design' | 'other';
  url?: string;
  github?: string;
  startDate: string;
  endDate?: string;
  featured: boolean;
  content?: string;
}
