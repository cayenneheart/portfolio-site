import { Work } from '@/types';

export const works: Work[] = [
  {
    id: '5',
    slug: 'event-interactive',
    title: 'Networking Globe',
    description:
      '国際イベントの参加者が、どの国・都市から集まったのかをリアルタイムの3D地球儀で可視化するWebアプリ。',
    thumbnail: '/images/works/event-interactive.png',
    technologies: ['Next.js', 'Supabase', 'Realtime', '3D Globe', 'Vercel'],
    category: 'web',
    url: 'https://event-interactive.vercel.app',
    github: 'https://github.com/cayenneheart/event-interactive',
    startDate: '2026-04',
    featured: true,
    content: `
## 概要
国際イベントの会場で、参加者がどの国・都市から集まっているのかを一目で確認できるリアルタイム3D地球儀。主催者がイベントを作り、参加者は名前・国・任意の都市を入力するだけで共有画面へ反映される。

## コンセプト
交流機能を増やすのではなく、「この会場に世界のどこから人が集まったかを、かっこよく可視化する」ことだけに集中。DM・マッチング・プロフィール・抽選・スケジュールなどの機能は公開版から外し、イベント会場で迷わず使える体験に整理した。

## 主な機能
- イベント作成・管理: 主催者がGoogleログイン後にイベントを作成し、共有URLとQRコードを発行
- かんたん参加登録: 名前またはニックネーム、国、任意の都市だけを入力
- リアルタイム地球儀: 参加状況をイベント単位で即時更新し、国・都市の広がりを3D表示
- 主催者向け管理: 登録人数の確認と、不適切な表示の削除

## 公開品質への取り組み
- 参加者データをイベント単位で分離し、公開画面からDB全体を直接参照しない構成
- 登録・再取得処理へ入力検証とレート制限を実装
- Realtimeでは参加者情報そのものではなく、イベント別の更新通知だけを配信
- 終了した機能の画面・API・サーバー処理を公開経路から閉鎖

## 技術スタック
- Next.js 16 / React 19 / TypeScript
- Supabase（PostgreSQL・Auth・Realtime）
- Three.js / react-globe.gl
- Vercel
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
- **POC伴走支援**: 概念実証を伴走しながらサポート
- **ITサービス開発**: AIを活用したサービス開発

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
- **アイデアソン**: 定期開催で創造的思考力を養成。様々な課題に対して革新的ソリューションを生み出す
- **ハッカソン**: プログラミングサークルと連携しながらプロトタイプ開発を実施
- **イベント参加**: クロスジャンルJAMや交流会など、多様な分野の学生との交流を推進

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
- **Slush参加（11/19-20）**: 起業家・投資家とのネットワーキング、ピッチコンテスト視聴、スタートアップブース訪問
- **Aalto大学訪問**: 学生主導のスタートアップエコシステム「Aaltoes」について学ぶ
- **demola社との意見交換**: 課題にフォーカスしたプログラム設計について
- **maria 01訪問**: スタートアップ施設での起業家との座談会
- **日本企業のブース手伝い**: 英語での説明・名刺交換

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
      'Claude Codeを使ってバイブコーディングで作成したポートフォリオサイト。Next.js + shadcn/ui。',
    thumbnail: '/images/works/portfolio.svg',
    technologies: ['Claude Code', 'Next.js', 'Tailwind CSS', 'shadcn/ui', 'Dify'],
    category: 'web',
    github: 'https://github.com/cayenneheart/portfolio-site',
    startDate: '2025-02',
    featured: false,
    content: `
## 概要
このポートフォリオサイト自体。Claude Codeを使ったバイブコーディングで作成。

## 特徴
- レスポンシブデザイン
- ダークモード対応
- AIチャット（Dify統合）
- モダンなUI/UX

## 技術スタック
- Next.js 16
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
    `,
  },
];
