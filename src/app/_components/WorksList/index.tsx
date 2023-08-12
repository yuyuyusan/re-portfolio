'use client';
import { WorksArticle } from '@/app/_libs/microcms/client';
import WorksListItem from '../WorksListItem';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './index.module.scss';
type Props = {
  articles?: WorksArticle[];
};

export default function WorksList({ articles }: Props) {
  const [isSelect, setIsSelect] = useState(false);
  const router = useRouter();

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
    <ul className={`${styles.worksList} grid flex-wrap grid-cols-3 gap-x-7 gap-y-20 justify-center`}>
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
