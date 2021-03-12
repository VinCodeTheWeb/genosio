import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

// Routes
import { routes } from 'routes/routes.config';

// Provider
import { AppProvider } from 'providers/app.provider';
// Component
import { RouteWithSubRoute } from 'components/RouteWithSubRoutes/routes-with-subroute.component';

export const App: React.FC = () => (
    <Router>
        <AppProvider>
            <Switch>
                {routes.map((route) => (
                    <RouteWithSubRoute key={route.path} {...route} />
                ))}
            </Switch>
        </AppProvider>
    </Router>
);
