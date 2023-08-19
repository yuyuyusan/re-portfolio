import { notFound } from 'next/navigation';
import parse from 'html-react-parser';
import { getInfoDetail, getInfoList } from '@/app/_libs/microcms/client';
import styles from '../index.module.scss';
import LinkButton from '@/app/_components/LinkButton';

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
      <h2 className={styles.title}>{post.title}</h2>
      <time
        className={styles.date}
        dateTime={`${new Date(post.createdAt).toLocaleDateString()}`}
      >
        {new Date(post.createdAt).toLocaleDateString()}
      </time>
      <div className={styles.contents}>{parse(post.content)}</div>
      <div className={styles.linkButton}>
        <LinkButton title="Notes一覧へ" href="/notes" />
      </div>
    </section>
  );
}
