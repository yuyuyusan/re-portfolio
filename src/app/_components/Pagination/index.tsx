import Link from 'next/link';
import styles from './index.module.scss';

// ページネーションのpropsの型定義
type Props = {
  totalCount: number;
  current?: number;
  basePath?: string;
  q?: string;
  limit: number;
};

// ページネーションのコンポーネント
export default function Pagination({
  totalCount,
  current = 1,
  basePath = '',
  q,
  limit,
}: Props) {
  // ページ数を計算する
  const pages = Array.from({ length: Math.ceil(totalCount / limit) }).map(
    (_, i) => i + 1
  );

  return (
    <ul className={styles.pagenation}>
      {pages.map((p) => (
        <li className={styles.pagenationItem} key={p}>
          {current !== p ? (
            <Link
              href={`${basePath}/p/${p}` + (q ? `?q=${q}` : '')}
              className={styles.num}
            >
              {p}
            </Link>
          ) : (
            <span className={`${styles.num} ${styles.current}`}>{p}</span>
          )}
        </li>
      ))}
    </ul>
  );
}
