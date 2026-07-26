# ポートフォリオサイト開発コンテキスト

## サイトの役割

- 小峯海円の活動・事業・開発作品を紹介する公開ポートフォリオ。
- 本番のcanonical originは `https://kaien.mai-mee.com`。
- 既存の紫を基調としたカードUI、余白、タイポグラフィ、ダークモード対応をデザインの基準とする。

## Worksの運用

- 作品データは `data/works.ts` で一元管理する。
- 新しい代表作品は配列の先頭へ追加し、`featured: true` とする。
- 公開中の作品には本番URLを、コードを公開している作品にはGitHub URLを設定する。
- サムネイルは `public/images/works/` に配置し、カード表示に合わせて16:9を基本とする。
- 実アプリのスクリーンショットを使う場合は、本番公開後の画面を使用する。
- 詳細本文は開発中に削除した機能や作業経緯ではなく、プロダクトの目的、利用体験、主な機能、仕組みをREADMEのようにまとめる。
- 技術スタックは対象リポジトリの実コードと依存関係を確認し、公開機能で実際に使っている技術だけを掲載する。
- Skillsは「バイブコーディング」や未使用ツールではなく、AI Loop Engineering、FDE、実際の開発・運用基盤を掲載する。
- 作品本文の簡易レンダラーはインラインMarkdownを解釈しないため、`**` などの装飾記号をデータへ入れない。
- 作品の追加・削除時は `tests/works-content.test.mjs` と詳細ページの表示を確認する。

## 連絡先

- 公開連絡先と問い合わせメールの送信先は `cayenneheart@gmail.com` に統一する。
- Difyチャットは公開機能として使用しない。再導入には明示的なプロダクト判断を必要とする。

## SEO規約

- 共通SEO定数は `lib/seo.ts` に置く。
- ページ固有のmetadataは `createPageMetadata()` を使い、canonical、Open Graph、Twitterを統一する。
- `app/sitemap.ts` にはcanonicalな公開URLだけを含める。
- 公開ページの内容を大きく更新した場合は `SITE_LAST_MODIFIED` を更新する。
- Google Search Consoleの所有権確認は、HTML meta tag方式の場合 `GOOGLE_SITE_VERIFICATION` 環境変数を利用できる。

## 検証

- データと公開アセットの回帰確認: `npm test`
- 静的検査: `npm run lint`
- 本番ビルド: `npm run build`
- UI変更後はPC・モバイルの両方をブラウザで確認する。
