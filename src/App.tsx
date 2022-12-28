import React from 'react';
import { ToastContainer } from 'react-toastify';

import Header from './ui/containers/Header';
import Footer from './ui/containers/Footer';
import AppNavigation from './ui/containers/AppNavigation/AppNavigation';
import userThunks from './store/userThunks';
import { useAppDispatch } from './store';

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

      <AppNavigation />

      <Footer />
    </>
  );
};

export default App;
