import { useState } from 'react';

import styles from './auth.module.css';

const initialState = { login: '', email: '', password: '' };

export const RegistrationForm = ({ onCloseModal }) => {
  const [state, setState] = useState(initialState);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(state);
    setState(initialState);
    onCloseModal();
  };

  return (
    <div>
      <h2>Registration</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Login
          <input
            type="text"
            name="login"
            required
            onChange={handleChange}
            value={state.login}
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
