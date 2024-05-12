import type { Metadata } from 'next';
import { getWorksList } from '@/app/_libs/microcms/client';
import { WORKS_LIST_LIMIT } from '@/app/_constants';
import Pagination from '@/app/_components/Pagination';
import WorksList from '@/app/_components/WorksList';
import styles from './index.module.scss';
import { Suspense } from 'react';
import CardSkeleton from '../_components/ui/skeletons';

export const metadata: Metadata = {
  title: 'WORKS 実績',
};
export default async function staticPage() {
  // スケルトン目視のため非同期処理に3秒の遅延を追加
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const data = await getWorksList({
    limit: WORKS_LIST_LIMIT,
  });
  return (
    <section className={styles.works}>
      <Suspense fallback={<CardSkeleton />}>
        <WorksList articles={data.contents} />
      </Suspense>
      <Pagination
        totalCount={data.totalCount}
        basePath="/works"
        limit={WORKS_LIST_LIMIT}
      />
    </section>
  );
}
