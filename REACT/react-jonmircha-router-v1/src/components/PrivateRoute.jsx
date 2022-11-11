import React from 'react'
import { Redirect, Route } from 'react-router-dom'

let auth = true;

const PrivateRoute = ({ component:Component, ...rest }) => {
    return (
        <Route {...rest}>{auth ? <Component /> : <Redirect to='/login' />}</Route>
    );
};

export default PrivateRoute;