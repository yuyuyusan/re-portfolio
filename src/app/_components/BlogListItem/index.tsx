import { InfoArticle } from '@/app/_libs/microcms/client';

type Props = {
  article: InfoArticle;
};

export const revalidate = 60;

export default function staticPage({ article }: Props) {
  return (
    <li key={article.id}>
      <a href={`/blog/${article.id}`}>
        <h3>{article.title}</h3>
      </a>
    </li>
  );
}
