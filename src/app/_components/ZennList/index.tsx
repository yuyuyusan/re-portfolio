import styles from './index.module.scss';
import { getZennRssFeed } from '@/app/_libs/zenn/client';
import Image from 'next/image';

export const revalidate = 60;

export default async function staticPage() {
  const zennFeed = await getZennRssFeed();

  // 日付をフォーマットする
  const formatDate = (date: string) => {
    const now = new Date();
    const postDate = new Date(date);
    // 投稿日と現在日の差分を求める
    const timeDifference = now.getTime() - postDate.getTime();
    const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const monthsAgo = Math.floor(daysAgo / 30);
    const yearsAgo = Math.floor(daysAgo / 365);

    if (yearsAgo > 0) {
      return yearsAgo === 1 ? '1 year ago' : `${yearsAgo} years ago`;
    } else if (monthsAgo > 0) {
      return monthsAgo === 1 ? '1 month ago' : `${monthsAgo} months ago`;
    } else if (daysAgo > 0) {
      return daysAgo === 1 ? '1 day ago' : `${daysAgo} days ago`;
    } else {
      return 'Today';
    }
  };
  return (
    <>
      <div className={styles.zennBg}>
        <ul className={styles.list}>
          {zennFeed[0].return.pagePosts.map((post: any, index: any) => (
            <li key={index} className={styles.listItem}>
              <a
                href={post.slug}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${post.title}の記事へ`}
              >
                <figure className={styles.thumb}>
                  <Image
                    src={post.enclosure.url}
                    alt={post.title}
                    width={600}
                    height={315}
                    loading="eager"
                  />
                </figure>
                <div className={styles.inner}>
                  <h3 className={styles.title}>{post.title}</h3>
                  <time className={styles.date} dateTime={post.date}>
                    {formatDate(post.date)}
                  </time>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
