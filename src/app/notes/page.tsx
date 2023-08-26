import InfoList from '@/app/_components/BlogList';
import { getInfoList } from '@/app/_libs/microcms/client';
import { BLOG_LIST_LIMIT } from '@/app/_constants';
import Pagination from '@/app/_components/Pagination';
import ZennList from '@/app/_components/ZennList';
import TabToggle from '@/app/_components/TabToggle';
import styles from './index.module.scss';

export const revalidate = 60;
const initialData = (
  <>
    <ZennList />
  </>
);

export default async function staticPage() {
  const data = await getInfoList({
    limit: BLOG_LIST_LIMIT,
  });

  return (
    <>
      <section className={`${styles.container} ${styles.notes}`}>
        <TabToggle
          openText="MicroCMSの記事一覧へ"
          closeText="Zennの記事一覧へ"
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
