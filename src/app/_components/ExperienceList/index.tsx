import styles from './index.module.scss';

type CareerFlow = {
  title: string;
  period: string;
  description: string[];
};

const career: CareerFlow[] = [
  {
    title: '無償インターンでPHPを学習',
    period: '2016/7 - 2016/8 短期インターン',
    description: [
      '知識が0の状態で飛び込み環境構築などから始まりましたが、不採用で挫折。',
    ],
  },
  {
    title: '職業訓練校 PC・スマホサイト デザイン科 入校',
    period: '2020/4 - 2020/9',
    description: [
      '再チャレンジを決意し、3ヶ月ほど自己学習をした後、入校。HTML/CSS/jQueryとデザインツールのPhotoshop/XDを用いたWebサイト制作の基礎を学習をしました。',
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
      'HTML/CSS/JavaScript/PHPを使用したコーディング、詳細設計をメインに行っています。完全分業ですが、レスポンシブのモックアップがないため、UI/UXの提案など、デザイナー業務も担当することもあります。',
      'ローコードCMS（WPのブロックテーマのようなCMS）のWebサイト制作が主な業務になります。その他、WordPress、LP制作になります。',
      '社内では、FTP廃止、Git Figma タスク管理ツールの導入、Web知識についての教育、制作プランの提案、制作ルール策定など制作業務の効率化、改善も行っています。',
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
