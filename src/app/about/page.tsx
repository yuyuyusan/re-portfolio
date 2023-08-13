import styles from './index.module.scss';

export default function About() {
  return (
    <>
      <section className={styles.about}>
        <p>
          <span className={styles.jp}>
            2021年4月から完全分業のWeb制作会社でコーダーとしてWeb業界でキャリアをスタートしました。
            現在は、UI/UX提案などデザイナーの業務も担当することもあります。
            今後は、デザインができるUXエンジニアを目指して日々奮闘中です。
            大変なこともたくさんありますが、自己学習がずっとできていることからこれが、一番好きな仕事と感じ、ライフワークと思っています。
            このサイトは、クリエイティブも意識しつつ、フロントエンドのスキルとユーザー体験をメインに作成したプロフィールサイトです。
          </span>
          <span className={styles.en}>
            {`I started my career in the web industry in April 2021 as a coder in
            a web production company with a complete division of labor.
            Currently, I am also in charge of UI/UX proposals and other designer
            tasks. In the future, I am striving every day to become a UX
            engineer who can also design. Although there are many hardships, I
            feel that this is the work I love the most and consider it my life's
            work because I am able to learn by myself all the time. This is a
            profile site created mainly for front-end skills and user
            experience, while also keeping creativity in mind.`}
          </span>
        </p>
      </section>
    </>
  );
}
