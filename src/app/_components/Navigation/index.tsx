'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './index.module.scss';

type GnaviList = {
  label: string;
  path: string;
};

const menus: GnaviList[] = [
  { label: 'HOME', path: '/' },
  { label: 'WORKS', path: '/works' },
  { label: 'ABOUT', path: '/about' },
  { label: 'NOTES', path: '/notes' },
];

export default function Navigation() {
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <div>
      <button
        className={styles.menuButton}
        onClick={handleClick}
        aria-label={`${isOpen ? '閉じる' : 'メニュー'}ボタン`}
      >
        <Image
          src={isOpen ? '/close.svg' : '/menu.svg'}
          alt={isOpen ? '閉じる' : 'メニュー'}
          width={24}
          height={24}
          priority
        />
      </button>

      {isOpen && (
        <nav className={styles.gnav}>
          <ul className={styles.gnavMain}>
            {menus.map((menu, index) => (
              <li key={index} className={styles.gnavMainItem}>
                <Link href={menu.path} className={styles.gnavMainItem__link}>
                  {menu.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
