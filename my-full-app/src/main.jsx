import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import KeycloakProvider from "./providers/KeycloakProvider";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <KeycloakProvider>
          <App />
        </KeycloakProvider>
    </BrowserRouter>
  </StrictMode>,
)
