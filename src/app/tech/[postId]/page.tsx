import { notFound } from 'next/navigation';
import parse from 'html-react-parser';
import { getTechDetail, getTechList } from '@/app/_libs/microcms/client';
import LinkButton from '@/app/_components/LinkButton';
import styles from './index.module.scss';

export const revalidate = 10;
export async function generateStaticParams() {
  // 記事の一覧を取得する
  const { contents } = await getTechList();
  // 記事の一覧から記事のIDを取得する
  const paths = contents.map((post) => {
    return {
      postId: post.id,
    };
  });
  return [...paths];
}

export default async function StaticDetailPage({
  params: { postId },
}: {
  params: { postId: string };
}) {
  // 記事の詳細を取得する
  const post = await getTechDetail(postId);
  if (!post) {
    notFound();
  }

  return (
    <section className={`${styles.container} ${styles.blogDetail}`}>
      <h2 className={styles.title}>{post.title}</h2>
      <time
        className={styles.date}
        dateTime={`${new Date(post.createdAt).toLocaleDateString('ja-JP', {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
        })}`}
      >
        {new Date(post.createdAt).toLocaleDateString('ja-JP', {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
        })}
      </time>
      <div className={styles.contents}>{parse(post.content)}</div>
      <div className={styles.linkButton}>
        <LinkButton title="Notes Jump to list" href="/notes" />
      </div>
    </section>
  );
}
