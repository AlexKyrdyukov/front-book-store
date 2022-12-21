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

const App: React.FC = () => {
  return (
    <>
    <Header />
    <Footer />
    </>
  );
};

export default App;
