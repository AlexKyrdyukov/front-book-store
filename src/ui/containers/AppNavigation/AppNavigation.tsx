import React, { Suspense } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Preloader from '../PreLoader/Preloader';

const SignUp = React.lazy(() => import('../../pages/SignUp'));
const SignIn = React.lazy(() => import('../../pages/SignIn'));
const ProtectedRoute = React.lazy(() => import('../../../utils/privateRoute'));
const Cart = React.lazy(() => import('../../pages/Cart'));
const Account = React.lazy(() => import('../../pages/UserAccount'));
const Favorites = React.lazy(() => import('../../pages/Favorites'));
const MainPage = React.lazy(() => import('../../pages/MainPage'));
const AppNavigation = () => {
  return (
    <Suspense fallback={<Preloader />}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/book/:bookId" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<Account />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
        <Route path="*" element={<p>Theres nothing here: 404!</p>} />
      </Routes >
    </Suspense>
  );
};

export default AppNavigation;