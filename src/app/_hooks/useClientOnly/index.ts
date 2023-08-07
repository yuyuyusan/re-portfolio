// src/app/_hooks/useClientOnly.ts
import { useEffect } from 'react';

const useClientOnly = () => {
  const isClient = typeof window !== 'undefined';

  useEffect(() => {
    if (isClient) {
      // クライアントサイドでのみ実行したい処理をここに書く
    }
  }, [isClient]);

  return isClient;
};

export default useClientOnly;
