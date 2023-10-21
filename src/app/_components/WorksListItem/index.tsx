'use client';
import Link from 'next/link';
import Image from 'next/image';
import { CSSProperties } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { WorksArticle } from '@/app/_libs/microcms/client';
import useClientOnly from '@/app/_hooks/useClientOnly';
import styles from './index.module.scss';

type WorksProps = {
  works: WorksArticle;
  onClick?: () => void;
  isSelect?: boolean;
};

export default function WorksListItem({
  works,
  // クリックしたらViewTransitionを開始する
  onClick = () => {},
  isSelect = false,
}: WorksProps) {
  // クライアントサイドのみで実行する
  const isClient = useClientOnly();
  // ホバー時の状態を管理する
  const [isHovered, setIsHovered] = useState(false);
  const handleOnMouseEnter = () => {
    setIsHovered(true);
  };
  const handleOnMouseLeave = () => {
    setIsHovered(false);
  };
  useEffect(() => {
    if (isClient && isSelect) {
      onClick && onClick();
    }
  }, [isClient, isSelect, onClick]);
  return (
    <li key={works.id} className={styles.cardItem}>
      <Link
        href={`/works/${works.id}`}
        className={styles.link}
        aria-label={`${works.title}の詳細ページに飛ぶ`}
      >
        {/* ホバー時に表示する画像 */}
        {works.imagehover ? (
          <Image
            src={works.imagehover.url}
            alt={works.title}
            width={works.imagehover.width}
            height={works.imagehover.height}
            className={`${styles.thumbnailNone} ${
              isHovered ? styles.hovered : ''
            }`}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
        ) : (
          <Image
            src={works.image.url}
            alt={works.title}
            width={works.image.width}
            height={works.image.height}
            className={`${styles.thumbnailNone} ${
              isHovered ? styles.hovered : ''
            }`}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
        )}
        <figure className={styles.thumbnail}>
          {(works.mockup && (
            <Image
              src={works.mockup.url}
              alt={works.title}
              width={works.mockup.width}
              height={works.mockup.height}
              className={styles.thumbnailImg}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
              style={
                {
                  viewTransitionName: `thumbnail-${works.id}`,
                } as CSSProperties
              }
              onClick={onClick}
            />
          )) || (
            <Image
              src={works.image.url}
              alt={works.title}
              width={works.image.width}
              height={works.image.height}
              className={styles.thumbnailImg}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
              style={
                {
                  viewTransitionName: `thumbnail-${works.id}`,
                } as CSSProperties
              }
              onClick={onClick}
            />
          )}
        </figure>
      </Link>
      <div className={styles.infoTop}>
        <time
          dateTime={`${new Date(works.created).toLocaleDateString('ja-JP', {
            year: 'numeric',
            month: 'numeric',
          })}`}
          className={styles.date}
          suppressHydrationWarning={true}
        >
          {new Date(works.created).toLocaleDateString('ja-JP', {
            year: 'numeric',
            month: 'numeric',
          })}
        </time>
        <p className={styles.pf}>{works.platform}</p>
      </div>
      <h3>{works.title}</h3>
      {works.url && (
        <a
          href={works.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${works.title}のページへ`}
          className={styles.url}
        >
          {works.url}
        </a>
      )}
    </li>
  );
}
