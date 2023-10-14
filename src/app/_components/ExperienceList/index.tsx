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
      '知識が0の状態で飛び込み環境構築などから始まりましたが、面接を数社受けるも不採用が続き挫折。',
    ],
  },
  {
    title: '職業訓練校 PC・スマホサイト デザイン科 入校',
    period: '2020/4 - 2020/9',
    description: [
      '再チャレンジを決意し、3ヶ月ほど自己学習をした後、入校。HTML/CSS/jQueryとデザインツールのPhotoshop/XDを用いたWebサイト制作の基礎を学習を半年間学習をしました。',
    ],
  },
  {
    title: 'Web制作会社 オペレーター',
    period: '2021/1 - 2021/2',
    description: [
      'Microsoft SharePointを使用した既存Webサイトの移行、更新業務を担当。',
    ],
  },
  {
    title: 'Web制作会社 コーダー→マークアップエンジニア',
    period: '2021/4 - 現在',
    description: [
      'ローコードCMS（WPのブロックテーマのようなCMS）のWebサイト制作がメイン業務です。その他、WordPress、LP制作。ローコード以外の制作の場合、HTML/CSS/JavaScript/PHPを使用したコーディング、詳細設計をしています。完全分業ですが、レスポンシブのモックアップが作成されないため、UI/UXの提案など、デザイナー業務も担当することもあります。',
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
              {career.description.map((desc, index) => (
                <p className={styles.descItem} key={index}>
                  {desc}
                </p>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
