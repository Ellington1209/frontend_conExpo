import React from 'react';
import { Navigate } from 'react-router-dom';
import Menu from '../menu';

function isLogin() {
  if (sessionStorage.getItem("auth")) {
    return true
  }
  return false;
}


function PrivateRoute({ children }) {
 
  return !isLogin() ? <Menu>{children}</Menu> : <Navigate Componentto="/login" />;
}



export default PrivateRoute;