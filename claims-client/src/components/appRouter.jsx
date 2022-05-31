import React, {useState} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {publicRoutes} from "../routes";
import {Main} from "../container/main";
import {LOGIN_ROUTE} from "./utils/consts";
import {authRoutes} from "../routes";

export const AppRouter = () => {
    const [isAuth, setAuth] = useState(true)
    return (
        <Switch>
            {
                isAuth ?
                    (<Main authRoutes={authRoutes}/>)
                    :
                    publicRoutes.map(({path, Component}) =>
                        <Route key={path} path={path} component={Component} exact/>
                    )
            }
            <Redirect to={LOGIN_ROUTE}/>
        </Switch>
    );
};

