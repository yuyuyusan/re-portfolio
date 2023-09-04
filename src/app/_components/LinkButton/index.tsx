import Link from 'next/link';
import styles from './index.module.scss';

type props = {
  title: string;
  href: string;
};

export default function LinkButton({ title, href }: props) {
  return (
    <>
      <Link href={href} className={styles.linkButton__text} aria-label={`${title}のページへ`}>
        <span className={styles.jp}>{title}</span>
      </Link>
    </>
  );
}
