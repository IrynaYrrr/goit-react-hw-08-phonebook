import React, { lazy, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Layout } from './Layout';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

const HomePage = lazy(()=> import('../pages/Home'))
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);


  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/users/register"
          element={
            <RestrictedRoute redirectTo="/users/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/users/login"
          element={
            <RestrictedRoute redirectTo="/users/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/users/contacts"
          element={
            <PrivateRoute redirectTo="/users/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  )
}
