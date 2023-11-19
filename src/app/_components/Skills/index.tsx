'use client';
import { useState } from 'react';
import styles from './index.module.scss';
import ModalComponent from '@/app/_components/ModalComp';

// スキルの型定義
type Skills = {
  name: string;
  level: number;
  desc?: string | undefined;
};
// スキルのリストの型定義
type SkillListProps = {
  skills: Skills[];
  title: string;
};
// スキルのリスト
const languageSkills: Skills[] = [
  {
    name: 'HTML/SCSS',
    level: 4.5,
    desc: '構造化を意識し、アクセシビリティに配慮したセマンティックなHTMLが書けます。アクセシビリティはWAI-AREA等を参考に力を入れて学習しているうちの一つです。 \nCSSはモジュール化していない構成の場合は、BEM設計を採用しています。また、最新のCSSのキャッチアップは怠らずFirefoxまで対応したものから採用しています。変更に強いマークアップを意識しています。※最近は、SCSSからCSSに戻すことを検討しています。',
  },
  {
    name: 'JavaScript',
    level: 3.5,
    desc: 'Webサイト制作においての基本的な操作は問題なくできます。自己学習でSPAサイトをVanilla JSで制作した経験があります。\n現在は、OWLetの業務でのみVanilla JSを使用しています。',
  },
  {
    name: 'TypeScript',
    level: 2,
    desc: '現在、メインで学習し、フレームワークを使用しない場合は、Webpackで環境を構築し、TypeScriptで開発しています。',
  },
  {
    name: 'React/Next',
    level: 3,
    desc: 'Nextで品質が高いサイトの提供を目的で学習しています。Next App Routerを使用しVercelと並行して使用しています。ヘッドレスCMSを利用したサイト制作では、レンダリングをSSG,ISRの実装をしています。また、Reactのみでの個人開発経験があり、Reactのライブラリなどの構築経験があります。',
  },
  {
    name: 'Vue/Nuxt',
    level: 2,
    desc: 'Vue2,のみ実装経験があり、Nuxtは自己学習で一度ヘッドレスCMSのサイトを作成しました。',
  },
  {
    name: 'Angular',
    level: 2,
    desc: '改修業務で経験があります。ng-if,ng-for,ng-class,ng-deepなどの基本的な操作は問題なくできます。',
  },
  {
    name: 'Astro',
    level: 3,
    desc: 'Nextとは別にお客様への提案を広げるための一つとして使用しています。Astroを利用したSSGのサイト構築が可能です。WordPressのAPIヘッドレスCMSのサイト構築も可能です。',
  },
  {
    name: 'PHP',
    level: 3,
    desc: 'お問い合わせ、検索などの処理は業務で経験があり、基本的な処理は問題なく実装できます。また、WordPressの関数も使用できます。',
  },
  {
    name: 'Liquid',
    level: 2,
    desc: '新規ファイル作成、入力項目、カート機能のカスタマイズ、APIの取得などができます。',
  },
  {
    name: 'Express/EJS',
    level: 2,
    desc: 'Expressを使用したサーバーサイドの自己学習で開発経験があります。認証・認可のスクラッチ構築で利用経験があります。',
  },
];
const softSkills: Skills[] = [
  {
    name: 'GitHub',
    level: 3,
    desc: 'チーム開発経験はありませんが、コンフリクト対策、org、merge、branchなどの基本的な操作、対策可能です。また、業務ではGitHubのActionsを使用したCI/CDを利用しています。これまでチーム開発経験がなかったためmain branchを今まで使用していましたが、現在はmain branchを使用せず、develop branchを使用しています。good first issueでOSS活動に取り組み見始めました。\n※個人利用のみコマンドラインを使用しています。',
  },
  {
    name: 'SVN',
    level: 2,
    desc: 'チーム開発で使用しています。まだ、個人利用に近い形でコミットまでしか使用していません。',
  },
  {
    name: 'Webpack',
    level: 3,
    desc: 'TypeScript、WordPressを使用時に環境構築を行っています。',
  },
  {
    name: 'Vite',
    level: 3,
    desc: 'Handlebarsを作成しWebサイトの構築ができます。',
  },
  {
    name: 'Vercel',
    level: 3,
    desc: 'ISRが利用できるためNextと同時に学習しています。進化のスピードも早いため、サーバーサイドはVercelで少しずつ学習しています。',
  },
  {
    name: 'Firebase',
    level: 2,
    desc: 'ホスティングサービスとして使用経験があります。基本的な操作は問題なくでき、Googleアナリティクス、Googleタグマネージャー、の設定も可能です。',
  },
  {
    name: 'MongoDB',
    level: 1.5,
    desc: 'NoSQLとして、学習しています。データベースのCRUD操作をWeb上で実装できます。',
  },
  {
    name: 'MySQL',
    level: 1,
    desc: 'phpmyadminを使用したCRUD操作の自己学習での制作経験があります。',
  },
];
const toolSkills: Skills[] = [
  {
    name: 'WordPress',
    level: 5,
    desc: '業務でクラシックテーマ開発をしています。基本的にプラグインは使用しないよう心がけ、functionsを設定して制作しています。タクソノミー毎のOGP設定なども可能です。また、REST APIを使用したヘッドレス構築も可能です。ハイブリットテーマは知識のみで、業務経験はなく、どのような状況で導入すべきかを見出せていません。',
  },
  {
    name: 'OWLet',
    level: 5,
    desc: 'ほぼすべての機能を使用でき、カスタマイズも可能です。',
  },
  {
    name: 'MicroCMS',
    level: 3,
    desc: 'メインのヘッドレスCMSで、利用しています。Next,AstroでのWebサイト制作ができ、SSGのページネーションや、動的ページの作成も可能です。',
  },
  {
    name: 'Shopify',
    level: 3,
    desc: 'テンプレートをカスタマイズが可能です。カート機能のカスタマイズ、配送先、お届け日時のカスタマイズ、Eコーマスの基本的な設定ができます。',
  },
  {
    name: 'Figma',
    level: 3,
    desc: '個人利用でメインで使用しているツールです。オートレイアウトや、状態を使用したり、プロトタイプの作成は可能ですが、まだまだ勉強中です。個人サイトのモックアップを作成中です。',
  },
  {
    name: 'XD',
    level: 3,
    desc: '業務でメインで使用しています。スマホのみモックアップ作成の実務経験があります。',
  },
  {
    name: 'Photoshop',
    level: 3,
    desc: '基本的な画像の加工、修正、作成ができます。ファビコン、OGP、ロゴ、名刺、画像作成の実務経験があります。',
  },
  {
    name: 'Illustrator',
    level: 2,
    desc: '基本的な操作ができます。ベクター、色の調整、画像の加工ができます。',
  },
];

// 各スタイルのレベルを円グラフで表示するコンポーネント
function SkillCircle({ num }: { num: number }) {
  // レベルに応じて色の円グラフを作成する
  const getGradientStyle = (level: number) => {
    const gradientStart = 0;
    const gradientEnd = (level / 5) * 100;
    return {
      backgroundImage: `conic-gradient(hsla(207, 100%, 72%) ${gradientStart}% ${gradientEnd}%, hsla(0, 0%, 96%, 1) ${gradientEnd}% 100%)`,
    };
  };
  // レベルに応じて表示するテキストを変更する
  let levelText;
  if (num * 20 >= 80) {
    levelText = '上級';
  } else if (num * 20 >= 41) {
    levelText = '中級';
  } else {
    levelText = '初級';
  }
  // レベルに応じた色の円グラフを表示する
  return (
    <div className={styles.skill__circle} style={getGradientStyle(num)}>
      <span className={styles.num}>{levelText}</span>
    </div>
  );
}
// スキルのリストを表示するコンポーネントをエクスポート
export default function Skills() {
  return (
    <>
      <SkillList skills={languageSkills} title="Language Skill" />
      <SkillList skills={softSkills} title="Soft Skill" />
      <SkillList skills={toolSkills} title="Tool Skill" />
    </>
  );
}

// スキルのリストを表示するコンポーネント
function SkillList({ skills, title }: SkillListProps) {
  // スキルの初期状態を定義
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<Skills | null>(null);

  // モーダルを開く処理
  const openSkillModal = (skill: Skills) => {
    // スキルの詳細をモーダルで表示する
    setSelectedSkill(skill);
    // モーダルを開く
    setIsOpen(true);
    // モーダルが開いたときに、スキルリストのフォーカスを外すstyleをあてる
    document.body.style.overflow = 'hidden';
    // モーダルが開いたときに、スキルリストのフォーカスを外す
    const listItems = document.querySelectorAll('.skillItem');
    listItems.forEach((item) => {
      // tabindex属性を-1にすることで、フォーカスを外す
      item.setAttribute('tabindex', '-1');
    });
  };
  // モーダルを閉じる処理
  const closeSkillModal = () => {
    setSelectedSkill(null);
    setIsOpen(false);
    document.body.style.overflow = 'auto';
    const listItems = document.querySelectorAll('.skillItem');
    listItems.forEach((item) => {
      item.removeAttribute('0');
    });
  };
  // モーダルを開いたときに、キーボードでの閉じる処理
  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLLIElement>,
    skill: Skills
  ) => {
    if (event.key === 'Enter') {
      openSkillModal(skill);
    } else if (event.key === 'Escape') {
      closeSkillModal();
    }
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
              onClick={() => openSkillModal(skill)}
              onKeyDown={(e) => handleKeyDown(e, skill)}
              tabIndex={0}
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
