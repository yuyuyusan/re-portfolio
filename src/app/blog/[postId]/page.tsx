import { notFound } from 'next/navigation';
import parse from 'html-react-parser';
import { getInfoDetail, getInfoList } from '@/app/_libs/microcms/client';

// キャッシュを利用しない
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
  // ページの生成された時間を取得
  const time = new Date().toLocaleString();
  if (!post) {
    notFound();
  }
  return (
    <div className="max-w-5xl mx-auto">
      <h2>{post.title}</h2>
      <p>{new Date(post.createdAt).toLocaleDateString()}</p>
      <div>{parse(post.content)}</div>
    </div>
  );
}
