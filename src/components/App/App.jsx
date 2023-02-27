import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Header } from 'components/Header/Header';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';

import { getCurrentUser } from 'redux/auth/authOperations';

import styles from './app.module.css';

export default function App() {
  const contactsRedux = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm />
        <h2 className={styles.subTitle}>Contacts</h2>
        <div className={styles.contactListWrap}>
          {contactsRedux.length === 0 ? (
            <p>There is no contacts in your list.</p>
          ) : (
            <>
              <Filter />
              <ContactList />
            </>
          )}
        </div>
      </div>
    </>
  );
}
