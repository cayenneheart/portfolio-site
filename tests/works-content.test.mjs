import assert from 'node:assert/strict';
import { access, readFile, stat } from 'node:fs/promises';
import test from 'node:test';

const projectRoot = new URL('../', import.meta.url);

test('Event Interactiveの公開情報と作品画像を掲載する', async () => {
  const worksSource = await readFile(new URL('data/works.ts', projectRoot), 'utf8');
  const imageUrl = new URL(
    'public/images/works/event-interactive.png',
    projectRoot
  );

  assert.match(worksSource, /slug: 'event-interactive'/);
  assert.match(worksSource, /url: 'https:\/\/event-interactive\.vercel\.app'/);
  assert.match(
    worksSource,
    /github: 'https:\/\/github\.com\/cayenneheart\/event-interactive'/
  );
  assert.match(worksSource, /thumbnail: '\/images\/works\/event-interactive\.png'/);

  await access(imageUrl);
  assert.ok((await stat(imageUrl)).size > 100_000);
});

test('公開コンテンツ更新日を掲載日に合わせる', async () => {
  const seoSource = await readFile(new URL('lib/seo.ts', projectRoot), 'utf8');
  assert.match(seoSource, /SITE_LAST_MODIFIED = '2026-07-25'/);
});
