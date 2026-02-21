export interface SocialLink {
  platform: 'github' | 'twitter' | 'linkedin' | 'email';
  url: string;
  label: string;
}

export interface Profile {
  name: string;
  nameEn: string;
  title: string;
  bio: string;
  avatar: string;
  location: string;
  socialLinks: SocialLink[];
}
