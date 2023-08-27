import styles from './index.module.scss';
import { getZennRssFeed } from '@/app/_libs/zenn/client';
import Image from 'next/image';

export const revalidate = 60;

export default async function staticPage() {
  const zennFeed = await getZennRssFeed();
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
                area-label={`${post.title}の記事へ`}
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
                  <time
                    className={styles.date}
                    dateTime={new Date(post.date).toLocaleDateString('ja-JP', {
                      year: 'numeric',
                      month: 'numeric',
                      day: 'numeric',
                    })}
                  >
                    {`${new Date(post.date).toLocaleDateString('ja-JP', {
                      year: 'numeric',
                      month: 'numeric',
                      day: 'numeric',
                    })}`}
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
