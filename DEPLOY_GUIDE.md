# THE BASE GYM サイト デプロイ手順

Xserverのサーバー契約を解約し、Cloudflare Pages（無料）に移行する手順です。

---

## 全体の流れ

1. Formspreeでフォームを作成
2. ローカルで動作確認（npm install & npm run build）
3. GitHubリポジトリを作成してコードを push
4. Cloudflare Pagesでデプロイ設定
5. Xserverのネームサーバーを Cloudflare に変更
6. Xserverのサーバー契約を解約

---

## STEP 1: Formspree でコンタクトフォームを設定

1. https://formspree.io にアクセス → 無料アカウントを作成
2. 「New Form」を作成 → フォーム名: "THE BASE GYM お問い合わせ"
3. 作成されたフォームIDをコピー（例: `xpwzgkjz`）
4. `app/contact/page.tsx` の以下の行を自分のフォームIDに変更：

```tsx
const res = await fetch('https://formspree.io/f/【あなたのフォームID】', {
```

5. Formspreeの「Notifications」でメール通知先を `the-base-gym@ymail.ne.jp` に設定

---

## STEP 2: ローカルで動作確認

PowerShellを開き、このフォルダに移動：

```powershell
cd C:\Users\takas\Documents\thebase-gym-site

# 依存パッケージのインストール
npm install

# ビルド確認（静的ファイルが out/ に生成されることを確認）
npm run build

# 開発サーバーで確認（任意）
npm run dev
# → http://localhost:3000 をブラウザで開く
```

ビルドが成功すると `out/` フォルダに HTML ファイルが生成されます。

---

## STEP 3: GitHub にコードを push

1. https://github.com にサインイン（アカウントがなければ無料で作成）
2. 「New repository」→ リポジトリ名: `thebase-gym-site`（Private でOK）
3. PowerShellで以下を実行：

```powershell
cd C:\Users\takas\Documents\thebase-gym-site

git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/【あなたのGitHubユーザー名】/thebase-gym-site.git
git push -u origin main
```

---

## STEP 4: Cloudflare Pages でデプロイ

1. https://dash.cloudflare.com にアクセス → 無料アカウントを作成
2. 左メニュー「Workers & Pages」→「Pages」→「Connect to Git」
3. GitHubアカウントと連携 → `thebase-gym-site` リポジトリを選択
4. ビルド設定を以下の通りに入力：

| 項目 | 値 |
|------|---|
| Framework preset | Next.js (Static HTML Export) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Node.js version | `20` |

5. 「Save and Deploy」をクリック → 数分でデプロイ完了

デプロイ後、`https://thebase-gym-site.pages.dev` のような URL でアクセスできます。

---

## STEP 5: Cloudflare にドメインを追加

1. Cloudflareダッシュボードで「Add a Site」→ `thebase-gym.com` を入力
2. プランは「Free」を選択
3. Cloudflare が表示する **ネームサーバー2つ** をメモする
   （例: `ada.ns.cloudflare.com`, `liam.ns.cloudflare.com`）

### Xserverでネームサーバーを変更

1. https://www.xserver.ne.jp にログイン
2. 「Xserverアカウント」→「ドメイン設定」
3. `thebase-gym.com` の「ネームサーバー設定」を開く
4. メモしたCloudflareのネームサーバー2つに変更して保存

### Cloudflare Pages にカスタムドメインを設定

1. Cloudflare Pagesのプロジェクト →「Custom domains」→「Set up a custom domain」
2. `thebase-gym.com` と `www.thebase-gym.com` を追加

ネームサーバーの変更が反映されるまで最大48時間かかります（通常数時間）。
反映後、`https://thebase-gym.com` でサイトが表示されます。

---

## STEP 6: Xserver サーバー契約を解約

⚠️ **必ずサイトが正常に表示されることを確認してから解約してください。**

ドメインについて：
- サーバー解約後も `thebase-gym.com` のドメインは維持されます
- ただし「独自ドメイン永久無料特典」はサーバー契約が条件のため、年間約1,400円の費用が発生します
- Xserverアカウントはそのまま残し、ドメイン費用だけ支払えばOKです

解約手順：
1. https://www.xserver.ne.jp にログイン
2. 「Xserverアカウント」→「サーバー管理」
3. サーバー `xs621163` の「解約申請」を行う
4. 解約は翌月末（最短 2026/05/31）に有効になります

---

## ブログ記事の追加方法（今後の運用）

新しい記事を追加するには：

1. `content/posts/` フォルダに新しい `.md` ファイルを作成

```markdown
---
title: 記事のタイトル
date: 2026-05-01
category: トレーニング
slug: article-slug-in-english
description: 記事の概要（検索結果に表示されます）
---

## 見出し

本文を書きます。

**太字** や *斜体* が使えます。

- リスト1
- リスト2
```

2. GitHubにpush → Cloudflare Pagesが自動でビルド＆デプロイ

```powershell
cd C:\Users\takas\Documents\thebase-gym-site
git add .
git commit -m "新記事: 記事タイトル"
git push
```

以上で数分後に新記事が公開されます。

---

## 月額コスト比較

| 項目 | 移行前 | 移行後 |
|------|--------|--------|
| Xserver サーバー | 約1,000円/月 | **0円** |
| ドメイン（thebase-gym.com） | 0円（無料特典） | 約117円/月（年払い約1,400円） |
| Cloudflare Pages | — | **0円** |
| Formspree（月50件まで） | — | **0円** |
| **合計** | **約1,000円/月** | **約117円/月** |

年間で約10,000円の節約になります。
