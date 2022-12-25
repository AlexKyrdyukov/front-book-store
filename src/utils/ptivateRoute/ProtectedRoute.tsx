import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../store';

type PropsType = {
  children?: React.ReactNode | null;
};

const ProtectedRoute = (props: PropsType) => {
  const user = useAppSelector(({ user }) => user);
  if (!user) {
    return <Navigate to="/signIn" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
