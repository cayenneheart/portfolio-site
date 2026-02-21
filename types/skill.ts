export interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon?: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}
