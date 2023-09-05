import { notFound } from 'next/navigation';
import parse from 'html-react-parser';
import { getInfoDetail, getInfoList } from '@/app/_libs/microcms/client';
import LinkButton from '@/app/_components/LinkButton';
import GoodButton from '@/app/_components/GoodButton';
import styles from './index.module.scss';

export const revalidate = 60;
export async function generateStaticParams() {
  const { contents } = await getInfoList();
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
  const post = await getInfoDetail(postId);
  const time = new Date().toLocaleString();
  if (!post) {
    notFound();
  }
  return (
    <section className={`${styles.container} ${styles.blogDetail}`}>
      {(post.emoji && <span className={styles.emoji}>{post.emoji}</span>) || (
        <span className={styles.emoji}>😐</span>
      )}
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
      <div className={styles.goodButton}>
        <GoodButton article={post} />
      </div>
      <div className={styles.linkButton}>
        <LinkButton title="Notes一覧へ" href="/notes" />
      </div>
    </section>
  );
}
