'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './index.module.scss';

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

  const handleClick = () => {
    setOpen(!isOpen);
  };
  const handleEscapeKey = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setOpen(false);
    }
  };
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
        aria-controls='gnavi'
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
                <Link href={menu.path} className={styles.gnavMainItem__link} aria-current='page'>
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
