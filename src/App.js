import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';

import { MessengerThemeProvider } from './Context/MessengerTheme';
import { CorpusProvider } from './Context/Corpus';
import MessengerLoader from './MessengerLoader';
import ROUTES from './AppRoutes';

function App() {
  return (
    <MantineProvider>
      <MessengerThemeProvider>
        <CorpusProvider>
          <MessengerLoader />
          <RouterProvider router={ROUTES} />
        </CorpusProvider>
      </MessengerThemeProvider>
    </MantineProvider>
  );
}

export default App;
