import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Header } from 'components/Header/Header';
import { UserRoutes } from '../../UseRoute';

import { getCurrentUser } from 'redux/auth/authOperations';

import styles from './app.module.css';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <UserRoutes />
      </div>
    </>
  );
}
