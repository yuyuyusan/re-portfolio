import type { Metadata } from 'next';
import { Noto_Sans_JP, Roboto } from 'next/font/google';
import '@/app/styles/globals.scss';
import styles from '@/app/layout.module.scss';

const notojp = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-notojp',
  display: 'swap',
});

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Yu Portfolio',
    default: 'Yu Portfolio',
  },
  description:
    'Web制作会社に勤めて3年目。マークアップエンジニアのポートフォリオサイトです。',
  openGraph: {
    title: 'Yu Portfolio',
    description:
      'Web制作会社に勤めて3年目。マークアップエンジニアのポートフォリオサイトです。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://s-yu-portfolio.vercel.app/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={styles.body}>{children}</body>
    </html>
  );
}
