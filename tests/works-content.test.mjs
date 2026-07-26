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

test('Event Interactiveをプロダクト中心の説明と実装済み技術で紹介する', async () => {
  const worksSource = await readFile(new URL('data/works.ts', projectRoot), 'utf8');

  assert.match(worksSource, /## 体験の流れ/);
  assert.match(worksSource, /## 仕組み/);
  assert.match(worksSource, /Tailwind CSS 4/);
  assert.match(worksSource, /Base UI/);
  assert.match(worksSource, /Zod/);
  assert.match(worksSource, /qrcode/);
  assert.doesNotMatch(worksSource, /公開版から外し/);
  assert.doesNotMatch(worksSource, /DM・マッチング・プロフィール・抽選/);
});

test('公開コンテンツ更新日を掲載日に合わせる', async () => {
  const seoSource = await readFile(new URL('lib/seo.ts', projectRoot), 'utf8');
  assert.match(seoSource, /SITE_LAST_MODIFIED = '2026-07-26'/);
});

test('現在の開発領域と大学1年時の実績をプロフィールに掲載する', async () => {
  const [skillsSource, profileSource, careerSource] = await Promise.all([
    readFile(new URL('data/skills.ts', projectRoot), 'utf8'),
    readFile(new URL('data/profile.ts', projectRoot), 'utf8'),
    readFile(new URL('data/career.ts', projectRoot), 'utf8'),
  ]);

  assert.match(skillsSource, /AI Engineering \/ FDE/);
  for (const skill of [
    'Hermes AI Loop Engineering',
    'Codex',
    'Flutter',
    'Next.js',
    'React',
    'TypeScript',
    'Vercel',
    'Supabase',
    'Cloudflare',
    'Obsidian',
  ]) {
    assert.match(skillsSource, new RegExp(skill.replace('.', '\\.')));
  }
  assert.doesNotMatch(skillsSource, /バイブコーディング|ノーコード|Cursor|FlutterFlow|Dify/);
  assert.match(profileSource, /大学1年の夏/);
  assert.match(profileSource, /ビジネスコンテストKING/);
  assert.match(profileSource, /青学のビジネスコンテスト/);
  assert.match(profileSource, /筑波大学起業サークルを創立/);
  assert.match(careerSource, /青学のビジネスコンテスト/);
});

test('Difyを公開画面から外し、普段使う連絡先へ統一する', async () => {
  const [layoutSource, footerSource, contactApiSource, worksSource] =
    await Promise.all([
      readFile(new URL('app/layout.tsx', projectRoot), 'utf8'),
      readFile(new URL('components/layout/footer.tsx', projectRoot), 'utf8'),
      readFile(new URL('app/api/contact/route.ts', projectRoot), 'utf8'),
      readFile(new URL('data/works.ts', projectRoot), 'utf8'),
    ]);

  assert.doesNotMatch(layoutSource, /ChatWidget|DIFY/);
  assert.doesNotMatch(worksSource, /Dify|AIチャット/);
  assert.match(footerSource, /mailto:cayenneheart@gmail\.com/);
  assert.match(contactApiSource, /to: \['cayenneheart@gmail\.com'\]/);
  assert.doesNotMatch(footerSource, /contactcayenneheart@gmail\.com/);
  assert.doesNotMatch(contactApiSource, /contactcayenneheart@gmail\.com/);
  assert.match(footerSource, /external: false/);
});

test('SusHi Drive NightをEvent Interactiveにつながるチーム活動として掲載する', async () => {
  const worksSource = await readFile(new URL('data/works.ts', projectRoot), 'utf8');
  const imageUrl = new URL(
    'public/images/works/sushi-drive-night.png',
    projectRoot
  );

  assert.match(worksSource, /slug: 'sushi-drive-night'/);
  assert.match(worksSource, /title: 'SusHi Drive Night'/);
  assert.match(worksSource, /運営メンバー/);
  assert.match(worksSource, /Networking Globeを開発/);
  assert.match(
    worksSource,
    /url: 'https:\/\/sushi-drive-night\.vercel\.app'/
  );
  assert.match(
    worksSource,
    /github: 'https:\/\/github\.com\/cayenneheart\/sushi-drive-night-lp'/
  );
  assert.doesNotMatch(worksSource, /PhysicalSkill|どすこいオンライン|pmap/);

  await access(imageUrl);
  assert.ok((await stat(imageUrl)).size > 100_000);
});

test('作品本文のMarkdown記号を露出させず、サイト自身を現在の構成で紹介する', async () => {
  const worksSource = await readFile(new URL('data/works.ts', projectRoot), 'utf8');
  const imageUrl = new URL('public/images/works/portfolio.png', projectRoot);

  assert.doesNotMatch(worksSource, /\*\*/);
  assert.doesNotMatch(worksSource, /バイブコーディング/);
  assert.match(worksSource, /thumbnail: '\/images\/works\/portfolio\.png'/);
  assert.match(worksSource, /App Router/);
  assert.match(worksSource, /React Hook Form/);
  assert.match(worksSource, /Resend/);
  await access(imageUrl);
  assert.ok((await stat(imageUrl)).size > 100_000);
});
