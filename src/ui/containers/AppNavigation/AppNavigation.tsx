import React from 'react';

import { Routes, Route } from 'react-router-dom';

const AppNavigation = () => {
  const portal 
  return (
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
      </Routes>

  );
};

export default AppNavigation;
