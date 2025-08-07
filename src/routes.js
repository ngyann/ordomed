import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import DashboardGrid from './composant.jsx/DashboardGrid';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/dashboard',
    element: <DashboardGrid />,
  },
]);

export default router;