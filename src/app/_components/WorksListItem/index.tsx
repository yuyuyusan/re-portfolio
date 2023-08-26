'use client';
import Link from 'next/link';
import Image from 'next/image';
import { CSSProperties } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { WorksArticle } from '@/app/_libs/microcms/client';
import useClientOnly from '@/app/_hooks/useClientOnly';
import styles from './index.module.scss';

type Props = {
  works: WorksArticle;
  onClick?: () => void;
  isSelect?: boolean;
};

export default function WorksListItem({
  works,
  onClick = () => {},
  isSelect = false,
}: Props) {
  const isClient = useClientOnly();
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  useEffect(() => {
    if (isClient && isSelect) {
      // ブラウザ戻るボタンで戻ってきたときに isSelect を false にする
      onClick && onClick(); // onClick ハンドラが指定されていれば実行
    }
  }, [isClient, isSelect, onClick]);
  return (
    <li key={works.id} className={styles.cardItem}>
      <Link
        href={`/works/${works.id}`}
        className={styles.link}
        area-label={`${works.title}の詳細ページに飛ぶ`}
      >
        {works.imagehover ? (
          <Image
            src={works.imagehover.url}
            alt={works.title}
            width={works.imagehover.width}
            height={works.imagehover.height}
            className={`${styles.thumbnailNone} ${
              isHovered ? styles.hovered : ''
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
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
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
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
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
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
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
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
      <h3>{works.title}</h3>
      {works.url && (
        <a
          href={works.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.url}
        >
          {works.url}
        </a>
      )}
    </li>
  );
}
