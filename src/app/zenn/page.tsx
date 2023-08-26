import ZennList from '@/app/_components/ZennList';
import styles from './index.module.scss';
export const revalidate = 60;

export default async function staticPage() {
  return (
    <div className={styles.zennContainer}>
      <ul className={styles.list}>
        <ZennList />
      </ul>
      <div className={styles.linkButton}>
        <a
          href="https://zenn.dev/yuyuyusan"
          target="_blank"
          rel="norefferer noopenner"
          className={styles.link}
          aria-label="Zennへ"
        >
          Zennへ
        </a>
      </div>
    </div>
  );
}
