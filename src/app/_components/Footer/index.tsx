import Link from 'next/link';
import styles from './index.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copy}>&copy; 2023 Yu</p>
        <p className={styles.navi}>
          <Link href="/privacy/" className={styles.link}>
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
}
