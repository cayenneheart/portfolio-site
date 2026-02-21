import { CareerItem } from '@/types';

export const careerHistory: CareerItem[] = [
  {
    id: '1',
    title: 'シニアフルスタックエンジニア',
    company: 'Tech Company A',
    description:
      'マイクロサービスアーキテクチャを採用したSaaSプロダクトの設計・開発をリード。フロントエンドからバックエンド、インフラ構築まで一貫して担当。',
    startDate: '2022-04',
    current: true,
    technologies: ['Next.js', 'TypeScript', 'Go', 'AWS', 'Kubernetes'],
  },
  {
    id: '2',
    title: 'フロントエンドエンジニア',
    company: 'Startup B',
    description:
      '自社プロダクトのフロントエンド開発を担当。React/TypeScriptを用いたSPA開発、パフォーマンス最適化に従事。',
    startDate: '2020-01',
    endDate: '2022-03',
    current: false,
    technologies: ['React', 'TypeScript', 'Redux', 'Styled Components'],
  },
  {
    id: '3',
    title: 'Webエンジニア',
    company: 'Agency C',
    description:
      '受託開発案件を複数担当。コーポレートサイト、ECサイト、管理システムなど幅広いプロジェクトに参画。',
    startDate: '2018-04',
    endDate: '2019-12',
    current: false,
    technologies: ['PHP', 'Laravel', 'Vue.js', 'MySQL'],
  },
];
