# Kaien Portfolio

小峯海円の経歴、事業、コミュニティ活動、開発作品をまとめた個人ポートフォリオです。

**本番環境:** https://kaien.mai-mee.com

## 主な機能

- プロフィール、Skills、経歴タイムライン、作品一覧
- データから静的生成する作品詳細ページ
- ダークモードとレスポンシブレイアウト
- React Hook FormとZodによる問い合わせフォーム
- Resendを使った問い合わせメール送信
- canonical、sitemap、robots、JSON-LD、OG画像のSEO設定

## 技術スタック

| 分類 | 技術 |
| --- | --- |
| フロントエンド | Next.js 16（App Router）、React 19、TypeScript |
| UI | Tailwind CSS 4、shadcn/ui、Radix UI |
| フォーム | React Hook Form、Zod |
| モーション | Framer Motion |
| メール送信 | Resend |
| ホスティング | Vercel |

## コンテンツ管理

公開内容は次のデータファイルで管理します。

- `data/profile.ts`: プロフィールとSNS
- `data/skills.ts`: Skillsの分類と習熟度
- `data/career.ts`: 経歴タイムライン
- `data/works.ts`: 作品一覧と詳細本文

作品画像は `public/images/works/` に16:9で配置します。詳細本文の簡易レンダラーはインラインMarkdownを解釈しないため、装飾記号ではなくプレーンテキストを使います。

## ローカル起動

```bash
npm install
npm run dev
```

`http://localhost:3000` を開きます。

## 環境変数

`.env.example` を参考に設定します。

```text
NEXT_PUBLIC_SITE_URL=https://kaien.mai-mee.com
GOOGLE_SITE_VERIFICATION=...
RESEND_API_KEY=...
```

問い合わせメールの送信先は `cayenneheart@gmail.com` です。

## 検証

```bash
npm test
npm run lint
npm run build
```

公開前にPCとモバイルの両方でホーム、Works、作品詳細、Contactを確認します。
