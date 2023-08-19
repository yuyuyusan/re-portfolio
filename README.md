# New Portfolio

## Theme

lighthouseでの高得点とユーザビリティ、アクセシビリティを意識

## Features

### 前回作成したPortfolioは改善点があったため、新たに作成

* NuxtからNextに変更し、HostingをFirebaseからVercelに移行
* JavaScriptからTypeScriptに移行
* 更新コンテンツのレンダリングをISRに変更
* 各更新コンテンツのendpointに合わせて表示数変更できるページネーションを追加
* transition APIでシームレスなページ遷移を実装
* 404ページの追加

## Stack

Frontend

* HTML/SCSS
* Tailwind 3.3.3
* TypeScript 5.1.6
* Next.js 13.4.13

Backend

* Vercel

CMS

* microCMS

Design

* Figma

## Directory tree

<pre>
.
├── public
└── src
    └── app
        ├── _components
        │   ├── BlogList
        │   ├── BlogListItem
        │   ├── Footer
        │   ├── Header
        │   ├── Hero
        │   ├── LinkButton
        │   ├── Navigation
        │   ├── Pagination
        │   ├── Skills
        │   ├── WorksList
        │   └── WorksListItem
├──_constants
        ├── _hooks
        │   ├── useClientOnly
        │   └── useViewTransition
├──_libs
        │   └── microcms
        ├── about
        ├── blog
        │   ├── [postId]
        │   ├── category
        │   └── p
        │       └── [current]
        ├── styles
        └── works
            ├── [postId]
            └── p
                └── [current]
</pre>

## Installation

``` zsh
npm ci
```

## Feature Plans

* Topのテキストをparticleで表現
* RSSでZennの記事を取得して表示したので、Notesページに表示してSuspenseでタブ切り替え
* 機能はSuspense以外実現できたのでTOP以外のUIを調整
* アクセシビリティAAのチェック
* CMSの無料APIが3つまでなので新たにAPIを作成し、category作成
* SCSSのmap-get関数などコードの統一