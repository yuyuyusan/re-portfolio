import Image from 'next/image';
import Header from '@/app/_components/Header';
import Footer from '@/app/_components/Footer';
import styles from './home.module.scss';

export default function Home() {
  return (
    <main className={`py-32 ${styles.homeMain}`}>
      <Header />
      <div className={`max-w-2xl mx-auto ${styles.container}`}>
        <div className={`${styles.box} ${styles.box01}`}>
          <a href="/works">
            <span>Works</span>
            <Image src="/icon-works.svg" width={120} height={120} alt="" />
          </a>
        </div>
        <div className={`${styles.box} ${styles.box02}`}>
          <a href="/skill">
            <span>Skill</span>
            <Image src="/icon-skills.svg" width={120} height={120} alt="" />
          </a>
        </div>
        <div className={`${styles.box} ${styles.box03}`}>
          <a href="/blog">
            <span>Notes</span>
            <Image src="/icon-notes.svg" width={120} height={120} alt="" />
          </a>
        </div>
        <div className={`${styles.box} ${styles.box04}`}>
          <a
            href="https://github.com/yuyuyusan/"
            target="_blank"
            rel="norefferer noopenner"
          >
            <span className={styles.jp}>Github</span>
            <Image src="/icon-github.svg" width={60} height={60} alt="" />
          </a>
        </div>
        <div className={`${styles.box} ${styles.box05}`}>
          <a
            href="https://zenn.dev/yuyuyusan"
            target="_blank"
            rel="norefferer noopenner"
          >
            <span className={styles.jp}>Zenn</span>
            <Image src="/icon-zenn.svg" width={100} height={60} alt="" />
          </a>
        </div>
        <div className={`${styles.box} ${styles.box06}`}>
          <a href="/contact">
            <span className={styles.jp}>
              Contact
              <br />
              Form
            </span>
          </a>
        </div>
        <div className={`${styles.box} ${styles.box07}`}>
          <a
            href="https://ys-portfolio-c98fe.web.app/"
            target="_blank"
            rel="norefferer noopenner"
          >
            <span className={styles.jp}>
              Previous
              <br />
              Site
            </span>
          </a>
        </div>
      </div>
      <Footer />
    </main>
  );
}
