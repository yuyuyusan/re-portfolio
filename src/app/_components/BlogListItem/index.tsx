import Link from 'next/link';
import styles from './index.module.scss';
import { InfoArticle } from '@/app/_libs/microcms/client';

type Props = {
  article: InfoArticle;
};

export default function staticPage({ article }: Props) {
  return (
    <li key={article.id} className={styles.listItem}>
      <Link
        href={`/notes/${article.id}`}
        className={styles.listItemLink}
        aria-label={`${article.title}の詳細ページへ`}
      >
        <time
          dateTime={`${new Date(article.createdAt).toLocaleDateString('ja-JP', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
          })}`}
          className={styles.listItemLink__date}
        >
          {new Date(article.createdAt).toLocaleDateString('ja-JP', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
          })}
        </time>
        <h3 className={styles.listItemLink__title}>{article.title}</h3>
      </Link>
    </li>
  );
}
