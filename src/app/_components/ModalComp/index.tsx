'use client';
import { useState } from 'react';
import styles from './index.module.scss';

type ModalProps = {
  modalDesc: string;
  onClose: () => void;
};

export default function ModalComponent({ modalDesc, onClose }: ModalProps) {
  const [isOpen, setIsOpen] = useState(true);
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
