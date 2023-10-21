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
                強みは自主性を持って行動できることと、自己解決能力があることです。
                <br />
                新しいものやトレンドのキャッチアップは怠らず、成長意欲が高いため、自己学習を続けることができ、ライフワークとして考えています。
                <br />
                現在は、UI/UXの分野にも興味を抱き、同時に学習を進めています。そして、教育ができるUXエンジニアを目指しています。
                <br />
                BtoC向けが得意と現時点では思っています。
              </dd>
            </div>
          </dl>
        </div>
        <div className={styles.skills}>
          <Skills />
          <p className={styles.skillsNotes}>
            スキルの目安
            <br />
            「初級:個人で使用しているがもう少し習熟が必要」
            <br />
            「中級:実務で使用できる」
            <br />
            「上級:応用・教育ができる」
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
