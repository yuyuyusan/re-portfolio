import styles from './index.module.scss';
import { getZennRssFeed } from '@/app/_libs/zenn/client';
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
              >
                <img
                  src={post.enclosure.url}
                  alt={post.title}
                  width={600}
                  height={315}
                />
                {/* <h3 className={styles.title}>{post.title}</h3>
              <time className={styles.date} dateTime={post.date}>
              {post.date}
            </time> */}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
