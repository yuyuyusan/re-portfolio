import styles from './index.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copy}>&copy; 2023 Yu</p>
      </div>
    </footer>
  );
}
