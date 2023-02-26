import { useEffect } from 'react';
import styles from './modal-window.module.css';

export const ModalWindow = ({ children, onCloseModal }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onCloseModal]);

  const handleBackDropClick = e => {
    if (e.currentTarget === e.target) {
      onCloseModal();
    }
  };
  return (
    <div className={styles.overlay} onClick={handleBackDropClick}>
      <div className={styles.modal}>
        {children}
        <button className={styles.closeModalBtn} onClick={onCloseModal}>
          Close
        </button>
      </div>
    </div>
  );
};
