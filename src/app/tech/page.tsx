import type { Metadata } from 'next';
import { getTechList } from '@/app/_libs/microcms/client';
import { TECH_LIST_LIMIT } from '@/app/_constants';
import Pagination from '@/app/_components/Pagination';
import styles from './index.module.scss';
import TechList from '@/app/_components/TechList';
export const revalidate = 10;
export const metadata: Metadata = {
  title: 'TECH',
};

export default async function staticPage() {
  const data = await getTechList({
    limit: TECH_LIST_LIMIT,
  });

  return (
    <>
      <section className={`${styles.container} ${styles.notes}`}>
        <TechList articles={data.contents} />
        <Pagination
          totalCount={data.totalCount}
          basePath="/tech"
          limit={TECH_LIST_LIMIT}
        />
      </section>
    </>
  );
}
