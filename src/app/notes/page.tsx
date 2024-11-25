import type { Metadata } from 'next';
import { getInfoList } from '@/app/_libs/microcms/client';
import { BLOG_LIST_LIMIT } from '@/app/_constants';
import Pagination from '@/app/_components/Pagination';
import InfoList from '@/app/_components/BlogList';
import ZennList from '@/app/_components/ZennList';
import TabToggle from '@/app/_components/TabToggle';
import styles from './index.module.scss';

export const revalidate = 86400;
export const metadata: Metadata = {
  title: 'NOTES 雑記',
};
const initialData = <ZennList />;

export default async function staticPage() {
  const data = await getInfoList({
    limit: BLOG_LIST_LIMIT,
  });

  return (
    <>
      <section className={`${styles.container} ${styles.notes}`}>
        <TabToggle
          openText="Zenn Jump to list"
          closeText="Tweet Jump to list"
          initialData={initialData}
        >
          <InfoList articles={data.contents} />
          <Pagination
            totalCount={data.totalCount}
            basePath="/notes"
            limit={BLOG_LIST_LIMIT}
          />
        </TabToggle>
      </section>
    </>
  );
}
