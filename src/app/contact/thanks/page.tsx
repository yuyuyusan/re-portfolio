import LinkButton from '@/app/_components/LinkButton';
import styles from './index.module.scss';

export default function StaticPage() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Thanks!!!</h2>
      <p className={styles.desc}>
        Thank you for your inquiry.
        <br />
        We appreciate your interest and will respond to your inquiry shortly.
      </p>
      <div className={styles.linkButton}>
        <LinkButton title="Return to Top" href="/" />
      </div>
    </section>
  );
}
