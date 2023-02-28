import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import { loginUser } from 'redux/auth/authOperations';

import styles from './auth.module.css';

const initialState = { email: '', password: '' };

export const LoginForm = () => {
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginUser(state));
    setState(initialState);
    navigate('/goit-react-hw-08-phonebook/');
  };

  return (
    <div className={styles.authContainer}>
      <h2>Login</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
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
            type="password"
            name="password"
            required
            onChange={handleChange}
            value={state.password}
            className={styles.input}
          />
        </label>
        <button type="submit" className={styles.formBtn}>
          SIGN IN
        </button>
      </form>
    </div>
  );
};
