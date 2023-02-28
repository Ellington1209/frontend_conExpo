import './App.css';
import React, {lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import ProgressBar from "./components/atoms/circularProgress/ProgressBar";
import { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';


const Register = lazy(() => import('./pages/register/register'));


function Private(component){
  return(
    <PrivateRoute>
      {component}
    </PrivateRoute>
  )
} 

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Aqui você pode definir o tempo que deseja que a progressBar seja exibida, neste exemplo é 1 segundos (2000ms).
  }, []);

  return (
    <Provider store={store}>
      {isLoading ? (
        <ProgressBar  />
      ) : (
        <Router>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Routes>
              <Route path='dashboard' element={ Private(<Dashboard/>)}/>       
              <Route path='/register' element={<Register/>}/> 
              <Route path='/' element={<Login/>}/> 
            </Routes>
          </ThemeProvider>
        </Router>
      )}
    </Provider>
  );
}

export default App;
