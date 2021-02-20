import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

// Pages
import { HomePage } from 'pages';

interface IRoute {
    path: string;
    exact: boolean;
    component: React.FC<RouteComponentProps>;
    routes?: IRoute[];
}

export const routes: IRoute[] = [
    {
        path: '/',
        exact: true,
        component: HomePage,
    },
];
