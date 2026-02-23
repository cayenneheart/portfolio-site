import { Profile } from '@/types';

export const profile: Profile = {
  name: '小峯 海円',
  nameEn: 'Kaien Komine',
  title: '起業家 / Entrepreneur',
  bio: '「おもろい人生にする」をモットーに活動。\n高校時代のアメリカ留学を経て筑波大学に入学。\n在学中にビジネスコンテストKINGで3位入賞、起業サークルSTARTiXを立ち上げ。\n休学中にホンダのインキュベーションプログラム参加、フィンランドSlushへの参加など、国内外で挑戦を続ける。',
  avatar: '/images/avatar.png',
  location: 'つくば / 東京',
  socialLinks: [
    {
      platform: 'twitter',
      url: 'https://twitter.com/username',
      label: 'X (Twitter)',
    },
    {
      platform: 'linkedin',
      url: 'https://linkedin.com/in/username',
      label: 'LinkedIn',
    },
    {
      platform: 'github',
      url: 'https://github.com/username',
      label: 'GitHub',
    },
    {
      platform: 'email',
      url: 'mailto:contact@example.com',
      label: 'Email',
    },
  ],
};
