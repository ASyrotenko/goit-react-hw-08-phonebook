import { useState } from 'react';

import { ModalWindow } from 'components/ModalWindow/ModalWindow';
import { RegistrationForm } from 'components/Auth/RegistrationForm';
import { LoginForm } from 'components/Auth/LoginForm';

import styles from './header.module.css';

export const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [authForm, setAuthForm] = useState(null);

  const onShowModal = ({ currentTarget }) => {
    setShowModal(true);
    setAuthForm(currentTarget.dataset.auth);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <header className={styles.header}>
      <button
        className={styles.authBtn}
        onClick={onShowModal}
        data-auth="singUp"
      >
        Sing up
      </button>
      <button
        className={styles.authBtn}
        onClick={onShowModal}
        data-auth="singIn"
      >
        Sing in
      </button>
      {showModal && (
        <ModalWindow onCloseModal={closeModal}>
          {authForm === 'singUp' ? (
            <RegistrationForm onCloseModal={closeModal} />
          ) : (
            <LoginForm onCloseModal={closeModal} />
          )}
        </ModalWindow>
      )}
    </header>
  );
};
