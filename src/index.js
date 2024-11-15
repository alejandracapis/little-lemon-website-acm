import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@fontsource/markazi-text';
import '@fontsource/karla';
import {
      createHashRouter,
      RouterProvider
    } from 'react-router-dom';

    const router = createHashRouter([
      {
        path: "/",
        element: <App />,
      }
    ]);
ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
            <RouterProvider router={router} />
      </React.StrictMode>
);

