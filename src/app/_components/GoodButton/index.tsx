'use client';
import styles from './index.module.scss';
import { useState, useEffect } from 'react';
import { InfoArticle } from '@/app/_libs/microcms/client';

type Props = {
  article: InfoArticle;
};

export default function GoodButton({ article }: Props) {
  const [good, setGood] = useState(article.goodButton);
  const [canLike, setCanLike] = useState(true);

  useEffect(() => {
    const savedLikes = localStorage.getItem(`like_${article.id}`);
    if (savedLikes) {
      const parsedLikes = parseInt(savedLikes, 10);
      if (!isNaN(parsedLikes)) {
        setGood(parsedLikes);
      }
    }
  }, [article.id]);

  const handleCount = async () => {
    if (!canLike) {
      return;
    }
    try {
      const likes = parseInt(
        localStorage.getItem(`like_${article.id}`) || '0',
        10
      );
      if (isNaN(likes)) {
        return;
      }
      if (likes >= 2) {
        return;
      }
      setGood(good + 1);
      setCanLike(false);
      localStorage.setItem(`like_${article.id}`, (likes + 1).toString());
      const response = await fetch(
        `https://yushi.microcms.io/api/v1/info/${article.id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'X-MICROCMS-API-KEY': 'feb17f48f7204c99b8dd40af725e95d2311b',
          },
          body: JSON.stringify({
            goodButton: good + 1,
          }),
        }
      );
      if (!response.ok) {
        setCanLike(true);
        setGood(good);
        console.error('いいねの送信に失敗しました。');
      }
    } catch (error) {
      console.error('いいねの送信時にエラーが発生しました。', error);
      setCanLike(true);
    }
  };
  return (
    <div className={styles.goodButtonWrap}>
      <button
        onClick={handleCount}
        className={styles.goodButton}
        type="button"
        aria-label="いいね"
        disabled={!canLike}
      >
        <p className={styles.goodButtonContents}>
          <span className={styles.goodButtonContents__emoji}>👍</span>
          <span className={styles.goodButtonContents__text}>GOOD!!</span>
        </p>
      </button>
      <span className={styles.goodButtonCount}>{good}</span>
    </div>
  );
}