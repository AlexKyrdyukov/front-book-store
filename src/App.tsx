import React from 'react';
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from 'react-router-dom';
import Header from './ui/containers/Header';
import Footer from './ui/containers/Footer';
import SignUp from './ui/pages/SignUp';
import SignIn from './ui/pages/SignIn';
import Catalog from './ui/pages/Catalog';
import Cart from './ui/pages/Cart';
import Home from './ui/pages/Home';
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
        <Route index element={<Catalog />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/cart" element={<Cart />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/account" element={<Account />} />
        </Route>
        <Route path="/account" element={<Account />} />
        <Route path="*" element={<p>Theres nothing here: 404!</p>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
