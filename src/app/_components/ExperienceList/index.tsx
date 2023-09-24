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
      'HTML/CSS/JavaScript/PHPを使用したコーディングをメインに行っています。現在は。UI/UXの提案やデザインの修正などの業務も担当することがあります。',
      'PHPのSmartyで開発されたローコードCMSのWebサイト制作が主な業務になります。WordPress、LP制作も行っています。',
      'FTP廃止、Figma導入、タスク管理ツールの導入、知識の共有などのチーム業務改善を行いました。',
      'デザイナーなど全員退職し、現在は自分とディレクターでの業務になります。',
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
