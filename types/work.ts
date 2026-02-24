export interface Work {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  technologies: string[];
  category: 'web' | 'mobile' | 'design' | 'business' | 'community' | 'event' | 'tool' | 'other';
  url?: string;
  github?: string;
  startDate: string;
  endDate?: string;
  featured: boolean;
  content?: string;
}
