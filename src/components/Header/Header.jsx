import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ModalWindow } from 'components/ModalWindow/ModalWindow';
import { RegistrationForm } from 'components/Auth/RegistrationForm';
import { LoginForm } from 'components/Auth/LoginForm';

import { logOutUser } from 'redux/auth/authOperations';

import styles from './header.module.css';

export const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [authForm, setAuthForm] = useState(null);
  const { isLoggedIn, user } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const onShowModal = ({ currentTarget }) => {
    setShowModal(true);
    setAuthForm(currentTarget.dataset.auth);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const onLogOut = () => {
    dispatch(logOutUser());
  };

  return (
    <header className={styles.header}>
      {isLoggedIn ? (
        <div className={styles.logOutContainer}>
          <p className={styles.logOutText}>{user.name}</p>
          <button type="button" className={styles.authBtn} onClick={onLogOut}>
            Log Out
          </button>
        </div>
      ) : (
        <div className={styles.authContainer}>
          <button
            type="button"
            className={styles.authBtn}
            onClick={onShowModal}
            data-auth="singUp"
          >
            Sing up
          </button>
          <button
            type="button"
            className={styles.authBtn}
            onClick={onShowModal}
            data-auth="singIn"
          >
            Sing in
          </button>
        </div>
      )}

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
