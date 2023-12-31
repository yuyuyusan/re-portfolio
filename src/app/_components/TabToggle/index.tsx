'use client';
import React, { useState } from 'react';
import styles from './index.module.scss';

// タブのpropsの型定義
type TabToggleProps = {
  openText: string;
  closeText: string;
  children?: React.ReactNode;
  initialData?: React.ReactNode;
};
export default function TabToggle({
  openText,
  closeText,
  initialData,
  children,
}: TabToggleProps) {
  const [activeTab, setActiveTab] = useState(false);
  // タブを開く
  const handleTabToggle = () => {
    setActiveTab(!activeTab);
  };
  return (
    <>
      <div className={styles.tabList}>
        <button
          onClick={handleTabToggle}
          className={styles.tabButton}
          aria-label={activeTab ? closeText : openText}
        >
          <span className={styles.jp}>{activeTab ? closeText : openText}</span>
        </button>
      </div>
      <div className={`${styles.tabPanel} ${activeTab ? 'js-active' : 'no'}`}>
        {activeTab ? initialData : children}
      </div>
    </>
  );
}
