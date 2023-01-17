import React from 'react';
import { ToastContainer } from 'react-toastify';
import { AxiosError } from 'axios';

import Header from './ui/containers/Header';
import Footer from './ui/containers/Footer';
import AppNavigation from './ui/containers/AppNavigation';

import userThunks from './store/thunks/userThunks';
import { useAppDispatch } from './store';
import errorHandler from './utils/errorHandler';

const App = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const getUser = async () => {
      const response = await dispatch(userThunks.getUser());
      if (response.payload instanceof AxiosError) {
        errorHandler(response.payload);
      }
    };
    getUser();
  }, [dispatch]);
  return (
    <>

      <Header />

      <ToastContainer
        position="top-center"
        autoClose={9000}
      />

      <AppNavigation />

      <Footer />
    </>
  );
};

export default App;
