import Navigation from '@/app/_components/Navigation';
import styles from './index.module.scss';
import Link from 'next/link';
export default function Header() {
  return (
    <header className={styles.header}>
      <Navigation />
      <div className={styles.fixedMenu}>
        <Link className={styles.fixedMenu__link} href="/">
          TOP
        </Link>
      </div>
    </header>
  );
}
