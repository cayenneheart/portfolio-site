import { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    name: 'ビジネス',
    skills: [
      { name: '事業企画・開発', level: 'advanced' },
      { name: 'ピッチ・プレゼン', level: 'advanced' },
      { name: 'プロジェクト管理', level: 'intermediate' },
      { name: '組織運営・リーダーシップ', level: 'intermediate' },
      { name: 'マーケティング', level: 'intermediate' },
      { name: '英語', level: 'advanced' },
    ],
  },
  {
    name: 'AI Engineering / FDE',
    skills: [
      { name: 'Hermes AI Loop Engineering', level: 'advanced' },
      { name: 'Codex', level: 'advanced' },
      { name: 'FDE', level: 'advanced' },
      { name: 'Next.js', level: 'advanced' },
      { name: 'React', level: 'advanced' },
      { name: 'TypeScript', level: 'advanced' },
      { name: 'Flutter', level: 'intermediate' },
      { name: 'Supabase', level: 'advanced' },
      { name: 'Vercel', level: 'advanced' },
      { name: 'Cloudflare', level: 'intermediate' },
      { name: 'Obsidian', level: 'advanced' },
    ],
  },
];
