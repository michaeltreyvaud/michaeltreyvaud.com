import React from 'react';
import {
  createBrowserRouter,
  Navigate,
} from 'react-router-dom';
import {
  ROUTE_WILDCARD,
  ROUTE_HOME,
  ROUTE_SHOWCASE,
} from './routes';

import Home from './Views/Home';
import Showcase from './Views/Showcase';

const AppRoutes = createBrowserRouter([{
  path: ROUTE_HOME,
  element: <Home />,
}, {
  path: ROUTE_SHOWCASE,
  element: <Showcase />,
}, {
  path: ROUTE_WILDCARD,
  element: <Navigate to={ROUTE_HOME} />,
}]);

export default AppRoutes;
