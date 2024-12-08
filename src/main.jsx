import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { AuthProvider } from './pages/login/login-context/AuthContext.jsx'; // Importa el AuthProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Router future={{ v7_relativeSplatPath: true }}>
        <App />
      </Router>
    </AuthProvider>
  </StrictMode>
);