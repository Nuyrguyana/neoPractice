import React from 'react';
import { Redirect, Route } from "react-router-dom";
import { LOGIN_ROUTE } from "./utils/consts";

export const AuthContainer = ({publicRoutes}) => {
    return (
        <div>
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>)}
            <Redirect to={LOGIN_ROUTE}/>
        </div>
    );
};

