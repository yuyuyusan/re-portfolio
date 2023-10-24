'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './index.module.scss';
import IconMenuOpen from '@/app/_components/icons/menuopen.svg';
import IconMenuClose from '@/app/_components/icons/menuclose.svg';

// ナビゲーションの型定義
type GnaviList = {
  label: string;
  path: string;
};

const menus: GnaviList[] = [
  { label: 'HOME', path: '/' },
  { label: 'WORKS', path: '/works/' },
  { label: 'ABOUT', path: '/about/' },
  { label: 'NOTES', path: '/notes/' },
  { label: 'CONTACT', path: '/contact/' },
];

export default function Navigation() {
  const [isOpen, setOpen] = useState<boolean>(false);

  // メニューを開く
  const handleClick = () => {
    setOpen(!isOpen);
  };
  // エスケープキーを押したらメニューを閉じる
  const handleEscapeKey = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setOpen(false);
    }
  };
  // エスケープキーのイベントを追加する
  useEffect(() => {
    window.addEventListener('keydown', handleEscapeKey);
    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  return (
    <div>
      <button
        className={styles.menuButton}
        onClick={handleClick}
        aria-label={`${isOpen ? '閉じる' : 'メニュー'}ボタン`}
        aria-expanded={isOpen}
        aria-controls="gnavi"
      >
        {isOpen ? (
          <IconMenuClose
            width={24}
            height={24}
            prioritytitle="IconCalendar"
            className={styles.iconImg}
          />
        ) : (
          <IconMenuOpen
            width={24}
            height={24}
            prioritytitle="IconCalendar"
            className={styles.iconImg}
          />
        )}
      </button>

      {isOpen && (
        <nav className={styles.gnav}>
          <ul className={styles.gnavMain}>
            {menus.map((menu, index) => (
              <li key={index} className={styles.gnavMainItem}>
                <Link
                  href={menu.path}
                  className={styles.gnavMainItem__link}
                  aria-current="page"
                >
                  {menu.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className={styles.gnavSub}>
            <li className={styles.gnavSubItem}>
              <a
                href="https://github.com/yuyuyusan/"
                target="_blank"
                rel="norefferer noopenner"
                className={styles.link}
                aria-label="Githubへ"
              >
                <figure className={`${styles.icon} ${styles.iconGithub}`}>
                  <Image
                    src="/icon-github.svg"
                    width={60}
                    height={60}
                    alt="Github"
                    loading="eager"
                  />
                </figure>
              </a>
            </li>
            <li className={styles.gnavSubItem}>
              <a
                href="https://zenn.dev/yuyuyusan"
                target="_blank"
                rel="norefferer noopenner"
                className={styles.link}
                aria-label="Zennへ"
              >
                <figure className={`${styles.icon} ${styles.iconZenn}`}>
                  <Image
                    src="/icon-zenn.svg"
                    width={100}
                    height={60}
                    alt=""
                    loading="eager"
                  />
                </figure>
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
