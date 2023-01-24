import React from 'react';
import { RouterProvider } from 'react-router-dom';

import { MessengerThemeProvider } from './Context/MessengerTheme';
import { CorpusProvider } from './Context/Corpus';
import MessengerLoader from './MessengerLoader';
import ROUTES from './AppRoutes';

function App() {
  return (
    <MessengerThemeProvider>
      <CorpusProvider>
        <MessengerLoader />
        <RouterProvider router={ROUTES} />
      </CorpusProvider>
    </MessengerThemeProvider>
  );
}

export default App;
