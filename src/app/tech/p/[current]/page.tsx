import { getTechList } from '@/app/_libs/microcms/client';
import { TECH_LIST_LIMIT } from '@/app/_constants';
import Pagination from '@/app/_components/Pagination';
import TechList from '@/app/_components/TechList';
import styles from '../../index.module.scss';

type Props = {
  params: {
    current: string;
  };
};
export const revalidate = 60;

export default async function Page({ params }: Props) {
  const current = parseInt(params.current as string, 10);
  const data = await getTechList({
    limit: TECH_LIST_LIMIT,
    offset: TECH_LIST_LIMIT * (current - 1),
  });
  return (
    <section className={styles.container}>
      <TechList articles={data.contents} />
      <Pagination
        totalCount={data.totalCount}
        current={current}
        basePath="/tech"
        limit={TECH_LIST_LIMIT}
      />
    </section>
  );
}
