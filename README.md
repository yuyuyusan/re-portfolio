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
        ├── _constants
        ├── _hooks
        │   ├── useClientOnly
        │   └── useViewTransition
        ├── _libs
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

* WebGLでのテキストをparticleで表現
* RSS feedでZennの記事を抽出
* アクセシビリティAAのチェック
* CMSの無料APIが3つまでなので新たにAPIを作成し、category作成
* SCSSのmap-get関数の統一