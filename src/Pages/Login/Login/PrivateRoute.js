import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const PrivateRoute = ({children}) => {
    let {user, isLoading} = useAuth()
    let location = useLocation()
    console.log(user)
    // console.log(isLoading)
    if(isLoading){
        return <CircularProgress color="success" />
    }
    console.log(user)
    if(user.email){
        return children
    }
    return <Navigate to="/login" state={{ from: location }}  />;
    
};

export default PrivateRoute;