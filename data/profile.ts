import { Profile } from '@/types';

export const profile: Profile = {
  name: '山田 太郎',
  nameEn: 'Taro Yamada',
  title: 'フルスタックエンジニア',
  bio: 'Webアプリケーション開発を専門とするエンジニアです。フロントエンドからバックエンド、インフラまで幅広く対応しています。ユーザー体験を重視したプロダクト開発が得意です。',
  avatar: '/images/avatar.png',
  location: '東京, 日本',
  socialLinks: [
    {
      platform: 'github',
      url: 'https://github.com/username',
      label: 'GitHub',
    },
    {
      platform: 'twitter',
      url: 'https://twitter.com/username',
      label: 'Twitter',
    },
    {
      platform: 'linkedin',
      url: 'https://linkedin.com/in/username',
      label: 'LinkedIn',
    },
    {
      platform: 'email',
      url: 'mailto:contact@example.com',
      label: 'Email',
    },
  ],
};
