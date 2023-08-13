import Link from 'next/link';
import styles from './not-found.module.scss';
import Hero from './_components/Hero';
export default function NotFound() {
  return (
    <>
      <Hero title="404" sub="エラーページ" />
      <section className={styles.errorPage}>
        <h2 className={styles.title}>Not Found</h2>
        <p className={styles.desc}>
          The page you are looking for cannot be found.
          <br />
          is temporarily inaccessible, or It may have been moved or deleted.
          <br />
          Please return to the top page with the button below.
        </p>
        <Link href="/" className={styles.returnButton}>
          Return Home
        </Link>
      </section>
    </>
  );
}
