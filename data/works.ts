import { Work } from '@/types';

export const works: Work[] = [
  {
    id: '1',
    slug: 'project-management-app',
    title: 'プロジェクト管理アプリ',
    description:
      'チーム向けのプロジェクト管理ツール。タスク管理、進捗可視化、チームコラボレーション機能を提供。',
    thumbnail: '/images/works/project-management.png',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    category: 'web',
    url: 'https://example.com',
    github: 'https://github.com/username/project',
    startDate: '2023-06',
    endDate: '2023-12',
    featured: true,
    content: `
## 概要
チーム向けのプロジェクト管理ツールです。

## 機能
- タスク管理（作成、編集、削除、ステータス変更）
- カンバンボード
- ガントチャート
- チームメンバー管理
- リアルタイム通知

## 技術的なポイント
- Server Componentsを活用したパフォーマンス最適化
- Prismaによる型安全なデータベース操作
- WebSocketによるリアルタイム同期
    `,
  },
  {
    id: '2',
    slug: 'ec-platform',
    title: 'ECプラットフォーム',
    description:
      '中小企業向けのECサイト構築プラットフォーム。商品管理、決済、配送管理を統合。',
    thumbnail: '/images/works/ec-platform.png',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    category: 'web',
    url: 'https://example.com',
    startDate: '2023-01',
    endDate: '2023-05',
    featured: true,
    content: `
## 概要
中小企業向けのECサイト構築プラットフォームです。

## 機能
- 商品管理
- 在庫管理
- Stripe決済連携
- 配送ステータス管理
- 顧客管理

## 技術的なポイント
- Stripeによる安全な決済処理
- MongoDBの柔軟なスキーマ設計
- RESTful API設計
    `,
  },
  {
    id: '3',
    slug: 'mobile-fitness-app',
    title: 'フィットネスアプリ',
    description:
      'パーソナルトレーニング記録・分析アプリ。ワークアウト記録、進捗グラフ、目標設定機能。',
    thumbnail: '/images/works/fitness-app.png',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Chart.js'],
    category: 'mobile',
    startDate: '2022-08',
    endDate: '2022-12',
    featured: false,
    content: `
## 概要
パーソナルトレーニング記録・分析アプリです。

## 機能
- ワークアウト記録
- 進捗グラフ表示
- 目標設定・達成管理
- 通知リマインダー
    `,
  },
  {
    id: '4',
    slug: 'portfolio-website',
    title: 'ポートフォリオサイト',
    description:
      'Next.js 15とshadcn/uiを使用したモダンなポートフォリオサイト。ダークモード対応、AIチャット統合。',
    thumbnail: '/images/works/portfolio.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
    category: 'web',
    github: 'https://github.com/username/portfolio',
    startDate: '2024-01',
    featured: false,
    content: `
## 概要
このポートフォリオサイト自体のプロジェクトです。

## 機能
- レスポンシブデザイン
- ダークモード
- AIチャット（Dify統合）
- 実績詳細ページ
    `,
  },
];
