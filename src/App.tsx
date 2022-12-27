import React from 'react';
import { ToastContainer } from 'react-toastify';

import {
  Routes,
  Route,
} from 'react-router-dom';
import Header from './ui/containers/Header';
import Footer from './ui/containers/Footer';
import SignUp from './ui/pages/SignUp';
import SignIn from './ui/pages/SignIn';
import Favorites from './ui/pages/Favorites';
import Cart from './ui/pages/Cart';
import MainPage from './ui/pages/MainPage';
import Account from './ui/pages/UserAccount';
import userThunks from './store/userThunks';
import ProtectedRoute from './utils/privateRoute';
import {
  useAppDispatch,
} from './store';

const App = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(userThunks.getUser());
  }, [dispatch]);

  return (
    <>
      <Header />

      <ToastContainer
        position="top-center"
        autoClose={5000}
      />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/book/:bookId" element={<SignUp />} />{/* //change name page */}
        <Route path="/signIn" element={<SignIn />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<Account />} />
          <Route path="/favorites" element={<Favorites />} />{/* //change name page */}
        </Route>
        <Route path="*" element={<p>Theres nothing here: 404!</p>} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
