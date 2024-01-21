import { getWorksList } from '@/app/_libs/microcms/client';
import { WORKS_LIST_LIMIT } from '@/app/_constants';
import Pagination from '@/app/_components/Pagination';
import WorksList from '@/app/_components/WorksList';
import styles from '@/app/works/index.module.scss';

// ページのpropsの型定義
type Props = {
  params: {
    current: string;
  };
};
// ページの再生成時間
export const revalidate = 60;

export default async function Page({ params }: Props) {
  const current = parseInt(params.current as string, 10);
  const data = await getWorksList({
    limit: WORKS_LIST_LIMIT,
    offset: WORKS_LIST_LIMIT * (current - 1),
  });
  return (
    <section className={styles.works}>
      <WorksList articles={data.contents} />
      <Pagination
        totalCount={data.totalCount}
        current={current}
        basePath="/works"
        limit={WORKS_LIST_LIMIT}
      />
    </section>
  );
}
