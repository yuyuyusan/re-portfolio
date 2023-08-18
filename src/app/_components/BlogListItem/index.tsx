import { InfoArticle } from '@/app/_libs/microcms/client';
import styles from './index.module.scss';
type Props = {
  article: InfoArticle;
};


export default function staticPage({ article }: Props) {
  return (
    <li key={article.id} className={styles.listItem}>
      <a href={`/blog/${article.id}`} className={styles.listItemLink}>
        <p className={styles.listItemLink__date}>
          {new Date(article.createdAt).toLocaleDateString()}
        </p>
        <h3 className={styles.listItemLink__title}>{article.title}</h3>
      </a>
    </li>
  );
}
