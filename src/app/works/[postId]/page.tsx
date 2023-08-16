import { notFound } from 'next/navigation';
import parse from 'html-react-parser';
import { getWorksDetail, getWorksList } from '@/app/_libs/microcms/client';
import Image from 'next/image';
import styles from './index.module.scss';
import { CSSProperties } from 'react';

// キャッシュを利用しない
export const revalidate = 60;

export async function generateStaticParams() {
  const { contents } = await getWorksList();
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
  const post = await getWorksDetail(postId);
  // ページの生成された時間を取得
  const time = new Date().toLocaleString();
  if (!post) {
    notFound();
  }
  return (
    <section className={styles.works}>
      <h2>{time}</h2>
      <h2 className={styles.title}>{post.title}</h2>
      <figure className={styles.thumbnail}>
        <a href={post.url} target="_blank" rel="noopener noreferrer">
          <Image
            src={post.image.url}
            alt=""
            width={post.image.width}
            height={post.image.height}
            className={styles.cat1}
            style={
              {
                viewTransitionName: `thumbnail-${post.id}`,
              } as CSSProperties
            }
          />
        </a>
      </figure>
      <p className={styles.date} suppressHydrationWarning={true}>
        作成日：{new Date(post.created).toLocaleDateString()}
      </p>
      <div className={styles.linkButton}>
        <a
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.url}
        >
          URL：{post.url}
        </a>
      </div>
      <p className={styles.pf}>PF:{post.platform}</p>
      {post.desc && <div>{parse(post.desc)}</div>}
    </section>
  );
}
