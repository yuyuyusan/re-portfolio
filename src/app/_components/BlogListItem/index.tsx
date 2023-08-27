import Link from 'next/link';
import styles from './index.module.scss';
import { InfoArticle } from '@/app/_libs/microcms/client';

type Props = {
  article: InfoArticle;
};

export default function staticPage({ article }: Props) {
  const createdAt = new Date(article.createdAt);
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - createdAt.getTime();
  const yearsAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
  const monthsAgo = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
  );
  const daysAgo = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
  );

  return (
    <li key={article.id} className={styles.listItem}>
      <Link
        href={`/notes/${article.id}`}
        className={styles.listItemLink}
        aria-label={`${article.title}の詳細ページへ`}
      >
        {(article.emoji && (
          <span className={styles.emoji}>{article.emoji}</span>
        )) || <span className={styles.emoji}>😢</span>}
        <h3 className={styles.title}>
          <span>{article.title}</span>
        </h3>
        {/* 経過時間を表示 */}
        <time dateTime={`${createdAt.toISOString()}`} className={styles.date}>
          {yearsAgo > 0
            ? `${yearsAgo} years ago`
            : monthsAgo > 0
            ? `${monthsAgo} months ago`
            : `${daysAgo} day ago`}{' '}
        </time>
      </Link>
    </li>
  );
}
