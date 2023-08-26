import { useEffect } from 'react';

export default function useClientOnly() {
  const isClient = typeof window !== 'undefined';

  useEffect(() => {
    if (isClient) {
      // クライアントサイドでのみ実行したい処理をここに書く
    }
  }, [isClient]);

  return isClient;
};
