import type { Metadata } from 'next';
import { getWorksList } from '@/app/_libs/microcms/client';
import { WORKS_LIST_LIMIT } from '@/app/_constants';
import Pagination from '@/app/_components/Pagination';
import WorksList from '@/app/_components/WorksList';
import styles from './index.module.scss';

export const revalidate = 60;
export const metadata: Metadata = {
  title: 'WORKS 実績',
};

export default async function staticPage() {
  const data = await getWorksList({
    limit: WORKS_LIST_LIMIT,
  });
  return (
    <section className={styles.works}>
      <WorksList articles={data.contents} />
      <Pagination
        totalCount={data.totalCount}
        basePath="/works"
        limit={WORKS_LIST_LIMIT}
      />
    </section>
  );
}
