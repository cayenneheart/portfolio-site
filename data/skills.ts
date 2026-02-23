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
    name: 'バイブコーディング / ノーコード',
    skills: [
      { name: 'Claude Code', level: 'advanced' },
      { name: 'Cursor', level: 'intermediate' },
      { name: 'FlutterFlow', level: 'beginner' },
      { name: 'Notion', level: 'advanced' },
      { name: 'Dify', level: 'intermediate' },
      { name: 'n8n', level: 'beginner' },
    ],
  },
];
