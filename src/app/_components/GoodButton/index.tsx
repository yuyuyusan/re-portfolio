'use client';
import styles from './index.module.scss';
import { useState, useEffect } from 'react';
import { InfoArticle } from '@/app/_libs/microcms/client';
import { updateInfoArticle } from '@/app/_libs/microcms/client';

// 記事の型定義
type Props = {
  article: InfoArticle;
};

export default function GoodButton({ article }: Props) {
  // goodの初期状態を設定ヘッドレスCMSから取得する
  const [good, setGood] = useState(article.goodButton);
  // いいねボタンの連打を防ぐためのフラグ
  const [likeFlg, setLikeFlg] = useState(true);

  useEffect(() => {
    // ローカルストレージからいいねの数を取得する
    const savedLikes = localStorage.getItem(`like_${article.id}`);
    // いいねの数が保存されている場合実行
    if (savedLikes) {
      const parsedLikes = parseInt(savedLikes, 10);
      // not a numberじゃない場合、いいねの数を更新する
      if (!isNaN(parsedLikes)) {
        setGood(parsedLikes);
      }
    }
  }, [article.id]);

  // いいねの数を更新する
  const handleCount = async () => {
    if (!likeFlg) {
      return;
    }
    try {
      // いいねの数を取得する falsyの場合は0を返す
      const likes = parseInt(
        localStorage.getItem(`like_${article.id}`) || '0',
        10
      );
      // not a number の場合は何もしない
      if (isNaN(likes)) {
        return;
      }
      // いいねの上限は2回まで
      if (likes >= 2) {
        console.log('いいねの上限になりました。');
        return;
      }
      // いいねの数を更新する
      setGood(good + 1);
      setLikeFlg(false);
      localStorage.setItem(`like_${article.id}`, (likes + 1).toString());
      // クライアント側でいいねの数を更新する
      const response = await fetch(
        `https://${process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/info/${article.id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'X-MICROCMS-API-KEY':
              process.env.NEXT_PUBLIC_MICROCMS_API_KEY || '',
          },
          body: JSON.stringify({
            goodButton: good + 1,
          }),
        }
      );
      if (!response.ok) {
        setLikeFlg(true);
        setGood(good);
        console.error('いいねの送信に失敗しました。');
      }
    } catch (error) {
      console.error('いいねの送信時にエラーが発生しました。', error);
      setLikeFlg(true);
    }
  };
  return (
    <div className={styles.goodButtonWrap}>
      <button
        onClick={handleCount}
        className={styles.goodButton}
        type="button"
        aria-label="いいね"
        disabled={!likeFlg}
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
