import { TechArticle } from '@/app/_libs/microcms/client';
import TechListItem from '../TechListItem';
import styles from './index.module.scss';

type Props = {
  articles?: TechArticle[];
};

export default function TechList({ articles }: Props) {
  if (!articles) {
    return null;
  }
  if (articles.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <div>
      <ul className={styles.list}>
        {articles.map((article) => (
          <TechListItem key={article.id} article={article} />
        ))}
      </ul>
    </div>
  );
}
