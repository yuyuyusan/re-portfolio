'use client';
import { useState } from 'react';
import styles from './index.module.scss';
import ModalComponent from '@/app/_components/ModalComp';

type Skills = {
  name: string;
  level: number;
  desc?: string | undefined;
};
type SkillListProps = {
  skills: Skills[];
  title: string;
};

const languageSkills: Skills[] = [
  {
    name: 'HTML/SCSS',
    level: 5,
    desc: '構造化を意識し、アクセシビリティに配慮したセマンティックなHTMLが書けます。cssはモジュール化していない構成の場合は、BEM設計を採用しています。また、最新のCSSのキャッチアップは怠らずFirefoxまで対応したものから採用しています。変更に強いマークアップを意識しています。',
  },
  {
    name: 'JavaScript',
    level: 4,
    desc: '基本的な操作は問題なくできます。また、ES6以降の文法を使用しています。',
  },
  {
    name: 'TypeScript',
    level: 2,
    desc: '現在、メインで学習していて、フレームワークを使用しない場合は、Webpackで環境を構築し、TypeScriptで開発しています。',
  },
  {
    name: 'React/Next',
    level: 3,
    desc: 'Next13を使用しVercelと平行して使用することを前提に今はメインで学習しています。ヘッドレスCMSを使用したサイト制作では、レンダリングをSSG,ISRの実装をしています。また、Reactのみでの個人開発経験があります。全てではないですが、React hooksや、Reactのライブラリなどの構築は可能です。',
    },
  {
    name: 'Vue/Nuxt',
    level: 2,
    desc: 'Vue2,Nuxt2のみ実装経験があります。',
  },
  {
    name: 'Astro',
    level: 3,
    desc: 'Nextともう一つの選択肢として使用しています。現在、Astroを利用したSSGのサイト構築も可能です。WordPressのAPIを使用したサイト構築も可能です。',
  },
  {
    name: 'PHP',
    level: 3,
    desc: 'お問い合わせ、検索などの処理は業務で経験があり、基本的な処理は問題なく実装できます。また、WordPressの関数も使用できます。',
  },
  {
    name: 'Liquid',
    level: 3,
    desc: '新規ファイル作成、入力項目、カート機能のカスタマイズ、APIの取得などができます。',
  },
  {
    name: 'Node/Express/EJS',
    level: 2,
    desc: 'Expressを使用したサーバーサイドの開発経験があります。また、Firebaseを使用したサーバーレスの開発経験もあります。Expressを認証・認可の構築で利用経験があります。',
  },
];
const softSkills: Skills[] = [
  {
    name: 'GitHub',
    level: 3,
    desc: 'チーム開発経験はありませんが、コンフリクト対策、org、merge、branchなどの基本的な操作は問題なくできます。また、業務ではGitHubのActionsを使用したCI/CDを利用しています。これまでチーム開発経験がなかったためmain branchを今まで使用していましたが、現在はmain branchを使用せず、develop branchを使用しています。',
  },
  {
    name: 'Webpack',
    level: 3,
    desc: 'TypeScript、WordPressを使用するときの環境構築を行っています。',
  },
  {
    name: 'Vite',
    level: 3,
    desc: 'Handlebarsを作成しWebサイトの構築ができます。',
  },
  {
    name: 'Vercel',
    level: 3,
    desc: 'ISRが利用できるためNext同時に学習しています。進化のスピードも早いため、サーバーサイドはVercelで学習しています。',
  },
  {
    name: 'Firebase',
    level: 3,
    desc: '基本的な操作は問題なくできます。Googleアナリティクス、Googleタグマネージャー、の設定も可能です。',
  },
  {
    name: 'MongoDB',
    level: 2,
    desc: 'NoSQLとして、学習しています。データベースのCRUD操作をWeb上で実装できます。',
  },
  {
    name: 'MySQL',
    level: 1,
    desc: 'phpmyadminを使用したCRUD操作ができます。',
  },
];
const toolSkills: Skills[] = [
  {
    name: 'WordPress',
    level: 5,
    desc: 'オリジナルテーマの作成ができます。基本的にプラグインはあまり使用しない方向で制作を心がけ、functionsを設定して制作しています。タクソノミー毎のOGP設定なども可能です。また、WordPressのAPIを使用したサイト構築も可能です。',
  },
  {
    name: 'OWLet',
    level: 5,
    desc: 'ほぼすべての機能を使用できます。また、カスタマイズも可能です。',
  },
  {
    name: 'MicroCMS',
    level: 3,
    desc: 'メインのヘッドレスCMSで、利用しています。Next,AstroでのWebサイトの作成ができ、SSGのページネーションや、カスタムフィールドの作成も可能です。',
  },
  {
    name: 'Shopify',
    level: 3,
    desc: 'テンプレートをカスタマイズすることができます。カート機能のカスタマイズ、配送先、お届け日時のカスタマイズ、Eコーマスの基本的な設定ができます。',
  },
  {
    name: 'Figma',
    level: 3,
    desc: '現在個人的にメインで、使用しているツールです。オートレイアウトや、状態を使用したり、プロトタイプの作成は可能ですが、まだまだ勉強中です。現在個人サイトのモックアップ作成をしています。',
  },
  {
    name: 'XD',
    level: 3,
    desc: '業務で利用しているので、使用できます。スマホのみモックアップ作成の実務経験があります。',
  },
  {
    name: 'Photoshop',
    level: 3,
    desc: '基本的な画像の加工、修正、作成ができます。ファビコン、OGP、ロゴの作成の実務経験があります。',
  },
  {
    name: 'Illustrator',
    level: 2,
    desc: '基本的な操作ができます。ベクター、色の調整、画像の加工ができます。',
  },
];

function SkillCircle({ num }: { num: number }) {
  const getGradientStyle = (level: number) => {
    const gradientStart = 0;
    const gradientEnd = (level / 5) * 100;
    return {
      backgroundImage: `conic-gradient(#3667a0 ${gradientStart}% ${gradientEnd}%, #d2d2d2 ${gradientEnd}% 100%)`,
    };
  };
  let levelText;
  if (num * 20 >= 80) {
    levelText = '上級';
  } else if (num * 20 >= 41) {
    levelText = '中級';
  } else {
    levelText = '初級';
  }
  return (
    <div className={styles.skill__circle} style={getGradientStyle(num)}>
      <span className={styles.num}>{levelText}</span>
    </div>
  );
}

function SkillList({ skills, title }: SkillListProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<Skills | null>(null);

  const clickSkill = (skill: Skills) => {
    setSelectedSkill(skill);
    setIsOpen(true);
  };

  const closeSkillModal = () => {
    setSelectedSkill(null);
    setIsOpen(false);
  };

  return (
    <div className={styles.skillBox}>
      <h2 className={styles.skillTitle}>{title}</h2>
      <ul className={styles.skillList}>
        {skills.map((skill, index) => (
          <>
            <li
              className={styles.skillItem}
              key={index}
              onClick={() => clickSkill(skill)}
            >
              <div className={styles.skill__name}>{skill.name}</div>
              <SkillCircle num={skill.level} />
            </li>
            {isOpen && selectedSkill && (
              <ModalComponent
                modalDesc={selectedSkill.desc || ''}
                onClose={closeSkillModal}
              />
            )}{' '}
          </>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  return (
    <>
      <SkillList skills={languageSkills} title="Language Skill" />
      <SkillList skills={softSkills} title="Soft Skill" />
      <SkillList skills={toolSkills} title="Tool Skill" />
    </>
  );
}
