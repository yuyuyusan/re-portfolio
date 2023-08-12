import Image from 'next/image';
import styles from './index.module.scss';

type Props = {
  title: string;
  sub: string;
};

export default function Hero({ title, sub }: Props) {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.contentsBody}>
        <h1 className={styles.title}>
          <span className={styles.main}>{title}</span>
        </h1>
      </div>
    </section>
  );
}
