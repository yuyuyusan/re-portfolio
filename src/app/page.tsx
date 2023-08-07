import Image from 'next/image';
import Header from '@/app/_components/Header';
import Footer from '@/app/_components/Footer';
import styles from './home.module.css';

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto my-32">
      <Header />

      <div className={styles.container}>
        <div className={`${styles.box} ${styles.box1}`}>
          <a href="/works">Works</a>
        </div>
        <div className={`${styles.box} ${styles.box2}`}>
          <a href="/skill">Skill</a>
        </div>
        <div className={`${styles.box} ${styles.box3}`}>
          <a href="/blog">Blog</a>
        </div>
        <div className={`${styles.box} ${styles.box4}`}>
          <a href="/blog" target='_blank' rel="norefferer noopenner">Blog</a>
        </div>
        <div className={`${styles.box} ${styles.box5}`}>
          <a href="/blog" target='_blank' rel="norefferer noopenner">Blog</a>
        </div>
        <div className={`${styles.box} ${styles.box6}`}>
          <a href="/blog" target='_blank' rel="norefferer noopenner">Blog</a>
        </div>
      </div>
      <Footer />
    </main>
  );
}
