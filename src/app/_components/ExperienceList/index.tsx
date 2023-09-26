import styles from './index.module.scss';

type CareerFlow = {
  title: string;
  period: string;
  description: string[];
}

const career: CareerFlow[] = [
  {
    title: '職業訓練校 PC・スマホサイト デザイン科 入校',
    period: '2020/4 - 2020/9',
    description: [
      'HTML/CSS/jQueryとデザインツールのPhotoshop/XDを用いたWebサイト制作の基礎を学習をしました。',
    ],
  },
  {
    title: 'Web制作会社 オペレーター',
    period: '2021/1 - 2021/2',
    description: [
      '既存WebサイトをMicrosoft SharePointを用いて移行、更新の業務を行いました。',
    ],
  },
  {
    title: 'Web制作会社 コーダー→マークアップエンジニア',
    period: '2021/4 - 現在',
    description: [
      'HTML/CSS/JavaScript/PHPを使用したコーディングをメインに行っています。完全分業ですが、レスポンシブのモックアップがないため、UI/UXの提案など、デザイナー業務も担当することもあります。',
      'ローコードCMS（WPのブロックテーマ作成のようなCMS）のWebサイト制作が主な業務になります。その他、WordPress、LP制作になります。',
      'FTP廃止、Figma導入、タスク管理ツールの導入、知識の共有、制作ルール策定などチーム業務改善を行っています。',
    ],
  },
];

export default function ExperienceList() {
  return (
    <>
      <ul className={styles.list}>
        {career.map((career, index) => (
          <li className={styles.listItem} key={index}>
            <div className={styles.listItem__inner}>
              <h3 className={styles.title}>{career.title}</h3>
              <p className={styles.period}>{career.period}</p>
              <ul className={styles.desc}>
                {career.description.map((desc, index) => (
                  <li className={styles.descItem} key={index}>
                    <span className={styles.descText}>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
