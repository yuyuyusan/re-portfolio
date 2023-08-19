import { getInfoList } from '@/app/_libs/microcms/client';
import { BLOG_LIST_LIMIT } from '@/app/_constants';
import Pagination from '@/app/_components/Pagination';
import BlogList from '@/app/_components/BlogList';
import styles from '../../index.module.scss';

type Props = {
  params: {
    current: string;
  };
};
export const revalidate = 60;

export default async function Page({ params }: Props) {
  const current = parseInt(params.current as string, 10);
  const data = await getInfoList({
    limit: BLOG_LIST_LIMIT,
    offset: BLOG_LIST_LIMIT * (current - 1),
  });
  return (
    <section className={styles.container}>
      <BlogList articles={data.contents} />
      <Pagination
        totalCount={data.totalCount}
        current={current}
        basePath="/notes"
        limit={BLOG_LIST_LIMIT}
      />
    </section>
  );
}