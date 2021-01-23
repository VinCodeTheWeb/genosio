import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { routes } from 'routes/routes.config';
import { RouterWithSubRoutes } from 'components/RouterWithSubRoutes/router-with-subroutes.component'

const App = () => (
  <Router>
    <div className='app'>
      <Switch>
        {routes.map((route, i) => (
          <RouterWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </div>
  </Router>
);

export { App };
