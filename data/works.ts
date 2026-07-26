import { Work } from '@/types';

export const works: Work[] = [
  {
    id: '5',
    slug: 'event-interactive',
    title: 'Networking Globe',
    description:
      '国際イベントの参加者が、どの国・都市から集まったのかをリアルタイムの3D地球儀で可視化するWebアプリ。',
    thumbnail: '/images/works/event-interactive.png',
    technologies: [
      'Next.js',
      'TypeScript',
      'Supabase',
      'Realtime',
      'Three.js',
      'Tailwind CSS',
      'Vercel',
    ],
    category: 'web',
    url: 'https://event-interactive.vercel.app',
    github: 'https://github.com/cayenneheart/event-interactive',
    startDate: '2026-04',
    featured: true,
    content: `
## 概要
国際イベントの会場で、参加者がどの国・都市から集まっているのかを一目で確認できるリアルタイム3D地球儀。主催者がイベントを作成し、参加者は会場のQRコードから出身地を登録する。登録された場所は共有画面へリアルタイムに反映される。

## コンセプト
交流機能を増やすのではなく、「この会場に世界のどこから人が集まったかを、かっこよく可視化する」ことだけに集中。スクリーンに浮かぶ光と都市名から、同じ場所に集まった人々の距離や広がりを直感的に感じられる体験を目指した。

## 体験の流れ
- 主催者がGoogleでログインし、イベント名と公開URLを設定
- 自動生成された参加用QRコードを受付やスクリーンに掲示
- 参加者が名前またはニックネーム、国、任意の都市を登録
- 会場の共有画面へ出身地が現れ、人数・国数・都市数もリアルタイムに更新

## 主な機能
- イベント作成・管理: 開催日時と共有URLを設定し、複数イベントを主催者画面から管理
- QR参加: イベントごとの参加用QRコードを画面表示・印刷
- リアルタイム地球儀: 参加者の国・都市を光点とラベルで3D表示
- ステージ表示: 会場スクリーン向けの全画面ビュー
- 主催者ダッシュボード: 参加人数・国数・都市数と登録内容を確認し、必要に応じて表示を削除

## 仕組み
- Next.jsのServer ComponentsとServer Actionsを通して、イベント単位のデータだけを取得・更新
- Supabase Realtimeのイベント別通知を受け、地球儀の表示データを再取得
- Google OAuthで主催者を認証し、参加者はログインなしで登録可能
- Zodによる入力検証、共有レート制限、署名済みHttpOnly Cookieで公開イベントを保護

## 技術スタック
- フロントエンド: Next.js 16（App Router）/ React 19 / TypeScript
- UI: Tailwind CSS 4 / Base UI
- 3D可視化: Three.js / react-globe.gl
- バックエンド: Supabase（PostgreSQL / Google Auth / Realtime / SSR）
- 入力・QR: Zod / qrcode
- ホスティング: Vercel
    `,
  },
  {
    id: '1',
    slug: 'axeler',
    title: 'AXeler',
    description:
      '「AIで人の力を最大化する」をミッションに、2025年10月に設立。POC伴走支援やITサービス開発を手がける。',
    thumbnail: '/images/works/axeler.svg',
    technologies: ['AI活用', 'POC伴走支援', 'ITサービス開発', '仮説検証'],
    category: 'business',
    url: 'https://www.axeler.jp/',
    startDate: '2025-10',
    featured: true,
    content: `
## 概要
「AIで人の力を最大化する」をミッションに掲げ、2025年10月8日に設立した株式会社。AIの力で、人がより価値創造に集中できる世界を目指す。

## ビジョン
「日本一仮説検証を回す」- ユーザーの声を重視し、本質的価値の提供を通じて信頼される企業を目指す。

## 事業内容
- POC伴走支援: 概念実証を伴走しながらサポート
- ITサービス開発: AIを活用したサービス開発

## コアバリュー
- 情熱・興味に夢中になる姿勢
- 本質的価値を届けるwin-win関係の構築
- 時代と共に変化し続ける継続的成長

## 会社概要
- 所在地: 茨城県つくば市
- 設立: 2025年10月8日
- 代表取締役: 小峯海円
    `,
  },
  {
    id: '2',
    slug: 'startix',
    title: 'STARTiX',
    description:
      '「未来の起業家を、今ここから」筑波大学の起業サークルを大学1年時に設立し、代表として運営。',
    thumbnail: '/images/works/startix.jpg',
    technologies: ['組織運営', 'イベント企画', 'コミュニティ形成', 'リーダーシップ'],
    category: 'community',
    url: 'https://startix-tsukuba.net/',
    startDate: '2024-10',
    featured: true,
    content: `
## 概要
「本気で夢を語り合える場所を作る」をミッションに、筑波大学の起業サークルを大学1年時に設立。新しいアイデアから実際の起業まで、挑戦する学生をサポートするコミュニティ。

## 活動内容
- アイデアソン: 定期開催で創造的思考力を養成。様々な課題に対して新しい解決策を生み出す
- ハッカソン: プログラミングサークルと連携しながらプロトタイプ開発を実施
- イベント参加: クロスジャンルJAMや交流会など、多様な分野の学生との交流を推進

## 実績
- アクティブメンバー: 15名以上
- 年間イベント数: 20以上
- 代表として組織の立ち上げから運営体制の構築まで担当
    `,
  },
  {
    id: '3',
    slug: 'slush-2025',
    title: 'Slush 2025 フィンランド派遣',
    description:
      'TIB（Tokyo Innovation Base）の北欧派遣プログラムに選抜され、フィンランド・ヘルシンキで開催される世界最大級のスタートアップイベントSlushに参加。',
    thumbnail: '/images/works/slush.png',
    technologies: ['グローバル', 'ネットワーキング', 'スタートアップエコシステム', '英語'],
    category: 'event',
    url: 'https://note.com/bright_koala610/n/n318f045e2010',
    startDate: '2025-11',
    endDate: '2025-11',
    featured: true,
    content: `
## 概要
TIB（Tokyo Innovation Base）主催の北欧派遣プログラムに応募・選抜され、11月16日〜23日にフィンランドへ渡航。北欧最大級のスタートアップイベント「Slush」への参加を中心に、北欧のスタートアップエコシステムを学ぶ。

## 旅のテーマ
「心理的安全性のある挑戦文化」をどう社会実装しているのか学ぶ

## 主な活動
- Slush参加（11/19-20）: 起業家・投資家とのネットワーキング、ピッチコンテスト視聴、スタートアップブース訪問
- Aalto大学訪問: 学生主導のスタートアップエコシステム「Aaltoes」について学ぶ
- demola社との意見交換: 課題にフォーカスしたプログラム設計について
- maria 01訪問: スタートアップ施設での起業家との座談会
- 日本企業のブース手伝い: 英語での説明・名刺交換

## 学び・気づき
- フィンランドのスタートアップ文化は、Nokia買収をきっかけに若い世代が危機感を持ち、学生主導で作られてきた
- 「とりあえずやってみる」精神の重要性
- 日本に足りないのは「無謀なものに挑戦する起業家」と「挑戦経験者が支援する仕組み」
- スタートアップの失敗の多くは人間関係に起因する

## 興味を持った企業
- Humani（心理学×AI のチームマネジメント支援）
- Lovable、bolt（若手創業者による技術×社会課題解決）
    `,
  },
  {
    id: '4',
    slug: 'portfolio-site',
    title: 'ポートフォリオサイト',
    description:
      '経歴、プロジェクト、技術領域を一つにまとめ、公開情報をデータから継続更新できる個人ポートフォリオ。',
    thumbnail: '/images/works/portfolio.png',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'shadcn/ui',
      'Framer Motion',
      'Resend',
      'Vercel',
    ],
    category: 'web',
    url: 'https://kaien.mai-mee.com',
    github: 'https://github.com/cayenneheart/portfolio-site',
    startDate: '2025-02',
    featured: false,
    content: `
## 概要
小峯海円の経歴、事業、コミュニティ活動、開発作品を一つの場所にまとめたポートフォリオサイト。プロフィールや作品情報をデータとして管理し、新しい活動を継続的に追加できる構成にしている。

## 主な機能
- プロフィール、経歴、Skills、Worksを一つのストーリーとして掲載
- 作品ごとの詳細ページ、公開サイト、GitHubへの導線
- PC・タブレット・モバイルに対応したレスポンシブレイアウト
- システム設定と連動するダークモード
- 入力検証とメール送信を備えた問い合わせフォーム
- canonical、sitemap、robots、JSON-LD、OG画像を含むSEO設定

## 実装
- Next.js App Routerの静的生成で、作品一覧と詳細ページを高速配信
- TypeScriptの型定義とデータファイルで、プロフィール・経歴・作品を一元管理
- shadcn/uiとRadix UIを基礎に、紫を軸としたUIへ統一
- Framer Motionによるスクロール連動アニメーション
- React Hook FormとZodによる問い合わせ内容の検証
- Resendを使った問い合わせメール送信
- Node.js標準テスト、ESLint、本番ビルド、ブラウザ視覚確認を公開前に実行

## 技術スタック
- フロントエンド: Next.js 16（App Router）/ React 19 / TypeScript
- UI: Tailwind CSS 4 / shadcn/ui / Radix UI
- フォーム: React Hook Form / Zod
- モーション: Framer Motion
- メール送信: Resend
- ホスティング: Vercel
    `,
  },
];
