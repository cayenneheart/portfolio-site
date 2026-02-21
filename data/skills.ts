import { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    name: 'フロントエンド',
    skills: [
      { name: 'React', level: 'expert' },
      { name: 'Next.js', level: 'expert' },
      { name: 'TypeScript', level: 'expert' },
      { name: 'Tailwind CSS', level: 'advanced' },
      { name: 'Vue.js', level: 'intermediate' },
    ],
  },
  {
    name: 'バックエンド',
    skills: [
      { name: 'Node.js', level: 'advanced' },
      { name: 'Python', level: 'advanced' },
      { name: 'Go', level: 'intermediate' },
      { name: 'PostgreSQL', level: 'advanced' },
      { name: 'MongoDB', level: 'intermediate' },
    ],
  },
  {
    name: 'インフラ・DevOps',
    skills: [
      { name: 'AWS', level: 'advanced' },
      { name: 'Docker', level: 'advanced' },
      { name: 'Kubernetes', level: 'intermediate' },
      { name: 'Terraform', level: 'intermediate' },
      { name: 'GitHub Actions', level: 'advanced' },
    ],
  },
  {
    name: 'その他',
    skills: [
      { name: 'Git', level: 'expert' },
      { name: 'Figma', level: 'intermediate' },
      { name: 'Agile/Scrum', level: 'advanced' },
    ],
  },
];
