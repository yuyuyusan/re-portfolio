import Link from 'next/link';
import styles from './not-found.module.scss';
import Hero from './_components/Hero';
import Header from './_components/Header';
import Footer from './_components/Footer';
import LinkButton from './_components/LinkButton';
export default function NotFound() {
  return (
    <>
      <Header />
      <Hero title="404 Not Found" sub="エラーページ" />
      <section className={styles.errorPage}>
        <p className={styles.desc}>
          The page you are looking for cannot be found.
          <br />
          is temporarily inaccessible, or It may have been moved or deleted.
          <br />
          Please return to the top page with the button below.
        </p>
        <div className={styles.linkButton}>
          <LinkButton title="Return" href="/" />
        </div>
      </section>
      <Footer />
    </>
  );
}
