import { notFound } from 'next/navigation';
import parse from 'html-react-parser';
import { getWorksDetail, getWorksList } from '@/app/_libs/microcms/client';
import Image from 'next/image';
import Link from 'next/link';
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
    <div className="max-w-5xl mx-auto">
      <h2>{time}</h2>
      <h1>{post.title}</h1>
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
      <p className="text-xl" suppressHydrationWarning={true}>
        作成日：{new Date(post.created).toLocaleDateString()}
      </p>
      <a
        href={post.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs"
      >
        {post.url}
      </a>
      <p>PF:{post.platform}</p>
      {post.desc && <div>{parse(post.desc)}</div>}
    </div>
  );
}
