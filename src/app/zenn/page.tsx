import styles from './index.module.scss';
import ZennList from '../_components/ZennList';
export const revalidate = 60;

export default async function staticPage() {
  return (
    <>
      <section className={`${styles.container} ${styles.zenn}`}>
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
      </section>
    </>
  );
}
