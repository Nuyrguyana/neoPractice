import React from 'react';
import {Menu} from "../components/menu/menu";
import {Header} from "../components/header/header";
import {Redirect, Route} from "react-router-dom";
import {CLAIMS_ROUTE} from "../components/utils/consts";

export const Main = ({authRoutes}) => {
    return (
        <div>
            <Menu/>
            <Header/>
            {
                authRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact/>)
            }
            <Redirect to={CLAIMS_ROUTE}/>
        </div>
    );
};

