import React, { lazy } from "react";
import {   Navigate,  Route,  Routes,} from "react-router-dom";
import PrivateRoute from './PrivateRoute'



function Private(component) {
    return <PrivateRoute>{component}</PrivateRoute>;
  }

const Register = lazy(() => import("../pages/register/register"));
const Dashboard = lazy(() => import('../pages/Dashboard/Dashboard'));
const Login = lazy(() => import('../pages/Login/Login'));

export const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/dashboard" element={Private(<Dashboard />)} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    )
}