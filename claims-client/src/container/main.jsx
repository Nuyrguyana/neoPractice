import React from 'react';
import {Menu} from "../components/menu";
import {Header} from "../components/header/header";
import {Route} from "react-router-dom";

export const Main = ({authRoutes}) => {
    return (
        <div>
            <Menu/>
            <Header/>
            {
                authRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact/>)
            }
        </div>
    );
};

