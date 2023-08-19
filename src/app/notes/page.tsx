import InfoList from '../_components/BlogList';
import { getInfoList } from '../_libs/microcms/client';
import { BLOG_LIST_LIMIT } from '../_constants';
import Pagination from '../_components/Pagination';
import styles from './index.module.scss';

export const revalidate = 60;

export default async function staticPage() {
  const data = await getInfoList({
    limit: BLOG_LIST_LIMIT,
  });

  return (
    <>
      <section className={`${styles.container} ${styles.notes}`}>
        <InfoList articles={data.contents} />
        <Pagination
          totalCount={data.totalCount}
          basePath="/notes"
          limit={BLOG_LIST_LIMIT}
        />
      </section>
    </>
  );
}
