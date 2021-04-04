import React, { lazy } from 'react';
import { RouteComponentProps } from 'react-router-dom';

// Pages
const Home = lazy(() => import('../pages/home/home.component'));

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
        component: Home,
    },
];
