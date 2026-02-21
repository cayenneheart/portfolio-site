import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink, Github, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { works } from '@/data';

interface WorkDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return works.map((work) => ({
    slug: work.slug,
  }));
}

export async function generateMetadata({
  params,
}: WorkDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const work = works.find((w) => w.slug === slug);

  if (!work) {
    return {
      title: 'Not Found | Portfolio',
    };
  }

  return {
    title: `${work.title} | Works | Portfolio`,
    description: work.description,
  };
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  const work = works.find((w) => w.slug === slug);

  if (!work) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-screen-lg px-4 py-8 md:py-12">
      <Link
        href="/works"
        className="mb-6 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Works一覧に戻る
      </Link>

      <div className="relative mb-8 aspect-video overflow-hidden rounded-lg bg-muted">
        {work.thumbnail ? (
          <Image
            src={work.thumbnail}
            alt={work.title}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="flex h-full items-center justify-center text-muted-foreground">
            No Image
          </div>
        )}
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold md:text-4xl">{work.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {work.description}
          </p>

          {work.content && (
            <>
              <Separator className="my-8" />
              <div className="prose prose-invert max-w-none">
                {work.content.split('\n').map((line, index) => {
                  if (line.startsWith('## ')) {
                    return (
                      <h2 key={index} className="mt-8 mb-4 text-2xl font-bold">
                        {line.replace('## ', '')}
                      </h2>
                    );
                  }
                  if (line.startsWith('- ')) {
                    return (
                      <li key={index} className="ml-4 text-muted-foreground">
                        {line.replace('- ', '')}
                      </li>
                    );
                  }
                  if (line.trim() === '') {
                    return <br key={index} />;
                  }
                  return (
                    <p key={index} className="text-muted-foreground">
                      {line}
                    </p>
                  );
                })}
              </div>
            </>
          )}
        </div>

        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6 space-y-6">
              <div>
                <h3 className="mb-2 font-semibold">期間</h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {work.startDate} - {work.endDate || '現在'}
                  </span>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="mb-3 font-semibold">技術スタック</h3>
                <div className="flex flex-wrap gap-2">
                  {work.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <h3 className="mb-3 font-semibold">リンク</h3>
                {work.url && (
                  <Button className="w-full" asChild>
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      サイトを見る
                    </a>
                  </Button>
                )}
                {work.github && (
                  <Button variant="outline" className="w-full" asChild>
                    <a
                      href={work.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHubを見る
                    </a>
                  </Button>
                )}
                {!work.url && !work.github && (
                  <p className="text-sm text-muted-foreground">
                    公開リンクはありません
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
