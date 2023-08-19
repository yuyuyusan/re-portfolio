import styles from './index.module.scss';
import LinkButton from '@/app/_components/LinkButton';
export const revalidate = 60;

export default async function staticPage() {
  return (
    <>
      <section className={`${styles.container}`}>
        <p className={styles.desc}>in preparation. Please wait.</p>
        <div className={styles.linkButton}>
          <LinkButton title="Return" href="/" />
        </div>
      </section>
    </>
  );
}
