import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import { registerNewUser } from './../../redux/auth/authOperations';

import styles from './auth.module.css';

const initialState = { name: '', email: '', password: '' };

export const RegistrationForm = () => {
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(registerNewUser(state));
    setState(initialState);
    navigate('/goit-react-hw-08-phonebook/');
  };

  return (
    <div className={styles.authContainer}>
      <h2>Registration</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Name
          <input
            type="text"
            name="name"
            required
            onChange={handleChange}
            value={state.name}
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Email
          <input
            type="text"
            name="email"
            required
            onChange={handleChange}
            value={state.email}
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Password
          <input
            type="text"
            name="password"
            required
            onChange={handleChange}
            value={state.password}
            className={styles.input}
          />
        </label>
        <button type="submit" className={styles.formBtn}>
          SIGN UP
        </button>
      </form>
    </div>
  );
};
