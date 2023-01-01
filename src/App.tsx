import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

import Header from './ui/containers/Header';
import Footer from './ui/containers/Footer';
import AppNavigation from './ui/containers/AppNavigation';
import userThunks from './store/userThunks';
import { useAppDispatch } from './store';

const App = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const getUser = async () => {
      const res = await dispatch(userThunks.getUser());
      // eslint-disable-next-line no-console
      console.log(res);
      if (res.payload.status === 403) {
        toast(res.payload.message);
      }
      if (!res.payload.status) {
        toast('error server connection');
      }
    };
    getUser();
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
