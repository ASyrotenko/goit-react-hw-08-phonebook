import { useSelector, useDispatch } from 'react-redux';

import { NavLink } from 'react-router-dom';

import { logOutUser } from 'redux/auth/authOperations';

import styles from './header.module.css';

export const Header = () => {
  const { isLoggedIn, user } = useSelector(state => state.auth);

  const dispatch = useDispatch();

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
          <NavLink className={styles.authBtn} to={'/register'}>
            Sing up
          </NavLink>
          <NavLink className={styles.authBtn} to={'/login'}>
            Sing in
          </NavLink>
        </div>
      )}
    </header>
  );
};
