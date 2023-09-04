import styles from './index.module.scss';
import LinkButton from '@/app/_components/LinkButton';

export default async function staticPage() {
  return (
    <>
      <section className={`${styles.container}`}>
        <p className={styles.desc}>
          We are sorry, we could not find the page you were looking for.
          <br />
          The page you were looking for could not be found.
          <br />
          It may have been deleted or the URL you entered may be incorrect.
          <br />
          Please use the menu bar at the top of the page to find the page you
          are looking for.
        </p>{' '}
        <div className={styles.linkButton}>
          <LinkButton title="Return to Top" href="/" />
        </div>
      </section>
    </>
  );
}
