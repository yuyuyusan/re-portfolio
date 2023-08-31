import styles from './index.module.scss';

const career = [
  {
    title: '職業訓練校 PC・スマホサイト デザイン科 入稿',
    period: '2020/4 - 2020/9',
    description: [
      'HTML/CSS/jQueryとデザインツールのPhotoshop/XDを用いたWebサイト制作の基礎を学習をしました。',
    ],
  },
  {
    title: 'Web制作会社 オペレーター',
    period: '2021/1 - 2021/2',
    description: [
      '既存WebサイトをMicrosoft SherePointを用いて移行、更新の業務を行いました。',
    ],
  },
  {
    title: 'Web制作会社 コーダー→マークアップエンジニア',
    period: '2021/4 - 現在',
    description: [
      'HTML/CSS/JavaScript/PHPを使用したコーディングをメインに行っています。現在は。UI/UXの提案やデザインの修正などの業務も担当することがあります。',
      'PHPのSmartyで開発されたローコードCMSのWebサイト制作が主な業務になります。WordPress、LP制作も行っており、LP制作はAstroをメインで使用しています。',
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
                    <span className={styles.descText}>
                      {desc}
                    </span>
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
