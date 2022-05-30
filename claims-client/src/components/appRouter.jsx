import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {publicRoutes} from "../routes";
import {Main} from "../container/main";
import {LOGIN_ROUTE} from "./utils/consts";

export const AppRouter = () => {
    const isAuth = true
    return (
        <Switch>
            {
                isAuth ?
                    (<Main/>)
                    :
                    publicRoutes.map(({path, Component}) =>
                        <Route key={path} path={path} component={Component} exact/>
                    )
            }
            <Redirect to={LOGIN_ROUTE}/>
        </Switch>
    );
};

