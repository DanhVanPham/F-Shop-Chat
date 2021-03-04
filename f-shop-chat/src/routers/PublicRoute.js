import React from 'react';
import { Route, Redirect } from 'react-router';
import AuthenticationService from '../services/AuthenticationService'


export const PublicRoute = ({ component: Component, restrict, ...rest }) => {
    return <Route {...rest} render={
        props => AuthenticationService.isLoggedIn() && restrict ? <Redirect from="*" to="/chat" /> : <Component {...props} />} />
} 