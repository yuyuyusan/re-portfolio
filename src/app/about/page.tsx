import Skills from '../_components/Skills';
import styles from './index.module.scss';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <section className={styles.about}>
        <figure className={styles.icon}>
          <Image src="/yu.jpg" alt="icon" width={200} height={200} />
        </figure>
        <div className={styles.profile}>
          <p className={styles.jp}>
            <span>
              2021年4月からWeb制作会社でコーダーとしてWeb業界でキャリアをスタートしました。
              当初から完全分業ですが、現職の業務では、UI/UX提案などデザイナーの業務も担当することもあります。
            </span>
            <span>
              私の強みは、自主性を持って行動ができ、新しいものやトレンドに興味があり知識欲が高いことです。
            </span>
            <span>
              大変なこともたくさんありますが、自己学習がずっとできていることからこれが、一番好きな仕事と感じ、ライフワークと思っています。
              今後は、UI/UXの領域も好きなこともあり、デザインができるUXエンジニアを目指して日々奮闘中です。
            </span>
          </p>
          <p className={styles.en}>
            <span>
              {`I started my career in the web industry as a coder in a web production company in April 2021. From the beginning, it has been a complete division of labor, but in my current position, I am also in charge of designers' work such as UI/UX proposals.`}
            </span>
            <span>
              {`My strengths are my ability to take initiative, my interest in new things and trends, and my thirst for knowledge.`}
            </span>
            <span>
              {`Although there are many hardships, I feel that this is the work I love the most and consider it my life's work because I am able to self-learn all the time. In the future, I also like the area of UI/UX, and I am struggling daily to become a UX engineer who can design.`}
            </span>
          </p>
        </div>
        <div className={styles.skills}>
          <Skills />
        </div>
      </section>
    </>
  );
}
