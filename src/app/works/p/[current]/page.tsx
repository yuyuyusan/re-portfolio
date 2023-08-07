import { getWorksList } from '@/app/_libs/microcms/client';
import { WORKS_LIST_LIMIT } from '@/app/_constants';
import Pagination from '@/app/_components/Pagination';
import WorksList from '@/app/_components/WorksList';

type Props = {
  params: {
    current: string;
  };
};
export const revalidate = 0;

export default async function Page({ params }: Props) {
  const current = parseInt(params.current as string, 10);
  const data = await getWorksList({
    limit: WORKS_LIST_LIMIT,
    offset: WORKS_LIST_LIMIT * (current - 1),
  });
  return (
    <div className="max-w-5xl mx-auto">
      <WorksList articles={data.contents} />
      <Pagination
        totalCount={data.totalCount}
        current={current}
        basePath="/works"
      />
    </div>
  );
}
