import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../store';

const ProtectedRoute = () => {
  const user = useAppSelector(({ userReducer }) => userReducer.user);
  if (!user) {
    return <Navigate to="/signIn" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
