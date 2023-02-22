import React from 'react';
import { ToastContainer } from 'react-toastify';

import Header from './ui/containers/Header';
import Footer from './ui/containers/Footer';
import AppNavigation from './ui/containers/AppNavigation';
import cookies from './utils/coookieHelper';

import userThunks from './store/thunks/userThunks';
import { useAppDispatch } from './store';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const token = cookies.refresh.get();
    if (token) {
      (async () => {
        await dispatch(userThunks.getUser());
      })();
    }
  }, [dispatch]);

  return (
    <>

      <Header />

      <ToastContainer
        position="top-center"
        autoClose={5000}
      />

      <AppNavigation />

      <Footer />
    </>
  );
};

export default App;
