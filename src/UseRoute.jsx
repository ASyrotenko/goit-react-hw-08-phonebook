import { Routes, Route } from 'react-router-dom';

import { RegistrationForm } from 'components/Auth/RegistrationForm';
import { LoginForm } from 'components/Auth/LoginForm';
import { ContactsPage } from 'components/ContactsPage/ContactsPage';

export const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ContactsPage />} />
      <Route path="/register" element={<RegistrationForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="*" element={<ContactsPage />} />
    </Routes>
  );
};
