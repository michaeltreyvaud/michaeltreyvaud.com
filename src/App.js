import React from 'react';
import {
  RouterProvider,
} from 'react-router-dom';
import ROUTES from './AppRoutes';

function App() {
  return <RouterProvider router={ROUTES} />;
}

export default App;
