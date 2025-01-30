import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContatoFormProvider } from './Context/ContatoForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContatoFormProvider>
      <App />
    </ContatoFormProvider>
  </React.StrictMode>
);