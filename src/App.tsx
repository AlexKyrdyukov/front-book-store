import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Header from './ui/containers/Header';
import Footer from './ui/containers/Footer';
import SignUp from './ui/pages/SignUp';
import SignIn from './ui/pages/SignIn';
import Favorites from './ui/pages/Favorites/Favorites';
import Cart from './ui/pages/Cart';
import MainPage from './ui/pages/MainPage';
import Account from './ui/pages/UserAccount';
import userThunks from './store/userThunks';
import ProtectedRoute from './utils/ptivateRoute/ProtectedRoute';
import {
  useAppDispatch,
} from './store';

const App = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const fetchData = async () => {
      // eslint-disable-next-line no-console
      console.log('event');
      dispatch(userThunks.getUser());
    };
    fetchData().catch(console.error);
  }, [dispatch]);

  return (
    <>
      <Header />
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
