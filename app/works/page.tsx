import { Metadata } from 'next';
import { WorkGrid } from '@/components/works/work-grid';
import { works } from '@/data';

export const metadata: Metadata = {
  title: 'Works',
  description: '小峯海円がこれまでに手がけたプロジェクト・作品の一覧です。',
};

export default function WorksPage() {
  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-8 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold md:text-4xl">Works</h1>
        <p className="mt-2 text-muted-foreground">
          これまでに手がけたプロジェクトの一覧です
        </p>
      </div>
      <WorkGrid works={works} />
    </div>
  );
}
