import InfoList from '../_components/BlogList';
import { getInfoList } from '../_libs/microcms/client';
import { BLOG_LIST_LIMIT } from '../_constants';
import Pagination from '../_components/Pagination';
export const revalidate = 60;

export default async function staticPage() {
  const data = await getInfoList({
    limit: BLOG_LIST_LIMIT,
  });
  return (
    <div className="max-w-5xl mx-auto">
      <InfoList articles={data.contents} />
      <Pagination
        totalCount={data.totalCount}
        basePath="/blog"
      />
    </div>
  );
}
