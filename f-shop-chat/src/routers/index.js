import React from 'react';
import Login from '../containers/Login/index.js';
import Home from '../containers/Home/index';
import { Switch } from 'react-router';
import { PublicRoute } from './PublicRoute.js';
import { PrivateRoute } from './PrivateRoute.js';
import ChatBox from '../components/ChatBox/index';


const publicRoutes = [
    {
        path: "/",
        name: "Login",
        exact: true,
        component: Login
    }
]

const PrivateRoutes = [
    {
        path: "/chat/:receiveId",
        name: "ChatBox",
        component: ChatBox
    }
]

export const RouterComponent = () => {
    return (
        <Switch>
            {publicRoutes.map((route) => {
                return <PublicRoute key={route.name} exact={true} path={route.path} component={route.component} />
            })}
            <Home>
                {PrivateRoutes.map((route) => {
                    return <PrivateRoute key={route.name} path={route.path} component={route.component} />
                })}
            </Home>
        </Switch>
    );
}
