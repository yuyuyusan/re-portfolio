'use client';
import { useState } from 'react';
import styles from './index.module.scss';

// モーダルのpropsの型定義
type ModalProps = {
  modalDesc: string;
  onClose: () => void;
};

// モーダルのコンポーネント propsで受け取った説明文を表示する
export default function ModalComponent({ modalDesc, onClose }: ModalProps) {
  const [isOpen, setIsOpen] = useState(true);
  // モーダルを閉じる
  const closeModal = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className={styles.modalBg} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <p className={styles.modalDesc}>{modalDesc}</p>
            <button className={styles.modalCloseButton} onClick={closeModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
