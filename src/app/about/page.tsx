import type { Metadata } from 'next';
import ExperienceList from '@/app/_components/ExperienceList';
import Skills from '@/app/_components/Skills';
import styles from './index.module.scss';
import Wakatime from '@/app/_components/Wakatime';

export const metadata: Metadata = {
  title: 'ABOUT 自己紹介',
};
export default function About() {
  return (
    <>
      <section className={`${styles.about} ${styles.aboutSkill}`}>
        <div className={styles.profile}>
          <dl className={styles.def}>
            <div className={styles.defInner}>
              <dt className={styles.defTitle}>About Me</dt>
              <dd className={`${styles.defDesc} ${styles.jp}`}>
                2021年4月から、Web制作会社でコーダーとしてWeb業界でのキャリアをスタートしました。
                <br />
                私の強みは自主性を持って行動できることと、自己解決能力があることです。
                <br />
                新しいものやトレンドのキャッチアップは怠らず、成長意欲が高いため、自己学習を続けることができています。
                <br />
                現在はUI/UXの分野にも興味を抱き、同時に学習を進めています。そして、教育ができるUXエンジニアを目指しています。
              </dd>
              {/* <dd className={`${styles.defDesc} ${styles.en}`}>
                {`I started my career in the web industry as a coder in a web
                production company in April 2021.
                <br />
                Although it is a complete division of labor, I am currently also
                in charge of designers' tasks such as UI/UX proposals.
                <br />
                My strengths are that I can take initiative, am interested in
                new things and trends, and have a high appetite for knowledge. I
                have a lot of hard work, but I am able to self-learn all the
                time.
                <br /> For this reason, I consider this to be my favorite job
                and my life's work. In the future, I will be learning UI/UX
                areas in parallel, and I am struggling every day to become a UX
                engineer who can educate others.`}
              </dd> */}
            </div>
            {/* <div className={styles.defInner}>
              <dt className={styles.defTitle}>行動指針</dt>
              <dd className={styles.defDesc}>
                1やるなら2やる
                <br />
                誰かのためになることをする
              </dd>
            </div>
            <div className={styles.defInner}>
              <dt className={styles.defTitle}>好きな言葉</dt>
              <dd className={styles.defDesc}>
                これは誰の足だ？俺の足だ。誰の意志で動く？俺の意志だ。走らされるな
                <span className={styles.quote}>[あひるの空 (日向武史)]</span>
                <br />
                なろうと思ってなれるものじゃない、だがなろうと思わなければなれない
                <span className={styles.quote}>[恋物語 (西尾維新)]</span>
              </dd>
            </div> */}
          </dl>
        </div>
        <div className={styles.skills}>
          <Skills />
          <p className={styles.skillsNotes}>
            スキルの目安は、「初級:開発をしているが使用しているがもう少し習熟が必要」、「中級:実務で使用できる」、「上級:応用・教育ができる」です。
          </p>
        </div>
      </section>
      <section className={`${styles.about} ${styles.aboutExperience}`}>
        <h2 className={styles.title}>Experience</h2>
        <ExperienceList />
      </section>
    </>
  );
}
