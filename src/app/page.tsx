'use client';
import React from 'react';
import Image from 'next/image';
import styles from './page.module.scss';
import Link from 'next/link';
import Header from '@/app/_components/Header';
import Footer from '@/app/_components/Footer';
import TSParticles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Engine } from 'tsparticles-engine';

export default function Home() {
  const particlesInit = async (main: Engine) => {
    await loadFull(main);
  };
  return (
    <div className={styles.topBg}>
      <Header />
      <main>
        <TSParticles
          init={particlesInit}
          id="tsparticles"
          options={{
            fpsLimit: 60,
            interactivity: {
              detectsOn: 'canvas',
              events: {
                onClick: {
                  enable: true,
                  mode: 'push',
                },
                onHover: {
                  enable: true,
                  mode: 'repulse',
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: '#ffffff',
              },
              links: {
                color: '#ffffff',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: 'none',
                enable: true,
                outMode: 'bounce',
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: 'circle',
              },
              size: {
                random: true,
                value: 5,
              },
            },
            text: {
              // 表示するテキスト
              value: "SHITSUKAWA",
              // フォントサイズ
              size: 80,
              // フォントのスタイル
              font: "bold",
              // テキストの色
              color: "#ffffff",
              // パーティクルとテキストの間の距離
              distance: 100,
            },
            // テキストが集まるアニメーション
            move: {
              enable: true,
              speed: 2,
              // パーティクルがテキストに集まるように
              attract: {
                enable: true,
                rotateX: 3000,
                rotateY: 3000,
              },
            },
            detectRetina: true,
          }}
        />
        <section className={styles.topContainer}>
          <div className={`${styles.contentsBody}`}>
            <div className={styles.titleBox}>
              <h1 className={styles.pageTitle}>Shitsukawa Portfolio</h1>
            </div>
            <div className={styles.gridTop}>
              <div className={`${styles.gridBox} ${styles.gridTop__works}`}>
                <Link
                  href="/works"
                  className={styles.link}
                  aria-label="実績一覧へ"
                >
                  <h2 className={styles.titleLarge__en}>Works</h2>
                  <figure className={`${styles.icon} ${styles.iconWorks}`}>
                    <Image
                      src="/icon-works.svg"
                      width={120}
                      height={120}
                      alt=""
                    />
                  </figure>
                </Link>
              </div>
              <div className={`${styles.gridBox} ${styles.gridTop__about}`}>
                <Link
                  href="/about"
                  className={styles.link}
                  aria-label="自己紹介ページへ"
                >
                  <h2 className={styles.titleLarge__en}>About</h2>
                  <figure className={`${styles.icon} ${styles.iconAbout}`}>
                    <Image
                      src="/icon-skills.svg"
                      width={120}
                      height={120}
                      alt=""
                    />
                  </figure>
                </Link>
              </div>
              <div className={`${styles.gridBox} ${styles.gridTop__blog}`}>
                <Link
                  href="/notes"
                  className={styles.link}
                  aria-label="ブログ一覧へ"
                >
                  <h2 className={styles.titleLarge__en}>Notes</h2>
                  <figure className={`${styles.icon} ${styles.iconBlog}`}>
                    <Image
                      src="/icon-notes.svg"
                      width={120}
                      height={120}
                      alt=""
                    />
                  </figure>
                </Link>
              </div>
            </div>
            <div className={styles.gridBottom}>
              <div className={`${styles.gridBox} ${styles.gridBottom__box}`}>
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
                    />
                  </figure>
                </a>
              </div>
              <div className={`${styles.gridBox} ${styles.gridBottom__box}`}>
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
                    />
                  </figure>
                </a>
              </div>
              <div className={`${styles.gridBox} ${styles.gridBottom__box}`}>
                <Link href="/contact" className={styles.link}>
                  <h2 className={styles.titleMid__en}>
                    Contact
                    <br />
                    Form
                  </h2>
                </Link>
              </div>
              <div className={`${styles.gridBox} ${styles.gridBottom__box}`}>
                <a
                  href="https://ys-portfolio-c98fe.web.app/"
                  target="_blank"
                  rel="norefferer noopenner"
                  className={styles.link}
                  aria-label="旧サイトへ"
                >
                  <h2 className={styles.titleMid__en}>
                    Previous
                    <br />
                    Site
                  </h2>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
