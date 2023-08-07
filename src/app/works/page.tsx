import { getWorksList } from '@/app/_libs/microcms/client';
import { WORKS_LIST_LIMIT } from '@/app/_constants';
import Pagination from '@/app/_components/Pagination';
import WorksList from '@/app/_components/WorksList';


export const revalidate = 60;

export default async function staticPage() {
  const data = await getWorksList({
    limit: WORKS_LIST_LIMIT,
  });
  return (
    <div className="max-w-5xl mx-auto">
      <WorksList articles={data.contents} />
      <Pagination
        totalCount={data.totalCount}
        basePath="/works"
      />
    </div>
  );
}
