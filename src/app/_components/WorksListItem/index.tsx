// import Link from 'next/link';
// import Image from 'next/image';
// import { WorksArticle } from '@/app/_libs/microcms/client';
// import { CSSProperties } from 'react';

// type Props = {
//   works: WorksArticle;
// };

// export default function NewsListItem({ works }: Props) {

//   return (
//     <li key={works.id}>
//       <Link href={`/works/${works.id}`}>
//         <Image
//           src={works.image.url}
//           alt={works.title}
//           width={works.image.width}
//           height={works.image.height}
//           style={
//             {
//               viewTransitionName: `thumbnail-${works.id}`,
//             } as CSSProperties
//           }
//         />
//       </Link>
//       <p className="text-xs">{new Date(works.created).toLocaleDateString()}</p>
//       <h3>{works.title}</h3>
//       <Link
//         href={works.url}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-xs"
//       >
//         {works.url}
//       </Link>
//     </li>
//   );
// }

'use client';
import Link from 'next/link';
import Image from 'next/image';
import { WorksArticle } from '@/app/_libs/microcms/client';
import { CSSProperties } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useClientOnly from '@/app/_hooks/useClientOnly'; // クライアントサイドでのみ実行する
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
    <li key={works.id}>
      <Link href={`/works/${works.id}`} className="card">
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
            style={
              {
                viewTransitionName: `thumbnail-${works.id}`,
              } as CSSProperties
            }
            onClick={onClick}
          />
        )}
        <figure className={styles.thumbnail}>
          <Image
            src={works.image.url}
            alt={works.title}
            width={works.image.width}
            height={works.image.height}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={
              {
                viewTransitionName: `thumbnail-${works.id}`,
              } as CSSProperties
            }
            onClick={onClick}
          />
        </figure>
      </Link>
      <p className="text-xs" suppressHydrationWarning={true}>
        {new Date(works.created).toLocaleDateString()}
      </p>
      <h3>{works.title}</h3>
      <a
        href={works.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs"
      >
        {works.url}
      </a>
    </li>
  );
}
