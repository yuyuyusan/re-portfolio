import React from 'react';
import Hero from '@/app/_components/Hero';
import Header from '@/app/_components/Header';
import Footer from '@/app/_components/Footer';
import styles from './index.module.scss';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className={styles.aboutMain}>
        <Hero title="Privacy Policy" sub="プライバシーポリシー" />
        {children}
      </main>
      <Footer />
    </>
  );
}
