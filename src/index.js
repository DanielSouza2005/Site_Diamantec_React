import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContatoFormProvider } from './Context/ContatoForm';
import { LightBoxProvider } from './Context/LightBox';
import { MenuProvider } from './Context/Menu';
import { TraducaoProvider } from './Context/Traducao';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContatoFormProvider>
      <LightBoxProvider>
        <MenuProvider>
          <TraducaoProvider>
            <App />
          </TraducaoProvider>
        </MenuProvider>
      </LightBoxProvider>
    </ContatoFormProvider>
  </React.StrictMode>
);