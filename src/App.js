import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

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
          <Notifications position="bottom-left" />
          <RouterProvider router={ROUTES} />
        </CorpusProvider>
      </MessengerThemeProvider>
    </MantineProvider>
  );
}

export default App;
