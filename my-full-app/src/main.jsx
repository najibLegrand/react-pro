import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import KeycloakProvider from "./providers/KeycloakProvider";
import { Provider } from "react-redux";
import store from "./store";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./i18n"; // important pour initialiser avant le render

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>     
            <App />        
      </BrowserRouter>
    </Provider>
    </ThemeProvider>
  </StrictMode>,
)
