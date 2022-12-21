import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';

import { GlobalStyles } from './ui/containers/GlobalStyles/GlobalStyle';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <>
    <GlobalStyles />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>,
);

reportWebVitals();
