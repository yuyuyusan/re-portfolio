import parse from 'html-react-parser';
import { getWorksDetail, getWorksList } from '@/app/_libs/microcms/client';
import Image from 'next/image';
import styles from './index.module.scss';
import { CSSProperties } from 'react';
import LinkButton from '@/app/_components/LinkButton';
import IconCalendar from '@/app/_components/icons/calendar.svg';
import IconLink from '@/app/_components/icons/link.svg';
import IconPlat from '@/app/_components/icons/plat.svg';

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
    <section className={styles.works}>
      <div className={styles.contentsBody}>
        <h2 className={styles.title}>{post.title}</h2>
        <figure className={styles.thumbnail}>
          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${post.title}のページへ`}
          >
            {(post.mockup && (
              <Image
                src={post.mockup.url}
                alt={post.title}
                width={post.mockup.width}
                height={post.mockup.height}
                className={styles.mockupImg}
              />
            )) || (
              <Image
                src={post.image.url}
                alt={post.title}
                width={post.image.width}
                height={post.image.height}
                className={styles.mockupImg}
              />
            )}
          </a>
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
            {' '}
            <div className={styles.commonIcon}>
              <IconPlat title="IconPlat" className={styles.iconImg} />
            </div>
            {post.platform}
          </p>
          <div className={styles.tagList}>
            {post.stack.map((tag) => (
              <span key={tag} className={styles.tagListItem}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        {/* <figure className={styles.mockup}>
          {(post.mockup && (
            <Image
              src={post.mockup.url}
              alt={post.title}
              width={post.mockup.width}
              height={post.mockup.height}
              className={styles.mockupImg}
            />
          )) || (
            <Image
              src={post.image.url}
              alt={post.title}
              width={post.image.width}
              height={post.image.height}
              className={styles.mockupImg}
            />
          )}
        </figure> */}
        {post.desc && <div className={styles.detail}>{parse(post.desc)}</div>}
        <div className={styles.linkButton}>
          <LinkButton href="/works" title="一覧へ戻る" />
        </div>
      </div>
    </section>
  );
}
