import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

// Routes
import { routes } from 'routes/routes.config';

// Component
import { RouteWithSubRoute } from 'components/RouteWithSubRoutes/routes-with-subroute.component';

export const App: React.FC = () => (
    <Router>
        <>
            <Switch>
                {routes.map((route) => (
                    <RouteWithSubRoute key={route.path} {...route} />
                ))}
            </Switch>
        </>
    </Router>
);
