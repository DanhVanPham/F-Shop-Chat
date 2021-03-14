import React from 'react';
import Login from '../containers/Login/index.js';
import Home from '../containers/Home/index';
import { Switch } from 'react-router';
import { PublicRoute } from './PublicRoute.js';
import { PrivateRoute } from './PrivateRoute.js';
import ChatBox from '../components/ChatBox/index';
import { FirstPage } from '../components/FirstPage/index.js';
import { CreatePage } from '../components/CreatePage/index.js';


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
        path: "/create/chat",
        name: 'Create',
        component: CreatePage,
        // exact: true
    },
    {
        path: "/chat/:receiveId",
        name: "ChatBox",
        component: ChatBox
    },
    {
        path: "/chat",
        name: "FirstPage",
        exact: true,
        component: FirstPage
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
                    if (route.exact) {
                        return <PrivateRoute exact={true} key={route.name} path={route.path} component={route.component} />
                    } else {
                        return <PrivateRoute key={route.name} path={route.path} component={route.component} />
                    }
                })}
            </Home>
        </Switch>
    );
}
