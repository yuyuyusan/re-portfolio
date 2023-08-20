import styles from './index.module.scss';

const career = [
  {
    title: '職業訓練校 PC・スマホサイト デザイン科 入稿',
    period: '2020/4 - 2020/9',
    description: [
      '主にHTML/CSS/jQueryとデザインツールのPhotoshop/XDを用いたWebサイト制作を勉強しました。',
    ],
  },
  {
    title: 'オペレーター',
    period: '2021/1 - 2021/2',
    description: [
      '既存WebサイトをMicrosoft SherePointを用いて移行更新の業務をしました。',
    ],
  },
  {
    title: 'コーダー→マークアップエンジニア',
    period: '2021/4 - 現在',
    description: [
      'コーダーとして、主にHTML/CSS/JavaScriptを用いたコーディングを行っています。',
      'また、UI/UXの提案やデザインの修正などデザイナーの業務も担当しています。',
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
