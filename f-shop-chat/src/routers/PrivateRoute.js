import React from 'react';
import { Route, Redirect } from 'react-router';
import AuthenticationService from '../services/AuthenticationService'
export const PrivateRoute = ({component: Component, role,...rest}) => {
    return <Route {...rest} render={props => AuthenticationService.isLoggedIn() ? <Component role={role} {...props} /> : <Redirect from="*" to="/"/> }/>
}