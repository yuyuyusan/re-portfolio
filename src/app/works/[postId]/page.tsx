import parse from 'html-react-parser';
import { getWorksDetail, getWorksList } from '@/app/_libs/microcms/client';
import Image from 'next/image';
import styles from './index.module.scss';
import LinkButton from '@/app/_components/LinkButton';
import IconCalendar from '@/app/_components/Icons/calendar.svg';
import IconLink from '@/app/_components/Icons/link.svg';
import IconPlat from '@/app/_components/Icons/plat.svg';
import IconCode from '@/app/_components/Icons/code.svg';

export const revalidate = 60;

export async function generateStaticParams() {
  const { contents } = await getWorksList();
  const paths = contents.map((post) => {
    return {
      postId: post.id,
    };
  });
  return [...paths];
}
export default async function StaticDetailPage({
  params: { postId },
}: {
  params: { postId: string };
}) {
  const post = await getWorksDetail(postId);
  return (
    <>
      <section className={styles.works}>
        <div className={styles.contentsBody}>
          <h2 className={styles.title}>{post.title}</h2>
          <figure className={styles.thumbnail}>
            {(post.mockup && (
              <Image
                src={post.mockup.url}
                alt={post.title}
                width={post.mockup.width}
                height={post.mockup.height}
                className={styles.thumbnailImg}
              />
            )) || (
              <Image
                src={post.image.url}
                alt={post.title}
                width={post.image.width}
                height={post.image.height}
                className={styles.thumbnailImg}
              />
            )}
          </figure>
          <div className={styles.info}>
            <time
              dateTime={`${new Date(post.created).toLocaleDateString('ja-JP', {
                year: 'numeric',
                month: 'numeric',
              })}`}
              className={styles.date}
              suppressHydrationWarning={true}
            >
              <div className={styles.commonIcon}>
                <IconCalendar title="IconCalendar" className={styles.iconImg} />
              </div>
              リリース日：
              {new Date(post.created).toLocaleDateString('ja-JP', {
                year: 'numeric',
                month: 'numeric',
              })}
            </time>
            {post.url && (
              <div className={styles.linkText}>
                <div className={styles.commonIcon}>
                  <IconLink title="IconLink" className={styles.iconImg} />
                </div>
                <a
                  href={post.url}
                  className={styles.url}
                  aria-label={`${post.title}のページへ`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {post.url}
                </a>
              </div>
            )}
            <p className={styles.pf}>
              <IconPlat title="IconPlat" className={styles.iconImg} />
              分類：
              {post.platform}
            </p>
            <div className={styles.stackBox}>
              <p className={styles.stack}>
                <IconCode title="IconCode" className={styles.iconImg} />
                使用技術
              </p>
              <div className={styles.tagList}>
                {post.stack.map((tag) => (
                  <span key={tag} className={styles.tagListItem}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {post.desc && <div className={styles.detail}>{parse(post.desc)}</div>}
          {post.url && (
            <div className={styles.linkButton}>
              <a
                href={post.url}
                className={styles.url}
                aria-label={`${post.title}のページへ`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.jp}>View Website</span>
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
