import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { store } from './redux/store';
import { auth } from './config/firebase';
import reportWebVitals from './functions/reportWebVitals';
import { privateRoutes, publicRoutes } from './config/routes';

import './styles';
import './styles/custom.scss';

const router = (auth.currentUser !== null ) ? createBrowserRouter(privateRoutes) : createBrowserRouter(publicRoutes);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();