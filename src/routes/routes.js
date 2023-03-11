import React, { lazy } from "react";
import {   Navigate,  Route,  Routes,} from "react-router-dom";
import Transmissao from "../pages/transmissaoOnline/Transmissao";

import PrivateRoute from './PrivateRoute'




function Private(component) {
    return <PrivateRoute>{component}</PrivateRoute>;
  }

const Register = lazy(() => import("../pages/register/register"));
const Dashboard = lazy(() => import('../pages/Dashboard/Dashboard'));
const Login = lazy(() => import('../pages/Login/Login'));
const Programacao = lazy(() => import("../pages/programacao/programacao"));

export const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/dashboard" element={Private(<Dashboard />)} />
            <Route path="/streaming" element={Private(<Transmissao />)} />
            <Route path="/programacao" element={Private(<Programacao />)} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    )
}