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
} from './routes';

import StandardLayout from './Layout/Standard';
import Home from './Views/V2/Home';
import NLP from './Views/V2/NLP';
import Showcase from './Views/V2/Showcase';

const AppRoutes = createBrowserRouter([{
  path: ROUTE_HOME,
  element: <StandardLayout><Home /></StandardLayout>,
}, {
  path: ROUTE_SHOWCASE,
  element: <StandardLayout><Showcase /></StandardLayout>,
}, {
  path: ROUTE_NLP,
  element: <StandardLayout><NLP /></StandardLayout>,
}, {
  path: ROUTE_WILDCARD,
  element: <Navigate to={ROUTE_HOME} />,
}]);

export default AppRoutes;
