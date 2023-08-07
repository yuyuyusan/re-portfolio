'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './index.module.css';

export default function Navigation() {
  const [isOpen, setOpen] = useState<boolean>(false);

  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);

  return (
    <div>
      {/* ハンバーガーアイコン */}
      <button
        className={styles.menuButton}
        onClick={isOpen ? closeMenu : openMenu}
      >
        <Image
          src={isOpen ? '/close.svg' : '/menu.svg'}
          alt={isOpen ? '閉じる' : 'メニュー'}
          width={24}
          height={24}
          priority
        />
      </button>

      {/* メニューが開いている場合に表示されるメニュー項目 */}
      <nav className={isOpen ? styles.menuClosed : styles.menuOpen}>
        <ul className="flex">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/works">Works</Link>
          </li>
          <li>
            <Link href="/skill">Skill</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
