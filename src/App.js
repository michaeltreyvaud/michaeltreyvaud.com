import React from 'react';
import { RouterProvider } from 'react-router-dom';

import { MessengerThemeProvider } from './Context/MessengerTheme';
import MessengerLoader from './MessengerLoader';
import ROUTES from './AppRoutes';

function App() {
  return (
    <MessengerThemeProvider>
      <MessengerLoader />
      <RouterProvider router={ROUTES} />
    </MessengerThemeProvider>
  );
}

export default App;
