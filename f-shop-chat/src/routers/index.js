import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router';
import { Login } from '../containers/Login/index';
import { Chat } from '../containers/Home/index';
import { NotFound } from '../containers/NotFound';


const routes = [
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path: "/not_found",
        name: "Not Found",
        component: NotFound
    },
    {
        path: "/chat",
        name: "Chat",
        component: Chat
    },
    {
        path: "/",
        name: "Login",
        exact: true,
        component: Login
    }
]

export const PublicRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={
        props => {
            return <Component {...props} key={window.location.pathname} />
        }
    } />
}

export const RouterComponent = () => {
    return <Switch >
        {routes.map((route, index) => {
            if (route.exact) {
                return <PublicRoute key={index} exact path={route.path} component={route.component} />
            }
            return <PublicRoute key={index} path={route.path} component={route.component} />
        })
        }
    </Switch>
}
