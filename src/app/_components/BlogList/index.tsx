import { InfoArticle } from '@/app/_libs/microcms/client';
import BlogListItem from '../BlogListItem';

type Props = {
  articles?: InfoArticle[];
};

export default function BlogList({ articles }: Props) {
  if (!articles) {
    return null;
  }
  if (articles.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <div>
      <ul>
        {articles.map((article) => (
          <BlogListItem key={article.id} article={article} />
        ))}
      </ul>
    </div>
  );
}
