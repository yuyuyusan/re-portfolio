'use client';
import { WorksArticle } from '@/app/_libs/microcms/client';
import WorksListItem from '../WorksListItem';
import { useState } from 'react';
import styles from './index.module.scss';

// 記事の型定義
type Props = {
  articles?: WorksArticle[];
};

// 記事のリスト
export default function WorksList({ articles }: Props) {
  const [isSelect, setIsSelect] = useState(false);
  // カードをクリックしたら、ViewTransition用のモーダルを表示する
  function handleClickCard() {
    try {
      (document as any).startViewTransition(() => {
        setIsSelect(true);
      });
    } catch (err) {
      console.error(err);
    }
  }
  if (!articles) {
    return null;
  }
  if (articles.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <ul className={`${styles.worksList}`}>
      {articles.map((article) => (
        <WorksListItem
          key={article.id}
          works={article}
          onClick={handleClickCard}
          isSelect={isSelect}
        />
      ))}
    </ul>
  );
}
