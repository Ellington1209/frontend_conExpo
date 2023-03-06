import "./App.css";
import {  BrowserRouter as Router} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";

import ProgressBar from "./components/atoms/circularProgress/ProgressBar";
import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import { AppRoutes } from "./routes/routes";




function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Aqui você pode definir o tempo que deseja que a progressBar seja exibida, neste exemplo é 1 segundos (2000ms).
  }, []);

  return (
    <Provider store={store}>
      {isLoading ? (<ProgressBar />) : (
        <Router>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
              <AppRoutes/>
          </ThemeProvider>
        </Router>
      )}
    </Provider>
  );
}

export default App;
