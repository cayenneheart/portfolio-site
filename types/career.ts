export interface CareerItem {
  id: string;
  title: string;
  company: string;
  description: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  technologies: string[];
}
