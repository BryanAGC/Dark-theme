import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { ThemeProvider } from './hooks/ThemeProvider'; // Importa el contexto
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider> 
      <App />
    </ThemeProvider>
  </StrictMode>
);
