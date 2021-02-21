import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';

interface IRoute {
    path: string;
    exact: boolean;
    component: React.FC<any>;
    routes?: IRoute[];
}

const RouteWithSubRoute: React.FC<IRoute> = (route) => (
    <Route
        path={route.path}
        exact={route.exact}
        render={(props: RouteComponentProps<any>) => (
            <route.component {...props} routes={route.routes} />
        )}
    />
);

export { RouteWithSubRoute };
