import { CareerItem } from '@/types';

export const careerHistory: CareerItem[] = [
  {
    id: '1',
    title: '代表',
    company: 'AXeler',
    description:
      '案件受託をきっかけに起業。AI活用支援やシステム開発支援などを手がける。起業後もSlush（フィンランド）参加など、国内外での活動を継続。',
    startDate: '2025-10',
    current: true,
    technologies: ['事業開発', 'AI活用', 'プロジェクト管理'],
  },
  {
    id: '2',
    title: '創設者・代表',
    company: 'STARTiX（筑波大学起業サークル）',
    description:
      '筑波大学に起業サークルを立ち上げ。学生の起業支援やビジネスコンテストへの参加促進を行う。',
    startDate: '2024-10',
    endDate: '2025-09',
    current: false,
    technologies: ['組織運営', 'イベント企画', 'コミュニティ形成'],
  },
  {
    id: '3',
    title: 'インターン',
    company: '東京IT系企業',
    description:
      'ビジネス開発やプロジェクト推進に携わる。スタートアップの現場でビジネスの実務を経験。',
    startDate: '2024-08',
    endDate: '2024-12',
    current: false,
    technologies: ['ビジネス開発', '企画', 'リサーチ'],
  },
  {
    id: '4',
    title: 'ビジネスコンテストKING 3位入賞',
    company: '',
    description:
      '夏休みに参加したビジネスコンテストで3位を獲得。ビジネスアイデアの構築力と発表力を磨く。',
    startDate: '2024-08',
    endDate: '2024-08',
    current: false,
    technologies: ['事業企画', 'ピッチ', 'チームビルディング'],
  },
  {
    id: '5',
    title: '入学',
    company: '筑波大学',
    description:
      '推薦入試で筑波大学に入学。入学前には東大教授主催の100プログラムに参加し、FlutterFlowでのアプリ開発に挑戦。',
    startDate: '2024-04',
    endDate: '2024-04',
    current: false,
    technologies: ['推薦入試', '100プログラム', 'FlutterFlow'],
  },
  {
    id: '6',
    title: '交換留学',
    company: 'アメリカ',
    description:
      '高校3年時に1年間アメリカへ留学。異文化環境での生活を通じて、グローバルな視野と英語力を身につける。',
    startDate: '2022-08',
    endDate: '2023-06',
    current: false,
    technologies: ['英語', '異文化理解', '自立'],
  },
];
