import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const AdminRoute = ({children}) => {
   const {user, isAdmin, isLoading} = useAuth();
   const location = useLocation()

   if(isLoading){
       return <CircularProgress color="success" />
   }
   if(user.email && isAdmin){
       return children
   }
   return<Navigate to="/" state={{ from: location }}  />;
};

export default AdminRoute;