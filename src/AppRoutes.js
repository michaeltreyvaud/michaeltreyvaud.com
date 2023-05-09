import React from 'react';
import {
  createBrowserRouter,
  Navigate,
} from 'react-router-dom';
import {
  ROUTE_WILDCARD,
  ROUTE_HOME,
  ROUTE_SHOWCASE,
  ROUTE_NLP,

  ROUTE_V2_HOME,
  ROUTE_V2_SHOWCASE,
  ROUTE_V2_NLP,
} from './routes';

import Home from './Views/Home';
import Showcase from './Views/Showcase';
import NLP from './Views/NLP';

import StandardLayout from './Layout/Standard';
import V2Home from './Views/V2/Home';
import V2NLP from './Views/V2/NLP';
import V2Showcase from './Views/V2/Showcase';

const AppRoutes = createBrowserRouter([{
  path: ROUTE_HOME,
  element: <Home />,
}, {
  path: ROUTE_SHOWCASE,
  element: <Showcase />,
}, {
  path: ROUTE_NLP,
  element: <NLP />,
}, {
  path: ROUTE_V2_HOME,
  element: <StandardLayout><V2Home /></StandardLayout>,
}, {
  path: ROUTE_V2_SHOWCASE,
  element: <StandardLayout><V2Showcase /></StandardLayout>,
}, {
  path: ROUTE_V2_NLP,
  element: <StandardLayout><V2NLP /></StandardLayout>,
}, {
  path: ROUTE_WILDCARD,
  element: <Navigate to={ROUTE_HOME} />,
}]);

export default AppRoutes;
