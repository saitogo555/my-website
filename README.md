# saitogo.me

私のプロフィールサイトのソースコードです。

## 技術スタック

- [Next.js](https://nextjs.org/) - Reactベースのフレームワーク
- [TypeScript](https://www.typescriptlang.org/) - 型安全な JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - ユーティリティファーストなCSSフレームワーク

## 特徴

- Visual Studio Code風のUIデザイン
- レスポンシブデザイン
- お問い合わせフォーム
- SEO対策

## セットアップ

```bash
# リポジトリのクローン
git clone https://github.com/yourusername/saitogo.me.git

# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

## ディレクトリ構成

```txt
/
├── app/          # ページコンポーネント
├── components/   # 再利用可能なグローバルコンポーネント
├── context/      # Reactコンテキスト
├── features/     # ページごとのコンポーネントと関連ファイル
├── hooks/        # カスタムフック
├── public/       # 静的ファイル
├── styles/       # グローバルスタイル・TailwindCSSカスタムファイル
├── types/        # TypeScript型定義
└── utils/        # ユーティリティ関数
```

## ライセンス

このプロジェクトはApache License 2.0の下で公開されています。
使用する際は、著作権表示とライセンス表示が必要です。

詳細は[LICENSE](LICENSE)ファイルをご覧ください。
