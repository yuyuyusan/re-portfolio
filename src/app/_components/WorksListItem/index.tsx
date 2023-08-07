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



'use client'
import Link from 'next/link';
import Image from 'next/image';
import { WorksArticle } from '@/app/_libs/microcms/client';
import { CSSProperties } from 'react';
import { useEffect } from 'react';
import useClientOnly from '@/app/_hooks/useClientOnly'; // クライアントサイドでのみ実行する
type Props = {
  works: WorksArticle;
  onClick?: () => void;
  isSelect?: boolean;
};

export default function WorksListItem({ works, onClick = () => {}, isSelect = false }: Props) {
  const isClient = useClientOnly(); 
  useEffect(() => {
    if (isClient && isSelect) {
      // ブラウザ戻るボタンで戻ってきたときに isSelect を false にする
      onClick && onClick(); // onClick ハンドラが指定されていれば実行
    }
  }, [isClient, isSelect, onClick]);
  return (
    <li key={works.id}>
      <Link href={`/works/${works.id}`} className="card">
        <Image
          src={works.image.url}
          alt={works.title}
          width={works.image.width}
          height={works.image.height}
          style={{
            viewTransitionName: `thumbnail-${works.id}`,
          } as CSSProperties}
          onClick={onClick} 
        />
      </Link>
      <p className="text-xs">{new Date(works.created).toLocaleDateString()}</p>
      <h3>{works.title}</h3>
      <Link href={works.url} target="_blank" rel="noopener noreferrer" className="text-xs">
        {works.url}
      </Link>
    </li>
  );
}




